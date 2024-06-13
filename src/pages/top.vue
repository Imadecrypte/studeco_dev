<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useFavoritesStore } from '../stores/favorites'

// Utiliser le store d'authentification pour vérifier si l'utilisateur est connecté
const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.isLoggedIn)

// Utiliser le store de favoris
const favoritesStore = useFavoritesStore()

// Offres
const offers = [
  {
    id: 1,
    title: 'UNE PARTIE DE BOWLING OFFERTE POUR UNE PARTIE ACHETÉE PAR LA MÊME PERSONNE',
    place: 'Bowling des 4 AS',
    address: 'Centre commercial des 4 As',
    city: '90000 Belfort',
    phone: '03 84 54 04 47',
    image: '/Bowling.webp',
    backgroundColor: '#f84644'
  },
  {
    id: 2,
    title: "10 % DE RÉDUCTION SUR L'ARTICLE DE TON CHOIX",
    place: 'Intersport - Belfort',
    address: '6 route de Montbéliard',
    city: '90000 Andelnans',
    phone: '03 84 21 34 92',
    image: '/Sport2.webp',
    backgroundColor: '#4b0082'
  },
  {
    id: 3,
    title: 'UN DONUT OFFERT POUR UN MENU DAILY OU DÉLICH ACHETÉ',
    place: 'Cosy café et cie',
    address: 'Centre commercial des 4 AS',
    city: '90000 Belfort',
    image: '/Donuts.webp',
    backgroundColor: '#00ced1'
  },
  {
    id: 4,
    title: '10 % DE RÉDUCTION SUR UNE COMMANDE AU DRIVE',
    place: "Mc Donald's Montbéliard",
    address: 'Zac du Pied des Gouttes',
    city: '25200 Montbéliard',
    phone: '03 81 90 00 04',
    image: '/Mcdo.webp',
    backgroundColor: '#ffa500'
  },
  {
    id: 5,
    title: '10 % DE RÉDUCTION SUR LA COMMANDE + 1 SANDWICH GRATUIT',
    place: 'Burger King Exincourt',
    address: '4 rue Philippe Goudey, C.C Happyt',
    city: '25400 Exincourt',
    phone: '03 81 37 15 90',
    image: '/Bk.webp',
    backgroundColor: '#ff4500'
  }
]
</script>

<template>
  <div class="container">
    <div class="header">LE TOP</div>
    <p class="subtitle">
      Voici le TOP 5 des meilleures offres, celles les plus intéressantes et utiles pour les étudiants
    </p>

    <div v-for="offer in offers" :key="offer.id" class="offer-card">
      <img :src="offer.image" :alt="offer.title" />
      <div class="offer-details" :style="{ backgroundColor: offer.backgroundColor }">
        <p>{{ offer.title }}</p>
        <p>{{ offer.place }}</p>
        <p>{{ offer.address }}</p>
        <p>{{ offer.city }}</p>
        <p v-if="offer.phone">{{ offer.phone }}</p>
      </div>
      <div class="heart-icon" @click="isLoggedIn && favoritesStore.toggleFavorite(offer)">
        <img :src="favoritesStore.isFavorite(offer) ? '/heart2.svg' : '/heart.svg'" alt="Heart" class="heart-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: 'Jost', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.header {
  font-family: 'Alata', sans-serif;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  position: relative;
}

.header::after {
  content: '';
  display: block;
  width: 100px;
  height: 10px;
  background-color: #ffd700; /* Yellow */
  position: absolute;
  left: 0;
  bottom: -5px;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
}

.offer-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  margin: 20px 0;
}

.offer-card img {
  width: 100%;
  height: auto;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.offer-details {
  color: white;
  padding: 20px;
  text-align: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.offer-details p {
  margin: 5px 0;
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
