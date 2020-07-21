import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
    },
    {
      path: '/test',
      component: () => import('@/views/test.vue'),
    },
  ],
})

export default router
