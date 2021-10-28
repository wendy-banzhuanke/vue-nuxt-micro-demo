<template>
  <MonacoEditor
    :ref="monacoKey"
    value=""
    :language="lanaguage"
    :theme="theme"
    :options="{ ...defaultOptions, ...options }"
    class="editor"
    @editorWillMount="editorWillMount"
    @editorDidMount="editorDidMount"
    @change="editorChange"
  />
</template>

<script>
import Vue from "vue";
import MonacoEditor from "vue-monaco";
import { onMounted, onBeforeUnmount } from "@vue/composition-api";

import { wait } from "@/utils/async";

export default {
  components: {
    MonacoEditor,
  },

  props: {
    theme: {
      // 主题
      type: String,
      default: "vs-dark",
    },
    lanaguage: {
      // 语言
      type: String,
      default: "sql",
    },
    options: {
      // 编译器配置项
      type: Object,
      default: () => {},
    },
    monacoKey: {
      // monaco组件的key
      type: String,
      default: "monacoEditor",
    },
  },

  data() {
    return {
      /**默认配置 */
      defaultOptions: {
        readOnly: false, // 只读模式
        fontSize: 18, // 字体大小
        parameterHints: {
          //参数提示
          cycle: false,
        },
        formatOnPaste: true, // 格式化
        formatOnType: true, // 类型格式
      },
    };
  },

  setup({ monacoKey }, ctx) {
    onMounted(async () => {
      await Vue.nextTick();
      Vue.prototype[`$${monacoKey}`] = ctx.refs[monacoKey];
      await wait(100);
      // 当monaco实例初始化完成时，触发
      ctx.emit("monaco-mounted", ctx.refs[monacoKey]);
    });

    onBeforeUnmount(() => {
      // 当monaco实例销毁之前，触发
      ctx.emit("monaco-before-unmount", ctx.refs[monacoKey]);

      Vue.prototype[`$${monacoKey}`] = null;
    });
  },

  methods: {
    /**
     * 挂载编译器之前调用
     * @param {Object} monacoModule
     */
    editorWillMount(monacoModule) {
      this.$emit("monaco-will-mount", monacoModule);
    },

    /**
     * 挂载编译器之后调用, 提供了一些方法
     * @param {Object} editor  editor:IStandaloneCodeEditor对于普通编辑器，IStandaloneDiffEditor对于差异编辑器。
     */
    editorDidMount(editor) {
      this.$emit("monaco-did-mount", editor);
    },

    /**
     * 编译器值更新时调用
     * @param {String} value 编译器的值
     * @param {Object} event onDidChangeModelContent 当前模型内容更改时发出的事件
     */
    editorChange(value, event) {
      this.$emit("monaco-change", { value, event });
    },
  },
};
</script>

<style>
.editor {
  min-width: 500px;
}
</style>
