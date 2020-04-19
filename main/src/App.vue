<template>
  <div id="main-root">
    <h2 @click="routerGo('子应用1', '/seamodule')">子应用1</h2>
    <h2 @click="routerGo('子应用2', '/nuxt')">子应用2</h2>
    <!-- loading -->
    <div v-if="loading">loading</div>
    <!-- 子应用盒子 -->
    <div id="root-view" class="app-view-box" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    loading: Boolean,
    content: String
  },
  methods: {
    routerGo (title, route) {
      console.log("route", route)
      window.history.pushState({}, title, route); 
    },
  },
};
</script>