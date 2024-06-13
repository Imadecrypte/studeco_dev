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

// Offres d'alimentation
const offers = [
  {
    id: 1,
    title: '20 % DE RÉDUCTION SUR UNE COMMANDE AU DRIVE',
    place: "MC DONALD'S",
    address: 'Zac du Pied des Gouttes',
    city: '25200 Montbéliard',
    phone: '03 81 90 00 04',
    image: '/Alim_2.webp',
    backgroundColor: '#FFA500',
    link: 'https://www.mcdonalds.fr'
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
    <h1 class="text-2xl font-bold font-alata mb-3 text-orange-500 text-center">ALIMENTATION</h1>
    <div class="p-5 rounded">
      <img src="/Alim_1.webp" alt="Food Image" class="mx-auto" />
    </div>
    <p class="mt-5">Bienvenue dans le thème de l'alimentation, viens découvrir toutes les offres disponibles !</p>
    <p class="mt-2 font-bold">Consulte les différentes offres et prend connaissance de sa description et de son utilité.</p>
    
    <div v-for="offer in offers" :key="offer.id" class="relative border border-gray-300 rounded-lg my-5">
      <div class="flex justify-center relative z-10">
        <img :src="offer.image" :alt="offer.title" class="w-[300px] -mb-[90px] relative z-10" />
      </div>
      <div class="bg-orange-200 p-5 rounded mt-5 pt-20 text-center" :style="{ backgroundColor: offer.backgroundColor }">
        <div class="text-xl font-bold mt-5">{{ offer.title }}</div>
        <div class="text-lg my-2">
          <p>{{ offer.place }}</p>
          <p>{{ offer.address }}</p>
          <p>{{ offer.city }}</p>
          <p v-if="offer.phone">{{ offer.phone }}</p>
        </div>
        <a :href="offer.link" target="_blank">
          <button class="bg-yellow-400 text-black py-2 px-4 rounded mt-5 mx-auto flex justify-center">
            VOIR OFFRE
          </button>
        </a>
        <div class="heart-icon" @click="isLoggedIn && toggleFavorite(offer)">
          <img :src="favoritesStore.isFavorite(offer) ? '/heart2.svg' : '/heart.svg'" alt="Heart" class="heart-icon" />
        </div>
      </div>
    </div>
    
    <div class="flex justify-between mt-10">
      <RouterLink to="/mobilite">
        <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center">
          <img src="/flèche2.svg" alt="Arrow" class="mr-3 transform" />
          <span class="ml-2">Mobilité</span>
        </button>
      </RouterLink>
      <RouterLink to="/sante">
        <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center">
          Santé
          <img src="/flèche.svg" alt="Arrow" class="ml-3" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>
