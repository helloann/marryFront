import Vue from 'vue'
import Router from 'vue-router'
import MainList from '@/views/mainList/MainList'
import Detail from '@/views/detail/Detail'
import Register from '@/views/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainList
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/mainList',
      component: MainList
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
