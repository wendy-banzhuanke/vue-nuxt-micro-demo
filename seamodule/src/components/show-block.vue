<template>
  <div class="show-block-class">
    <div class="publicity-area">宣传区域</div>
    <p class="content-intro">内容简介</p>
    <div class="head-overlay">头像叠加</div>
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
    @apply flex flex-col;

    .publicity-area {
      
    }
    .content-intro {

    }
    .head-overlay {

    }
  }
</style>
