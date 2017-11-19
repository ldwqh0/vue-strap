import Vue from 'vue'
import App from './App'
import { router } from './config'
import FastClick from 'fastclick'
import store from './vuex'

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
