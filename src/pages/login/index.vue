<template>
  <div class="p-login login-container">
    我是登录
    <el-form></el-form>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>


<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;

  }
</style>

