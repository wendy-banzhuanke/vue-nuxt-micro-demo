import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Test from '@/views/test.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/seamodule' : '/',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/test',
      component: Test,
    },
  ],
})

export default router
