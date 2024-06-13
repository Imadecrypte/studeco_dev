import { defineStore } from 'pinia'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const authData = await pb.collection('users').authWithPassword(email, password)
        this.isLoggedIn = true
        this.user = authData.record
        return true
      } catch (err) {
        console.error('Failed to login:', err)
        this.isLoggedIn = false
        this.user = null
        return false
      }
    },
    async logout() {
      this.isLoggedIn = false
      this.user = null
      await pb.authStore.clear()
    },
    async checkAuth() {
      this.isLoggedIn = pb.authStore.isValid
      if (this.isLoggedIn) {
        this.user = pb.authStore.model
      } else {
        this.user = null
      }
    }
  }
})
