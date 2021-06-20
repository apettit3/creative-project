import Vue from 'vue'
import VueRouter from 'vue-router'
import Embed from 'v-video-embed'

import Home from '../views/Home.vue'
import Shop from "../views/Shop.vue"
import Portfolio from "../views/Portfolio.vue"
import Contact from "../views/Contact.vue"

Vue.use(VueRouter);
Vue.use(Embed);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
