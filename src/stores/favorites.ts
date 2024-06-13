import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  actions: {
    toggleFavorite(offer) {
      const index = this.favorites.findIndex((fav) => fav.id === offer.id)
      if (index !== -1) {
        this.favorites.splice(index, 1)
      } else {
        this.favorites.push(offer)
      }
    },
    isFavorite(offer) {
      return this.favorites.some((fav) => fav.id === offer.id)
    }
  }
})
