<template>
  <div class="app-wrapper">
    <!-- 左侧导航 -->
    <sidebar class="sidebar-container"></sidebar>
    <!-- End -->

    <!-- 右侧内容 -->
    <div class="main-container">右侧</div>
    <!-- End -->

  </div>
</template> 

<script>
import Sidebar from '@/components/Sidebar';

export default {
  name: 'layout',
  mounted() {
  },
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
 .app-wrapper {
   @include clearfix;
   position: relative;
   height: 100%;
   width: 100%;
 }
</style>


