<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useFavoritesStore } from '../stores/favorites'
import { RouterLink } from 'vue-router'

// Utiliser le store d'authentification pour vérifier si l'utilisateur est connecté
const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.isLoggedIn)

// Utiliser le store de favoris
const favoritesStore = useFavoritesStore()

// Offres de mobilité
const offers = [
  {
    id: 1,
    title: '69 € LE CONTRÔLE TECHNIQUE',
    place: 'NORISKO - ANDELNANS',
    address: 'ZAC des Prés',
    city: '90400 Andelnans',
    phone: '03 84 28 00 30',
    image: '/mobilité_offre.webp',
    backgroundColor: '#D3D3D3',
    link: 'https://www.dekra-norisko.fr'
  }
]

// Fonction pour gérer les favoris
const toggleFavorite = (offer) => {
  favoritesStore.toggleFavorite(offer)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.font-alata {
  font-family: 'Alata', sans-serif;
}

.font-jost {
  font-family: 'Jost', sans-serif;
}

.heart-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>

<template>
  <div class="font-jost p-5">
    <h1 class="text-2xl font-bold font-alata text-center">MOBILITÉ</h1>
    <img src="/Mobilité_offre2.webp" alt="Car Image" class="mx-auto mt-10" />
    <p class="mt-5">
      Bienvenue dans le thème de la mobilité, viens découvrir toutes les offres disponibles !
    </p>
    <p class="mt-2 font-bold">
      Consulte les différentes offres et prend connaissance de sa description et de son utilité.
    </p>

    <div
      v-for="offer in offers"
      :key="offer.id"
      class="relative border border-gray-300 rounded-lg my-5"
    >
      <div class="flex justify-center relative z-10">
        <img :src="offer.image" :alt="offer.title" class="w-[300px] -mb-[90px] relative z-10" />
      </div>
      <div
        class="bg-gray-200 p-5 rounded mt-5 pt-20 text-center"
        :style="{ backgroundColor: offer.backgroundColor }"
      >
        <div class="text-xl font-bold mt-5">{{ offer.title }}</div>
        <div class="text-lg my-2">
          <p>{{ offer.place }}</p>
          <p>{{ offer.address }}</p>
          <p>{{ offer.city }}</p>
          <p v-if="offer.phone">{{ offer.phone }}</p>
        </div>
        <a :href="offer.link" target="_blank">
          <button
            class="bg-yellow-400 text-black py-2 px-4 rounded mt-5 mx-auto flex justify-center"
          >
            VOIR OFFRE
          </button>
        </a>
        <div class="heart-icon" @click="isLoggedIn && toggleFavorite(offer)">
          <img
            :src="favoritesStore.isFavorite(offer) ? '/heart2.svg' : '/heart.svg'"
            alt="Heart"
            class="heart-icon"
          />
        </div>
      </div>
    </div>

    <RouterLink to="/alimentation">
      <button
        class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center mt-10 mb-5 float-right"
      >
        Alimentation
        <img src="/flèche.svg" alt="Arrow" class="ml-3" />
      </button>
    </RouterLink>
  </div>
</template>
