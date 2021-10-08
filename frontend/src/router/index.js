import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/registro',
    name: 'Registro',

    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  }
  ,
  {
    path: '/tabla',
    name: 'Tabla',

    component: () => import(/* webpackChunkName: "about" */ '../views/Tabla.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
