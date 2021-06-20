import Vue from 'vue'
import App from './App.vue'
import router from './router'
import portfolio from "./portfolioData.js"

Vue.config.productionTip = false

let data = {
  user: null,
  portfolioPieces: portfolio,
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
