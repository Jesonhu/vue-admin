# v0.0.2

> Vue & ElementUI后台 inspired by vue-admin-template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 功能说明(A: 添加，B: 优化, F: 修复，N: 说明)
> v0.0.1
  + [A] 后台首页
    + Layout页面整体架构
      + dashboard首页
  + [A] 登录页面
    + 布局使用(element)
      + Form表单组件
      + 
    + 没有登录的时候，访问首页会跳转到登录页面
  + [A] main.js
    + 引入normalize.css模块
    + 引入elementUI框架并配置语言包
    + 引入svg图标
    + 引入Vuex模块
    + 引入permission.js权限控制
      + NProgress进度条模块使用和配置(element-ui模块里面引入这个模块)
      + Message组件使用
      + 验证权限(utils/auth.js)
        + js-cookie模块使用
        + 设置Cookie
        + 读取Cookie
        + 删除Cookie

  + [N] scss 样式类bem方式使用
  + [N] 类bem方式明明
