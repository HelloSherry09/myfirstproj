import './main.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

window.app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
