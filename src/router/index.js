import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
import Lingbujian from '@/views/lingbujian/Lingbujian.vue'
import Renzheng from '@/views/renzheng/Renzheng.vue'
import Gongju from '@/views/gongju/Gongju.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: '主页',
      component: Home
    },
    {
      path: '/lingbujian',
      name: '零部件目录',
      component: Lingbujian
    },
    {
      path: '/renzheng',
      name: '认证信息',
      component: Renzheng
    },
    {
      path: '/gongju',
      name: '专用工具',
      component: Gongju
    }
  ]
})
