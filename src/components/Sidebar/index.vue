<template>
  <scroll-bar>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" 
    :collapse="true"
    background-color="#304156" 
    text-color="#fff" 
    active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import ScrollBar from '@/components/ScrollBar';
import SidebarItem from '@/components/SidebarItem';

export default {
  name: 'sidebar',
  data() {
    return {}
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  },
  components: {
    ScrollBar,
    SidebarItem
  }
}
</script>

