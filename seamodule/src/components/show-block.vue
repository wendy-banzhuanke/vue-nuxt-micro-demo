<template>
  <div class="show-block-class">
    <div class="publicity-area"></div>
    <p class="content-intro"></p>
    <div class="head-overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'ShowBlock',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
  .show-block-class {
    @apply flex flex-column;
    
    .publicity-area {
      
    }
    .content-intro {

    }
    .head-overlay {

    }
  }
</style>
