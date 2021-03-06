import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
