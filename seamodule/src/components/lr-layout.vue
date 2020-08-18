<template>
  <div class="lr-layout-comp">
    <div class="left">
      <div  v-for="(item, index) in menu" 
            :key="index"
            @click="handleMenu(item, index)" 
            :class="['menu', currentIndex === index ? 'active' : '']">{{item.name}}</div>
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs} from '@vue/composition-api'
export default {
  name: 'lr-layout',

  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },

  setup (_, {emit}) {
    const state = reactive({
      currentIndex: 0,
    })

    const handleMenu = (item, index) => {
      // console.log(item, index)
      emit('click-left', {item, index})
      state.currentIndex = index
    }

    return {
      ...toRefs(state),
      handleMenu,
    }
  },
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
        &.active {
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