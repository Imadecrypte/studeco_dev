import './assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory()
})

const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')

const authStore = useAuthStore()
authStore.checkAuth()
