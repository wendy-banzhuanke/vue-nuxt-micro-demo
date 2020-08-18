<template>
  <lr-layout :menu="menuData" @click-left="handleMenu">
    <template #right>
      <EditorMonaco 
        :language="currentItem.lang"
        @monaco-mounted="handleMonacoMounted"
        @monaco-before-unmount="handleMonacoBeforeUnmount"
        style="height: 100vh"/>
    </template>
  </lr-layout>
</template>

<script lang="javascript">
import Vue from 'vue'
import { reactive, toRefs } from '@vue/composition-api'
import EditorMonaco from '@/components/monaco'
import LrLayout from '@/components/lr-layout'

export default {
  name: 'eg-monaco',
  components: {
    EditorMonaco,
    LrLayout,
  },
  setup () {
    const state = reactive({
      currentItem: {
        name: 'test-one.sql',
        lang: 'sql',
      },
      menuData: [{
        name: 'test-one.sql',
        lang: 'sql',
      }, {
        name: 'test-two.py',
        lang: 'py',
      }, {
        name: 'test-three.java',
        lang: 'java',
      }, {
        name: 'test-fore.js',
        lang: 'javascript',
      }],
      tabDataState: {} // 页签状态存储容器
    })

    const handleMenu = ({item, index}) => {
      console.log(item, index)
      state.currentItem = item
      resetMonacoModifyState()
    }

    // /**
    //  * 操作tab状态数据
    //  *
    //  * @param {*} operaType init | add | sub
    //  * @param {*} data 操作数据
    //  */
    // function operaTabStateData(data) {
    //   state.tabDataState[data.id] = {model: monaco.editor.createModel(data.value, data.type), state: null}
    // }

    /**
     * 重置monaco编辑时的模型和状态（切换tab和左侧tree时用）
     */
    function resetMonacoModifyState() {
      if (Vue.prototype.$monacoEditor) {
        let currentState = Vue.prototype.$monacoEditor.getModifiedEditor().saveViewState()
        let currentModel = Vue.prototype.$monacoEditor.getModifiedEditor().getModel() // || Vue.prototype.$monacoEditor.monaco.editor.getModels()[0]//Vue.prototype.$monacoEditor.getModifiedEditor().getModel()

        for (const key in state.abDataState) {
          if (state.tabDataState[key].model.id === currentModel.id) {
            state.tabDataState[key].state = currentState
          }
        }

        console.log("state.tabDataState", state.tabDataState)
        Vue.prototype.$monacoEditor.getModifiedEditor().setModel(state.tabDataState[state.currentItem.name].model)
        Vue.prototype.$monacoEditor.getModifiedEditor().restoreViewState(state.tabDataState[state.currentItem.name].state)
        Vue.prototype.$monacoEditor.getModifiedEditor().focus()
      }
    }

    const handleMonacoMounted = () => { // 当monaco实例初始化完成时触发
      // 如果monacoEditor实例不存在，则在monaco实例初始化完成的时候，设置当前tab页对应的model对象
      Vue.prototype.$monacoEditor.getModifiedEditor().setModel(state.tabDataState[state.currentItem.name].model)
      if(state.tabDataState[state.currentItem.name].state) {
        Vue.prototype.$monacoEditor.getModifiedEditor().restoreViewState(state.tabDataState[state.currentItem.name].state)
        Vue.prototype.$monacoEditor.getModifiedEditor().focus()
      }
    }

    const handleMonacoBeforeUnmount = () => { // 当monaco实例销毁之前触发
      let beforeUnmountMonaco = Vue.prototype.$monacoEditor.getModifiedEditor().getModel()
      for (const key in state.tabDataState) {
        if (state.tabDataState[key].model.id === beforeUnmountMonaco.id) {
          state.tabDataState[key].state = Vue.prototype.$monacoEditor.getModifiedEditor().saveViewState()
        }
      }
    }

    return {
      ...toRefs(state),
      handleMenu,
      handleMonacoMounted,
      handleMonacoBeforeUnmount,
    }
  },
}
</script>

<style lang="scss">

</style>