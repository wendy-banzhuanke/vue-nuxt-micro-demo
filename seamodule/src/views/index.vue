<template>
  <div class="seamodule-index-class">
    <show-block v-for="(item, index) in homeState.introData" 
                :key="index" 
                :data="item"/>
  </div>
</template>

<script>
import useHome from '@/hooks/useHome'
import ShowBlock from '@/components/show-block'

export default {
  name: 'Index',
  components: {
    ShowBlock,
  },
  setup (ctx) {
    const { homeState } = useHome(ctx)
    console.log("homeState==", homeState)
    return {
      homeState,
    }
  }
}
</script>

<style lang="scss">
  .seamodule-index-class {
    @apply flex flex-wrap justify-between;

    &:after{
      @apply block mx-5;
      content: ' ';
      width: 300px;
      height: 0;
    }

    .show-block-class {
      @apply my-5 mx-5;
    }
  }
</style>
