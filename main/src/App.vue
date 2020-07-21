<template>
  <div id="main-root" class="main-root">
    <ej-menu class="ej-menu"/>
    <!-- 子应用盒子 -->
    <div id="root-view" class="app-view-box" v-html="content"></div>
  </div>
</template>

<script>
import EjMenu from '@/components/nav-menu'

export default {
  name: "App",
  components: {
    EjMenu,
  },
  props: {
    loading: Boolean,
    content: String
  },
};
</script>

<style lang="scss">
  html, body {
    height: 100vh;
    margin: 0;
  }

  .main-root {
    @apply flex;
    height: inherit;
    .ej-menu {
      width: 200px !important;
      overflow: hidden;
      margin: 0;
    }
    .app-view-box {
      @apply flex-1;
    }
  }
</style>