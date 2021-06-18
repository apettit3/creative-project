import vueVimeoPlayer from 'vue-vimeo-player'
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Shop from "../views/Shop.vue"
import Gallery from "../views/Gallery.vue"
import Contact from "../views/Contact.vue"

Vue.use(vueVimeoPlayer)
Vue.use(VueRouter)

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
    path: "/gallery",
    name: "Gallery",
    component: Gallery
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
