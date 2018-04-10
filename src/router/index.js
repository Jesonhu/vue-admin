import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/pages/layout/Layout';

Vue.use(Router)

export default new Router({
  // mode: 'history'
  // Notice: 避免 esline 报错，使用小括号包起来了
  scrollBehavior: () => ({y: 0}),
  routes: [
    { path: '/login', component: () => import('@/pages/login/index'), hidden: true },

    {
      path: '/',
      redirect: '/dashboard',
      name: 'Dashboard',
      component: Layout,
      hidden: true,
      children: [{
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index')
      }]
    }
  ]
})
