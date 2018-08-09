// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vuex from 'vuex'
import Notify from './Notify'

Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.use(Notify)

Vue.config.productionTip = false

// console.log(Vue)
const store = new Vuex.Store({
  state: {
    collect: []
  },
  mutations: {
    addCollect (state, obj) {
      let { collect } = state
      if (collect.some(item => item === obj)) {

      } else {
        state.collect.unshift(obj)
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
