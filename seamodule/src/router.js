/*
 * @Author: zhangjian
 * @Date: 2021-10-27 16:22:55
 * @LastEditTime: 2021-10-27 17:01:28
 * @LastEditors: zhangjian
 * @Description: 
 * 可以输入预定的版权声明、个性签名、空行等
 */
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
      name: 'seamodel-index',
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
