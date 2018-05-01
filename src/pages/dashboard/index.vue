<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: </div>
    <div class="dashboard-text">roles</div>
  </div>
</template>

<script>
export default {
  name: 'dashboard', // 后台首页
  data() {
    return {
      title: '首页'
    }
  },
  mounted() {
    this.addTitle();
  },
  methods: {
    /** 
     * title 补充完整
     * var str;
      var ipos;
      str="123456789+abc";
      ipos = str.indexOf("+");
      str1=str.substring(0,ipos); //取前部分
      str2=str.substring(ipos,str.length);//取后部分
     */
    addTitle() {
      const oldTitle = document.title;
      const ipos = oldTitle.indexOf('—');
      console.log('ipos', ipos);
      
      if (ipos === -1) {
        console.log(11);
        document.title = `${this.title}—${oldTitle}`;
      } else {
        const after = oldTitle.substring(ipos, oldTitle.length);
        document.title = `${this.title}${after}`;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>


