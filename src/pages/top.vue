<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { computed } from 'vue'

// Utiliser le store d'authentification pour vérifier si l'utilisateur est connecté
const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.isLoggedIn)
</script>

<style>
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
  top: 10px;
  right: 10px;
  width: 5px;
  height: 5px;
}
</style>

<template>
  <div class="container">
    <div class="header">LE TOP</div>
    <p class="subtitle">
      Voici le TOP 5 des meilleures offres, celles les plus intéressantes et utiles pour les
      étudiants
    </p>

    <div class="offer-card">
      <img src="/Bowling.webp" alt="Bowling Offer" />
      <div class="offer-details" style="background-color: #f84644">
        <p>UNE PARTIE DE BOWLING OFFERTE POUR UNE PARTIE ACHETÉE PAR LA MÊME PERSONNE</p>
        <p>Bowling des 4 AS</p>
        <p>Centre commercial des 4 As</p>
        <p>90000 Belfort</p>
        <p>03 84 54 04 47</p>
      </div>
      <img v-if="isLoggedIn" src="/heart.svg" alt="Heart" class="heart-icon" />
    </div>

    <div class="offer-card">
      <img src="/Sport2.webp" alt="Intersport Offer" />
      <div class="offer-details" style="background-color: #4b0082">
        <p>10 % DE RÉDUCTION SUR L'ARTICLE DE TON CHOIX</p>
        <p>Intersport - Belfort</p>
        <p>6 route de Montbéliard</p>
        <p>90000 Andelnans</p>
        <p>03 84 21 34 92</p>
      </div>
      <img v-if="isLoggedIn" src="/heart.svg" alt="Heart" class="heart-icon" />
    </div>

    <div class="offer-card">
      <img src="/Donuts.webp" alt="Cosy Offer" />
      <div class="offer-details" style="background-color: #00ced1">
        <p>UN DONUT OFFERT POUR UN MENU DAILY OU DÉLICH ACHETÉ</p>
        <p>Cosy café et cie</p>
        <p>Centre commercial des 4 AS</p>
        <p>90000 Belfort</p>
      </div>
      <img v-if="isLoggedIn" src="/heart.svg" alt="Heart" class="heart-icon" />
    </div>

    <div class="offer-card">
      <img src="/Mcdo.webp" alt="McDonald's Offer" />
      <div class="offer-details" style="background-color: #ffa500">
        <p>10 % DE RÉDUCTION SUR UNE COMMANDE AU DRIVE</p>
        <p>Mc Donald's Montbéliard</p>
        <p>Zac du Pied des Gouttes</p>
        <p>25200 Montbéliard</p>
        <p>03 81 90 00 04</p>
      </div>
      <img v-if="isLoggedIn" src="/heart.svg" alt="Heart" class="heart-icon" />
    </div>

    <div class="offer-card">
      <img src="/Bk.webp" alt="Burger King Offer" />
      <div class="offer-details" style="background-color: #ff4500">
        <p>10 % DE RÉDUCTION SUR LA COMMANDE + 1 SANDWICH GRATUIT</p>
        <p>Burger King Exincourt</p>
        <p>4 rue Philippe Goudey, C.C Happyt</p>
        <p>25400 Exincourt</p>
        <p>03 81 37 15 90</p>
      </div>
      <img v-if="isLoggedIn" src="/heart.svg" alt="Heart" class="heart-icon" />
    </div>
  </div>
</template>
