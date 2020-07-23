<template>
  <div id="index">
    dddd
    <show-block/>
  </div>
</template>

<script>
import ShowBlock from '@/components/show-block'
export default {
  name: 'Index',
  components: {
    ShowBlock,
  }
}
</script>

<style>
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
