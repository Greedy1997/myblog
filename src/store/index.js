import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: localStorage.city || '上海'
  },
  actions: {
    changecity (ctx, name) {
      ctx.commit('changecites', name)
    }
  },
  mutations: {
    changecites (state, name) {
      state.city = name
      localStorage.city = name
    }
  }
})
