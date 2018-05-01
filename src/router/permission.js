import router from '@/router';
import store from '@/store';
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'; // 进度条样式
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth' // 验证权限

const WHITELIST = ['/login']; // 不定向白名单

/**
 * 路由验证处理
 * 
 * @refer [注册全局前置守卫](https://router.vuejs.org/zh-cn/advanced/navigation-guards.html)
 */
router.beforeEach((to, from, next)  => {
  NProgress.start();

  if (getToken()) { // 获取到了Token: 已设置了Cookie

    // Notice: 由于这里没设置。导致登录的时候正确填入了但是一直加载不能跳转的问题出现
    if (to.path === '/login') {
      console.log('想去登录?');
      next({path: '/'});
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          next();
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('验证失败，请重新登录');
            next({path: '/login'});
          });
        });
      } else {
        next();
      }
    }

  } else { // 未设置Cookie
    if (WHITELIST.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login');
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 滚动条结束吧
});