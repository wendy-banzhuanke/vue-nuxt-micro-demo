<template>
  <lr-layout>
    <template #left>
      <!-- <div class="menu">test-one.sql</div>
      <div class="menu">test-two.py</div>
      <div class="menu">test-two.java</div>
      <div class="menu">test-two.js</div> -->
    </template>
    <template #right>
      <EditorMonaco style="height: 100vh"/>
    </template>
  </lr-layout>
</template>

<script lang="javascript">
import EditorMonaco from '@/components/monaco'
import LrLayout from '@/components/lr-layout'

export default {
  name: 'eg-monaco',
  components: {
    EditorMonaco,
    LrLayout,
  },
}
</script>

<style lang="scss">

</style>