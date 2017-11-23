import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {title: '应用', user: {}},
  mutations: {
    updateTitle (state, payload) {
      if (payload.title) {
        state.title = payload.title
      }
    },
    updateUser (state, payload) {
      state.user = payload.user
    }
  }
})
