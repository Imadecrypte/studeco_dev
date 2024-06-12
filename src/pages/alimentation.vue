<script setup lang="ts">
import { RouterLink } from 'vue-router';
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
</style>

<template>
  <div class="font-jost text-center p-5">
    <h1 class="text-2xl font-bold font-alata mb-3 text-orange-500">ALIMENTATION</h1>
    <div class="p-5 rounded">
      <img src="/Alim_1.webp" alt="Food Image" class="mx-auto" />
    </div>
    <p class="mt-5">Bienvenue dans le thème de l'alimentation, viens découvrir toutes les offres disponibles !</p>
    <p class="mt-2 font-bold">Consulte les différentes offres et prend connaissance de sa description et de son utilité.</p>
    
    <div class="relative border border-gray-300 rounded-lg my-5">
      <div class="flex justify-center relative z-10">
        <img src="/Alim_2.webp" alt="Food Offer Image" class="w-[300px] -mb-[90px] relative z-10" />
      </div>
      <div class="bg-orange-200 p-5 rounded mt-5 pt-20">
        <div class="text-xl font-bold mt-5">20 % DE RÉDUCTION SUR UNE COMMANDE AU DRIVE</div>
        <div class="text-lg my-2">
          <p>MC DONALD'S</p>
          <p>Zac du Pied des Gouttes</p>
          <p>25200 Montbéliard</p>
          <p>03 81 90 00 04</p>
        </div>
        <a href="https://www.mcdonalds.fr" target="_blank" class="">
          <button class="bg-yellow-400 text-black py-2 px-4 rounded mt-5 mx-auto flex justify-center">
            VOIR OFFRE
          </button>
        </a>
      </div>
    </div>
    
    <div class="flex justify-between mt-10">
      <RouterLink to="/mobilite">
        <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center">
          <img src="/flèche2.svg" alt="Arrow" class="mr-3 transform -rotate-180" />
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
