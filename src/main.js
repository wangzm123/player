// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import BottomList from './components/bottomList'
import Bottom from './components/bottom'
import router from './router'
import store from'./store'
Vue.use(Vuex)
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, BottomList, Bottom }
})
