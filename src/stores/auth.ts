import { defineStore } from 'pinia'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const authData = await pb.collection('users').authWithPassword(email, password)
        this.isLoggedIn = true
        return true
      } catch (err) {
        console.error('Failed to login:', err)
        this.isLoggedIn = false
        return false
      }
    },
    async logout() {
      this.isLoggedIn = false
      await pb.authStore.clear()
    },
    async checkAuth() {
      this.isLoggedIn = pb.authStore.isValid
    }
  }
})
