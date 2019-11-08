import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Leaflet from '../views/Leaflet.vue'
import UploadFile from '../views/UploadFile.vue'
import CanvasRouter from '../canvas/router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/leaflet',
    name: 'leaflet',
    component: Leaflet
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadFile
  },
  {
    path: '/formatter',
    name: 'formatter',
    component: () => import('../views/Formatter.vue')
  },
  {
    path: '/p5',
    name: 'p5',
    component: () => import('../views/p5.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

routes.push(...CanvasRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
