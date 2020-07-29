<template>
  <div class="show-block-class">
    <div class="publicity-area" :style="{background: 'url(' + dynamicBgImg(data.bgImg) + ') no-repeat center'}">
      <div class="publicity-area__mask"></div>
      <p>{{data.title}}</p>
    </div>
    <p class="content-intro">{{data.describe}}</p>
    <div class="head-overlay">
      <div v-for="(item, index) in data.imageData" :key="index" class="head-overlay-wrap" :style="{zIndex: index}">
        <img class="head-overlay-img" :src="require(`@/assets/${item.path}`)"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShowBlock',

  props: {
    data: {
      type: Object,
      default: () => {},
    },
    msg: String
  },

  setup () {
    const dynamicBgImg = (imgName) => {
      const imgPath = require(`./../assets/${imgName}`)
      return imgPath
    }

    return {
      dynamicBgImg,
    }
  }
}
</script>

<style lang="scss" scope>
  $image-wrap--width: 26px;
  $image-self--width: 24px;
  
  @mixin set-container-size ($width, $height) {
    width: $width;
    height: $height;
  }

  .show-block-class {
    @apply flex flex-col rounded text-gray-dark shadow-xl;
    width: 300px;

    &:hover {
      @apply shadow-2xl cursor-pointer;
    }

    .publicity-area {
      @apply relative flex items-center justify-center;

      background-size: 100% 100% !important;
      border-bottom: 1px solid #eee;
      height: 200px;
      transition: .5s;

      &__mask {
        @apply absolute inset-0 bg-black opacity-50;
      }
      p {
        @apply text-white text-2xl opacity-50;
        transition: .5s;
      }
      &:hover {
        background-size: 150% 150% !important;
      }
    }

    .content-intro {
      @apply truncate text-sm px-2;

      border-bottom: 1px solid #eee;
      height: 40px;
      
    }
    .head-overlay {
      @apply flex px-2;

      height: 40px;

      &-wrap {
        @apply bg-white rounded-full ;
        @include set-container-size($image-wrap--width, $image-wrap--width);
        margin-right: -.6em;
      }
      &-img {
        @apply rounded-full border-2 border-solid border-gray-lighter;
        @include set-container-size($image-self--width, $image-self--width);
      }
    }
  }
</style>
