// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import './sass/index.scss'   
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);
FastClick.attach(document.body)

Vue.config.productionTip = false
/* 过滤器 */

Vue.filter('numSpace', function(value){
  return value.replace(/\s/g,'').replace(/(.{4})/g,"$1 ");
})
Vue.filter('phoneSpace', function(value){
  return value.replace(/(\d{3})(\d{4})/,"$1 $2 ");
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
