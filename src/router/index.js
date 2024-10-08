import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comp',
    name: 'comp',
    component: () => import('../views/CompView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/FormView.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/AddView.vue')
  },
  {
    path: '/caro',
    name: 'caro',
    component: () => import('../views/CaroView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
