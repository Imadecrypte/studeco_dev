<script setup lang="ts"></script>


<template>
  <div class="w-full max-w-screen-xl mx-auto p-5 relative">
    <div class="font-alata text-4xl font-bold mb-2 text-left relative">
      E-OFFRES
      <span class="block w-24 h-2 bg-[#83CDAC] absolute left-0 bottom-[-5px]"></span>
    </div>
    <p class="text-lg mb-5 text-left">
      Voici quelques offres disponibles exclusivement sur Internet.<br />
      Consulte les différentes offres et clique sur le lien afin d'accéder à la page web.
    </p>
    <div class="grid grid-cols-1 gap-5 mt-5">
      <div
        class="relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
      >
        <img src="/Asos.webp" alt="ASOS" class="w-full h-auto object-cover opacity-80" />
        <div
          class="absolute bottom-0 w-full bg-white bg-opacity-80 p-3 flex justify-between items-center"
        >
          <div>
            <p class="m-0 text-lg font-bold">ASOS</p>
            <span class="block text-sm font-normal text-gray-600">-20% SUR TOUT</span>
          </div>
          <img
            src="/Internet.svg"
            alt="Internet Icon"
            class="ml-3 w-6 h-6 cursor-pointer"
            @click="goToLink('https://www.asos.com')"
          />
        </div>
      </div>
      <div
        class="relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
      >
        <img src="/Etam.webp" alt="ETAM" class="w-full h-auto object-cover opacity-80" />
        <div
          class="absolute bottom-0 w-full bg-white bg-opacity-80 p-3 flex justify-between items-center"
        >
          <div>
            <p class="m-0 text-lg font-bold">ETAM</p>
            <span class="block text-sm font-normal text-gray-600"
              >-20% DE RÉDUCTION POUR LES ÉTUDIANTS</span
            >
          </div>
          <img
            src="/Internet.svg"
            alt="Internet Icon"
            class="ml-3 w-6 h-6 cursor-pointer"
            @click="goToLink('https://www.etam.com')"
          />
        </div>
      </div>
      <div
        class="relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
      >
        <img src="/Emma.webp" alt="EMMA" class="w-full h-auto object-cover opacity-80" />
        <div
          class="absolute bottom-0 w-full bg-white bg-opacity-80 p-3 flex justify-between items-center"
        >
          <div>
            <p class="m-0 text-lg font-bold">EMMA</p>
            <span class="block text-sm font-normal text-gray-600">JUSQU'À -50%</span>
          </div>
          <img
            src="/Internet.svg"
            alt="Internet Icon"
            class="ml-3 w-6 h-6 cursor-pointer"
            @click="goToLink('https://www.emma.fr')"
          />
        </div>
      </div>
      <div
        class="relative border-2 border-black rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
      >
        <img src="/Adidas.webp" alt="ADIDAS" class="w-full h-auto object-cover opacity-80" />
        <div
          class="absolute bottom-0 w-full bg-white bg-opacity-80 p-3 flex justify-between items-center"
        >
          <div>
            <p class="m-0 text-lg font-bold">ADIDAS</p>
            <span class="block text-sm font-normal text-gray-600">-15% POUR LES ÉTUDIANTS</span>
          </div>
          <img
            src="/Internet.svg"
            alt="Internet Icon"
            class="ml-3 w-6 h-6 cursor-pointer"
            @click="goToLink('https://www.adidas.com')"
          />
        </div>
      </div>
    </div>
    <div class="absolute top-12 right-[-25px] w-12 h-12 bg-[#85D0D9] rounded-full"></div>
  </div>
</template>

<script setup lang="ts">
function goToLink(url: string) {
  window.open(url, '_blank')
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: 'Jost', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
