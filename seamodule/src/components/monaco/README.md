## Monaco编译器组件

### props

参数 | 说明 | 类型 | 默认值
---|---|---|---
monacoKey | monaco组件的key | String | 'monacoEditor', `此key会挂载到Vue.prototype上，使用实例时：Vue.prototype.$monacoEditor`
theme | 主题 | String | 'vs-dark'
lanaguage | 语言 | String | 'sql'
options | 配置项 | Object | 

### event


事件名称 | 说明 | 参数 
---|---|---
monaco-will-mount | 挂载编译器之前调用 | monacoModule
monaco-mounted | 当monaco实例初始化完成时触发 | 当前refs
monaco-did-mount | 挂载编译器之后调用, 提供了一些方法|  editor:IStandaloneCodeEditor对于普通编辑器，IStandaloneDiffEditor对于差异编辑器 | 
monaco-change | 编译器值更新时调用 | value 编译器的值, event 当前模型内容更改时发出的事件


> monamco实例挂载在Vue.prototype上，monaco宽度和高度，通过Vue.prototype.$monacoEditor.getEditor().layout({width: xxx, height: xxx})
