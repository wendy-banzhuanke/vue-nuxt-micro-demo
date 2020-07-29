import {reactive} from '@vue/composition-api'

/**
 * 首页hooks
 * @param {*} ctx 
 */

export default function useHome (ctx) {
  const {root} = ctx
  console.log("root", root)

  const homeState = reactive({
    introData: [{
      bgImg: 'bg-monaco-02.jpeg',
      title: 'Monaco',
      describe: '摩纳哥编辑器是为VS Code提供支持的代码编辑器。 这里有一个描述代码编辑器功能的好页面。 它已获得MIT许可，并支持Classic Edge，Edge，Chrome，Firefox，Safari和Opera。 移动浏览器或移动Web框架不支持Monaco编辑器。 在摩纳哥编辑器仓库中找到更多信息。',
      imageData: [{
        index: 1,
        path: 'header.jpeg',
      }, {
        index: 2,
        path: 'logo.png',
      }, {
        index: 3,
        path: 'header.jpeg',
      }],
    }, {
      bgImg: 'bg-monaco-02.jpeg',
      title: 'JsPlumb',
      describe: '摩纳哥编辑器是为VS Code提供支持的代码编辑器。 这里有一个描述代码编辑器功能的好页面。 它已获得MIT许可，并支持Classic Edge，Edge，Chrome，Firefox，Safari和Opera。 移动浏览器或移动Web框架不支持Monaco编辑器。 在摩纳哥编辑器仓库中找到更多信息。',
      imageData: [{
        index: 1,
        path: 'header.jpeg',
      }, {
        index: 2,
        path: 'logo.png',
      }, {
        index: 3,
        path: 'header.jpeg',
      }],
    }, {
      bgImg: 'bg-monaco-02.jpeg',
      title: 'CKeditor',
      describe: '摩纳哥编辑器是为VS Code提供支持的代码编辑器。 这里有一个描述代码编辑器功能的好页面。 它已获得MIT许可，并支持Classic Edge，Edge，Chrome，Firefox，Safari和Opera。 移动浏览器或移动Web框架不支持Monaco编辑器。 在摩纳哥编辑器仓库中找到更多信息。',
      imageData: [{
        index: 1,
        path: 'header.jpeg',
      }, {
        index: 2,
        path: 'logo.png',
      }, {
        index: 3,
        path: 'header.jpeg',
      }],
    }, {
      bgImg: 'bg-monaco-02.jpeg',
      title: 'threejs',
      describe: '摩纳哥编辑器是为VS Code提供支持的代码编辑器。 这里有一个描述代码编辑器功能的好页面。 它已获得MIT许可，并支持Classic Edge，Edge，Chrome，Firefox，Safari和Opera。 移动浏览器或移动Web框架不支持Monaco编辑器。 在摩纳哥编辑器仓库中找到更多信息。',
      imageData: [{
        index: 1,
        path: 'header.jpeg',
      }, {
        index: 2,
        path: 'logo.png',
      }, {
        index: 3,
        path: 'header.jpeg',
      }],
    }, {
      bgImg: 'bg-monaco-02.jpeg',
      title: 'threejs',
      describe: '摩纳哥编辑器是为VS Code提供支持的代码编辑器。 这里有一个描述代码编辑器功能的好页面。 它已获得MIT许可，并支持Classic Edge，Edge，Chrome，Firefox，Safari和Opera。 移动浏览器或移动Web框架不支持Monaco编辑器。 在摩纳哥编辑器仓库中找到更多信息。',
      imageData: [{
        index: 1,
        path: 'header.jpeg',
      }, {
        index: 2,
        path: 'logo.png',
      }, {
        index: 3,
        path: 'header.jpeg',
      }],
    }],
  })

  return {
    // ...toRefs(homeState),
    homeState,
  }
}