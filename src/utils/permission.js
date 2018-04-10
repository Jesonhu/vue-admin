import router from '@/router';
import store from '@/store';
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'; // 进度条样式
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth' // 验证权限

const WHITELIST = ['/login']; // 不定向白名单

router.beforeEach((to, from, next)  => {
  NProgress.start();

  if (getToken()) { // 获取到了Token: 已设置了Cookie

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