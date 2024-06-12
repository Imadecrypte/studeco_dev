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
      <h1 class="text-2xl font-bold font-alata">MOBILITÉ</h1>
      <img src="/Mobilité_offre2.webp" alt="Car Image" class="mx-auto mt-10" />
      <p class="mt-5">Bienvenue dans le thème de la mobilité, viens découvrir toutes les offres disponibles !</p>
      <p class="mt-2 font-bold">Consulte les différentes offres et prend connaissance de sa description et de son utilitée.</p>
    
    <div class="relative border border-gray-300 rounded-lg my-5">
      <div class="flex justify-center relative z-10">
        <img src="/mobilité_offre.webp" alt="Tire Image" class="w-[300px] -mb-[90px] relative z-10" />
      </div>
      <div class="bg-gray-200 p-5 rounded mt-5 pt-20">
        <div class="text-xl font-bold mt-5">69 € LE CONTRÔLE TECHNIQUE</div>
        <div class="text-lg my-2">
          <p>NORISKO - ANDELNANS</p>
          <p>ZAC des Prés</p>
          <p>90400 Andelnans</p>
          <p>03 84 28 00 30</p>
        </div>
        <a href="https://www.dekra-norisko.fr" target="_blank">
          <button class="bg-yellow-400 text-black py-2 px-4 rounded mt-5 mx-auto flex justify-center">
            VOIR OFFRE
          </button>
        </a>
      </div>
    </div>
    
    <RouterLink to="/alimentation">
      <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center mt-10 mb-5 float-right">
        Alimentation
        <img src="/flèche.svg" alt="Arrow" class="ml-3" />
      </button>
    </RouterLink>
  </div>
</template>
