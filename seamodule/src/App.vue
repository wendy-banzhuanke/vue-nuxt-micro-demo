<template>
  <div id="app">
    <template v-if="$route.name !== 'seamodel-index'">
      <router-link :to="{path: '/'}" style="color: #525252">&lt;&lt;&nbsp;返回主页</router-link>
    </template>
    <router-view/>
  </div>
</template>
  
<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  #app {
    @apply p-5 flex flex-col h-full;
  }
</style>

