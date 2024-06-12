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
  <div class="font-jost p-5">
    <h1 class="text-2xl font-bold font-alata mb-3 text-[#DFB374] text-center">VÊTEMENTS</h1>
    <div class="p-5 rounded">
      <img src="/Habits.webp" alt="Food Image" class="mx-auto" />
    </div>
    <p class="mt-5">Bienvenue dans le thème des vêtements, viens découvrir toutes les offres disponibles !</p>
    <p class="mt-2 font-bold">Consulte les différentes offres et prend connaissance de sa description et de son utilitée.</p>
    
    <div class=" relative border border-gray-300 rounded-lg my-5">
      <div class="flex justify-center relative z-10">
        <img src="/Machine.webp" alt="Food Offer Image" class="w-[300px] -mb-[90px] relative z-10" />
      </div>
      <div class="bg-[#969691] p-5 rounded mt-5 pt-20 text-center">
        <div class="text-xl font-bold mt-5">10 % DE RÉDUCTION À L'ACHAT OPTIQUE COMPLET </div>
        <div class="text-lg my-2">
          <p>ACUITIS</p>
          <p>28 rue des Febvres</p>
          <p>25200 Montbéliard</p>
          <p>03 63 11 01 73</p>
        </div>
        <a href="https://www.facebook.com/laveriebelfort/" target="_blank" class="">
          <button class="bg-yellow-400 text-black py-2 px-4 rounded mt-5 mx-auto flex justify-center">
            VOIR OFFRE
          </button>
        </a>
      </div>
    </div>
    
    <div class="flex justify-between mt-10">
      <RouterLink to="/sante">
        <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center">
          <img src="/flèche2.svg" alt="Arrow" class="mr-3 transform" />
          <span class="ml-2">Santé</span>
        </button>
      </RouterLink>
      <RouterLink to="/sport">
        <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center">
          Sport
          <img src="/flèche.svg" alt="Arrow" class="ml-3" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>
