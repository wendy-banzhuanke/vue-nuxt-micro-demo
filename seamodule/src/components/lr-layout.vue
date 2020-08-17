<template>
  <div class="lr-layout-comp">
    <div class="left">
      <!-- <slot name="left" /> -->
      <div class="menu">test-one.sql</div>
      <div class="menu">test-two.py</div>
      <div class="menu">test-two.java</div>
      <div class="menu">test-two.js</div>
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'lr-layout',
}
</script>

<style lang="scss">
  .lr-layout-comp {
    @apply flex w-full;
    .left {
      @apply p-5;
      width: 200px;
      .menu {
        position: relative;
        font-size: 16px;
        color: #262626;
        line-height: 40px;
        cursor: pointer;
        &::before {
          position: absolute;
          top: 15px;
          left: -10px;
          content: '';
          width: 0;
          height: 0;
          display: block;
          border: 5px solid transparent;
          border-left-color: #525252;
        }
        &:hover {
          color: #4499ff;
          &::before {
            border-left-color: #4499ff;
          }
        }
      }
    }
    .right {
      @apply p-5 flex-auto;
    }
  }
</style>