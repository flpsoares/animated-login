import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    isRegister: true
  },
  mutations: {
    toggleRegister(state, isRegister){
      if(isRegister === undefined){
        state.isRegister = !state.isRegister
      }else{
        state.isRegister = isRegister
      }
    }
  }
})