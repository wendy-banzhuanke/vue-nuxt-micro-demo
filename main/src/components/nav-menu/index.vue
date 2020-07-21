<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical">
    <el-menu-item index="1" @click="routerGo('子应用1', '/seamodule')">
      <i class="el-icon-menu"></i>
      <span slot="title">
        Vue子应用
      </span>
    </el-menu-item>
    <el-menu-item index="2" @click="routerGo('子应用2', '/nuxt')">
      <i class="el-icon-document"></i>
      <span slot="title">
        Nuxt子应用
      </span>
    </el-menu-item>
    <el-menu-item index="3" @click="routerGo('主应用', '/')">
      <i class="el-icon-setting"></i>
      <span slot="title">当前主应用</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import {Menu as ElMenu, MenuItem as ElMenuItem} from 'element-ui'

  export default {
    name: 'NavMenu',

    components: {
      ElMenu,
      ElMenuItem,
    },

    methods: {
      routerGo (title, route) {
        console.log("route", route)
        window.history.pushState({}, title, route); 
      },
    }
  }
</script>

<style lang="scss">
  .el-menu-vertical {
    .el-menu-item {
      @apply text-lg;

      height: 40px;
      line-height: 40px;
    }
  }
</style>