<template>
  <div class="m-slide-bar-wrap scroll-container"
   ref="scrollContainer"
   @wheel.prevent="onHandleScroll">
    <div class="scroll-wrapper"
    ref="scrollWrapper"
    :style="{top: top + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const DELTA = 15

  export default {
    name: "scrollBar",
    data() {
      return {
        top: 0
      }
    },
    methods: {
      /**
       * 滚轮滚动
       */
      onHandleScroll(e) {
        const eventDelte = e.wheelDelete || -e.deltaY * 3
        const $container = this.$refs.scrollContainer
        const $containerHeight = $container.offsetHeight
        const $wrapper = this.$refs.scrollWrapper
        const $wrapperHeight = $wrapper.offsetHeight

        console.log(e);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../styles/variables.scss';

.scroll-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $menuBg;
  .scroll-wrapper {
    position: absolute;
     width: 100%!important;
  }
}
</style>