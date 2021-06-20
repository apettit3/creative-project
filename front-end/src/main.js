import Vue from 'vue'
import App from './App.vue'
import router from './router'
import portfolio from "./portfolioData.js"
import shop from "./shopData.js"


Vue.config.productionTip = false

let data = {
  user: null,
  portfolioPieces: portfolio,
  shopPieces: shop,
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
