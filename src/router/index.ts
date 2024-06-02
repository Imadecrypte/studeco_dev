import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu.vue'
import Home from '../pages/index.vue'

const routes = [
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta: { header: 'special' }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { header: 'default' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
