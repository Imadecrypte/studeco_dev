import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  const isFavorite = (offer) => {
    return favorites.value.some((fav) => fav.id === offer.id)
  }

  const toggleFavorite = (offer) => {
    if (isFavorite(offer)) {
      favorites.value = favorites.value.filter((fav) => fav.id !== offer.id)
    } else {
      favorites.value.push(offer)
    }
  }

  return {
    favorites,
    isFavorite,
    toggleFavorite
  }
})
