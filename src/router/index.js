import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)
const login = r => require.ensure([], () => r(require('@/view/login/login')), 'login')
const user_info = r => require.ensure([], () => r(require('@/view/user_info/user_info')), 'user_info')
const home = r => require.ensure([], () => r(require('@/view/home/home')), 'home')
const manage = r => require.ensure([], () => r(require('@/view/manage/manage')), 'manage')
const order = r => require.ensure([], () => r(require('@/view/order/order')), 'order')
const details = r => require.ensure([], () => r(require('@/view/home/children/details')), 'details')
const news = r => require.ensure([], () => r(require('@/view/home/children/news')), 'news')
const withdraw = r => require.ensure([], () => r(require('@/view/home/children/withdraw')), 'withdraw')
const withdrawReview = r => require.ensure([], () => r(require('@/view/home/children/children/withdrawReview')), 'withdrawReview')
const deviceDetails = r => require.ensure([], () => r(require('@/view/manage/children/deviceDetails')), 'deviceDetails')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      component: login,
      name: 'login'
    }, {
      path: '/user_info',
      component: user_info,
      name: 'user_info',
      redirect: '/user_info/home',
      children: [
        {
          name: 'home',
          component: home,
          path: 'home',
          children: [
            {
              name: 'details',
              component: details,
              path: 'details'
            }, {
              name: 'news',
              component: news,
              path: 'news'
            }, {
              name: 'withdraw',
              component: withdraw,
              path: 'withdraw',
              children: [
                {
                  name: 'withdrawReview',
                  component: withdrawReview,
                  path: 'withdrawReview'
                }
              ]
            }
          ]
        }, {
          name: 'manage',
          component: manage,
          path: 'manage',
          children: [
            {
              name: 'deviceDetails',
              component: deviceDetails,
              path: 'deviceDetails'
            }
          ]
        }, {
          name: 'order',
          component: order,
          path: 'order'
        }
      ]
    }
  ]
})
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})


// main.js 里，如果你使用了 vue-router
router.afterEach(function (to) {
  
})

// router.push('/user_info')
export default router