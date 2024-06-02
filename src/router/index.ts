import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu.vue'
import index from '../pages/index.vue'

const routes = [
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
