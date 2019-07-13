import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  list: []
}

const mutations = {
  updateValue (state, { key, value }) {
    state[key] = value
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
