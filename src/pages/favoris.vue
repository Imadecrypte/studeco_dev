<template>
  <div class="favoris-container">
    <h2>FAVORIS</h2>
    <p>Sur cette page tu retrouveras toutes tes offres favorites !</p>

    <div v-for="offer in favoritesStore.favorites" :key="offer.id" class="offer-card">
      <img :src="offer.image" :alt="offer.title" />
      <div class="offer-details" :style="{ backgroundColor: offer.backgroundColor }">
        <p>{{ offer.title }}</p>
        <p>{{ offer.place }}</p>
        <p>{{ offer.address }}</p>
        <p>{{ offer.city }}</p>
        <p v-if="offer.phone">{{ offer.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '../stores/favorites'

const favoritesStore = useFavoritesStore()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.favoris-container {
  font-family: 'Jost', sans-serif;
  padding: 20px;
}

h2 {
  font-family: 'Alata', sans-serif;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 10px;
  background-color: #ffc107;
  z-index: -1;
}

p {
  font-size: 18px;
  margin-top: 10px;
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
</style>
