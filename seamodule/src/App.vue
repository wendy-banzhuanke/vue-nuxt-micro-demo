<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div @click="$router.push('/test')">跳转到vue-子应用test路由</div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

