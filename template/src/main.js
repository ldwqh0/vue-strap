import Vue from 'vue'
import App from './App'
import { router } from './config'
import store from './vuex'
import VeeValidate from 'vee-validate'
import * as uiv from 'uiv'
import locale from 'uiv/src/locale/lang/zh-CN'

Vue.config.productionTip = false

Vue.use(uiv, {locale})
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
