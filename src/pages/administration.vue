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
    <h1 class="text-2xl font-bold font-alata mb-3 text-[#889CA4] text-center">ADMINISTRATION</h1>
    <div class="p-5 rounded">
      <img src="/Table.webp" alt="Food Image" class="mx-auto" />
    </div>
    <p class="mt-5">Bienvenue dans le thème de l'administration, viens découvrir toutes les offres disponibles !</p>
    <p class="mt-2 font-bold">Consulte les différentes offres et prend connaissance de sa description et de son utilitée.</p>
    
    <div class=" relative border border-gray-300 rounded-lg my-5">
      <div class="flex justify-center relative z-10">
        <img src="/Bank.webp" alt="Food Offer Image" class="w-[350px] -mb-[90px] relative z-10" />
      </div>
      <div class="bg-[#fef7c1] p-5 rounded mt-5 pt-20 text-center">
        <div class="text-xl font-bold mt-5">TA CARTE PREMIUM GRATUITE PENDANT UN AN</div>
        <div class="text-lg my-2">
          <p>Banque Populaire</p>
          <p>Agence Audincourt</p>
          <p>19 avenue Aristide Briand</p>
          <p>25400 Audincourt</p>
          <p>03 81 30 78 73</p>
        </div>
        <a href="https://www.banquepopulaire.fr" target="_blank" class="">
          <button class="bg-yellow-400 text-black py-2 px-4 rounded mt-5 mx-auto flex justify-center">
            VOIR OFFRE
          </button>
        </a>
      </div>
    </div>
    
    <div class="flex justify-between mt-10">
      <RouterLink to="/Culture">
        <button class="bg-blue-300 text-black py-2 px-4 rounded cursor-pointer text-lg flex items-center justify-center">
          <img src="/flèche2.svg" alt="Arrow" class="mr-3 transform" />
          <span class="ml-2">Culture</span>
        </button>
      </RouterLink>
    </div>
  </div>
</template>
