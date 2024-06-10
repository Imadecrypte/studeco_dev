<script setup lang="ts"></script>

<template>
  <div class="container mx-auto p-5 relative">
    <div class="header font-alata text-3xl font-bold mb-2 relative">
      NOTRE LISTE
      <span class="after-element"></span>
    </div>
    <p class="subtitle text-lg mb-5">
      Si tu préfères retrouver les offres près de chez toi par thématique tu es au bon endroit !<br />
      Consulte les différents thèmes et choisis en un afin de découvrir ses offres
    </p>
    <div class="grid grid-cols-2 gap-5 mt-5">
      <router-link to="/Mobilite" class="grid-item relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/Mobilité.webp" alt="Mobilité" class="w-full h-full object-cover opacity-30" />
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-black m-0">MOBILITÉ</p>
      </router-link>
      <router-link to="/Alimentation" class="grid-item relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/Alimentation.webp" alt="Alimentation" class="w-full h-full object-cover opacity-30" />
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-black m-0">ALIMENTATION</p>
      </router-link>
      <router-link to="/Sante" class="grid-item relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/Santé.webp" alt="Santé" class="w-full h-full object-cover opacity-30" />
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-black m-0">SANTÉ</p>
      </router-link>
      <router-link to="/Vetement" class="grid-item relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/Vêtement.webp" alt="Vêtement" class="w-full h-full object-cover opacity-30" />
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-black m-0">VÊTEMENT</p>
      </router-link>
      <router-link to="/Sport" class="grid-item relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/Sport.webp" alt="Sport" class="w-full h-full object-cover opacity-30" />
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-black m-0">SPORT</p>
      </router-link>
      <router-link to="/Loisir" class="grid-item relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/Loisirs.webp" alt="Loisir" class="w-full h-full object-cover opacity-30" />
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-black m-0">LOISIR</p>
      </router-link>
      <router-link to="/Culture" class="grid-item relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/Culture.webp" alt="Culture" class="w-full h-full object-cover opacity-30" />
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-black m-0">CULTURE</p>
      </router-link>
      <router-link to="/Administratif" class="grid-item relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/Admin.webp" alt="Administratif" class="w-full h-full object-cover opacity-30" />
        <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-black m-0">ADMINISTRATIF</p>
      </router-link>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: 'Jost', sans-serif;
  margin: 0;
  padding: 0;
}

.font-alata {
  font-family: 'Alata', sans-serif;
}

.after-element {
  content: '';
  display: block;
  width: 100px;
  height: 10px;
  background-color: #add8e6; /* Light blue */
  position: absolute;
  left: 0;
  bottom: -5px;
}

.yellow-circle {
  position: absolute;
  top: 50px; 
  right: -25px; 
  width: 50px;
  height: 50px;
  background-color: #ffd700; 
  border-radius: 50%;
}
</style>
