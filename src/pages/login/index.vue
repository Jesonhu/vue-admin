<template>
  <div class="p-login login-container">
    <el-form class="card-box login-form"
     ref="loginForm"
     :model="loginForm"
     :rules="loginRules"
     label-position="left"
     label-width="0px">
      <h3 class="title">后台管理登录</h3>
      <!-- 用户名 -->
      <el-form-item
       prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"></svg-icon>
        </span>
        <el-input name="username" type="text" autoComplete="on"   placeholder="请输入用户名"
        v-model="loginForm.username"></el-input>
      </el-form-item>
      <!-- End -->

      <!-- 密码 -->
      <el-form-item
      prop="password">
        <span class="svg-container svg-container_password">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" autoComplete="on" placeholder="请输入密码"
         :type="pwdType"
         @keyup.enter.native="onLoginSubmit"
         v-model="loginForm.password"></el-input>
        <span class="show-pwd" @click="onShowPwd">
          <svg-icon icon-class="eye" v-if="pwdType === 'password'"></svg-icon>
          <svg-icon icon-class="eyeopen" v-else></svg-icon>
        </span>
      </el-form-item>
      <!-- End -->

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" class="login-in"
        :loading="loading"
        @click.native.prevent="onLoginSubmit">登录</el-button>
      </el-form-item>
      <!-- End -->

      <!-- 提示 -->
      <div class="tips">
        <el-button type="primary" class="sign-up">注册</el-button>
        <el-button type="primary" class="other-sign-in">第三方登录</el-button>
      </div>
      <!-- End -->
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate';
import { Message } from 'element-ui';

/**
 * 验证是否满足用户名格式
 * 
 *@param {} rule 
 *@param {string} value 
 *@param {function} callback
 *@desc isvalidUsername设置的规则是用户名只能输入'admin'或者'editar'
 */
const validateUsernmame = (rule, value, callback) => {
  if (!isvalidUsername(value)) {
    callback(new Error('请输入正确的用户名'));
  } else {
    callback();
  }
}

/**
 * 验证是否满足密码格式
 * 
 *@param {} rule 
 *@param {string} rule 
 *@param {function} rule 
 */
const validatePass = (rule, value, callback) => {
  if (value.length < 5) {
    callback(new Error('密码不能小于5位'));
  } else {
    callback();
  }
}

export default {
  name: 'login',
  data() {
    return {
      title: '登录',
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        // username: [{required: true, trigger: 'blur', message: '请输入用户名'}],
        // password: [{required: true, trigger: 'blur', message: '请输入密码'}]
        username: [{required: true, trigger: 'blur', validator: validateUsernmame}],
        password: [{required: true, trigger: 'blur', validator: validatePass}]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  mounted() {
    this.addTitle();
  },
  methods: {
    /* 密码是否明文切换 */
    onShowPwd() {
      this.pwdType = this.pwdType === 'password' ? '' : 'password';
    },
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
      
      if (ipos === -1) {
        document.title = `${this.title}—${oldTitle}`;
      } else {
        const after = oldTitle.substring(ipos, oldTitle.length);
        document.title = `${this.title}${after}`;
      }
    },
    /**
     * 点击按钮提交
     * 
     * @refer [element-ui form 组件](http://element-cn.eleme.io/#/zh-CN/component/form)
     */
    onLoginSubmit() {
      this.$refs.loginForm.validate(isValidatePass => {
        // 验证通过
        if (isValidatePass) {
          this.loading = true;
          this.$store.dispatch('Login', this.loginForm).then(() => {
            console.log('可以跳转到后台了');
            this.loading = false;
            this.$router.push({path: '/'});
          }).catch(() => {
            this.loading = false;
          });
        } else {
          // console.log('格式不正确', Message);
          return false;
        }
      });
    }
  }
}

/**
 * 参考资料:
 * [elementUI-form](http://element-cn.eleme.io/#/zh-CN/component/form)
 * [vue开发中，父组件添加scoped之后。解决在父组件中无法修改子组件样式问题](https://zhuanlan.zhihu.com/p/29266022)
 * [如何修改Element-UI的input样式](https://segmentfault.com/q/1010000009105809)
 */
</script>


<style lang="scss" scoped>
  @charset "utf-8";
  
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  $input_height: 47px;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff!important;
    }
    input {
      padding: 12px 5px 12px 15px;
      color:$light_gray;
      height:$input_height;
      border:0;
      -webkit-appearance: none;
      border-radius: 0;
      background:transparent;
    }
    // elment-ui form default css change
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, .1);
      border-radius: 5px;
      color:#454545;
      background:rgba(0, 0, 0, .1);
    }
    .el-input {
      display: inline-block;
      height:$input_height;
      width:85%;
    }

    // 表单中svg样式
    .svg-container {
      display: inline-block;
      padding: 6px 5px 6px 15px;
      width:30px;
      color:$light_gray;
      vertical-align: middle;
      &_login {
        font-size:20px;
      }
    }

    // 显示内容容器
    .login-form {
      position: absolute;
      left:0;
      right:0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    // 标题
    .title {
      margin: 0;
      margin-bottom: 40px;
      color: $light_gray;
      text-align: center;
      font-weight: bold;
      font-size:26px;
    }

    // 表单相关
    .login-form {
      position: absolute;
      left:0;
      right:0;
      width:400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;

      // 密码
      .show-pwd {
        position: absolute;
        right:10px;
        top:7px;
        font-size:16px;
        color:#eee;
        cursor: pointer;
        user-select: none;
      }

      // 登录按钮
      .login-in{
        width:100%;
      }

      // 提示
      .tips{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        > * {
          min-width: 112px;
        }
      }
    }
  }
  // input 默认样式修改
  .login-container /deep/ .el-input__inner {
    background: transparent!important;
    border: 0;
    padding:12px 5px 12px 15px;
    color:#eee;
    height: $input_height;
  }
</style>

