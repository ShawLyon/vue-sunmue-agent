import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home = r => require.ensure([], () => r(require('@/view/home/home')), 'home')
const login = r => require.ensure([], () => r(require('@/view/login/login')), 'login')
const manage = r => require.ensure([], () => r(require('@/view/manage/manage')), 'manage')
// const login = r => require.ensure([], () => r(require('@/view/login/login')), 'login')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      component: home,
      path: '/home',

    },
    {
      name: 'login',
      component: login,
      path: '/login'
    },
    {
      name: 'manage',
      component: manage,
      path: '/manage'
    }
  ]
})
