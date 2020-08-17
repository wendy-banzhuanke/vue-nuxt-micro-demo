import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import EgMonaco from '@/views/eg-monaco'
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
      path: '/monaco',
      name: 'eg-monaco',
      component: EgMonaco,
    },
    {
      path: '/test',
      component: Test,
    },
  ],
})

export default router
