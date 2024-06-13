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
    <h1 class="text-2xl font-bold font-alata mb-3 text-[#DFB374] text-center">CULTURE</h1>
    <div class="p-5 rounded">
      <img src="/Terre.webp" alt="Food Image" class="mx-auto" />
    </div>
    <p class="mt-5">Bienvenue dans le thème de la culture, viens découvrir toutes les offres disponibles !</p>
    <p class="mt-2 font-bold">Consulte les différentes offres et prend connaissance de sa description et de son utilitée.</p>
    
    <div class=" relative border border-gray-300 rounded-lg my-5">
      <div class="flex justify-center relative z-10">
        <img src="/403.webp" alt="Food Offer Image" class="w-[350px] -mb-[90px] relative z-10" />
      </div>
      <div class="bg-[#fef7c1] p-5 rounded mt-5 pt-20 text-center">
        <div class="text-xl font-bold mt-5">9 € L'ENTRÉE</div>
        <div class="text-lg my-2">
          <p>Musée de l'aventure Peugeot</p>
          <p>Carrefour de l'Europe</p>
          <p>25600 Sochaux</p>
          <p>03 81 99 42 03</p>
        </div>
        <a href="https://laventure-association.com/laventure-peugeot/le-musee-de-laventure-peugeot/" target="_blank" class="">
          <button class="bg-yellow-400 text-black py-2 px-4 rounded mt-5 mx-auto flex justify-center">
            VOIR OFFRE
          </button>
        </a>
      </div>
    </div>
    
    <div class="flex justify-between mt-10">
      <RouterLink to="/Loisirs">
        <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center">
          <img src="/flèche2.svg" alt="Arrow" class="mr-3 transform" />
          <span class="ml-2">Loisirs</span>
        </button>
      </RouterLink>
      <RouterLink to="/administration">
        <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center">
          Administration
          <img src="/flèche.svg" alt="Arrow" class="ml-3" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>
