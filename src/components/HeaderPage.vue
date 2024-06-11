<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.titleh1 {
  font-family: 'Jost', sans-serif;
}

.desc {
  font-family: 'Jost', sans-serif;
}
</style>

<template>
  <div class="flex justify-center items-center w-full">
    <header class="relative w-full h-[422px]">
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            134.68deg,
            #fee47c -0.56%,
            #25c27c 33.13%,
            #26b877 55.25%,
            #47d2e4 79.1%,
            #86d2fd 87.45%
          );
        "
      ></div>
      <div class="absolute top-0 left-0 w-full flex justify-between items-center p-5">
        <router-link to="/">
          <img src="/Studeco_2 4.webp" class="w-[47px] h-[51px] object-cover" />
        </router-link>
        <div class="flex items-center space-x-4">
          <router-link to="/login">
            <img src="/User.webp" class="w-[30px] h-[30px] object-contain" />
          </router-link>
          <div @click="toggleMenu" class="cursor-pointer">
            <div class="w-[33px] h-[3.5px] rounded-[25px] bg-white my-1"></div>
            <div class="w-[21px] h-1 rounded-[25px] bg-white my-1"></div>
            <div class="w-[43px] h-1 rounded-[25px] bg-white my-1"></div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-[73px] left-0 w-full flex justify-center space-x-10 text-white text-sm titleh1"
      >
        <button @click="scrollToSection('carte')" class="focus:outline-none">LA CARTE</button>
        <button @click="scrollToSection('liste')" class="focus:outline-none">LA LISTE</button>
        <button @click="scrollToSection('eoffres')" class="focus:outline-none">LES E-OFFRES</button>
        <button @click="scrollToSection('top')" class="focus:outline-none">LE TOP</button>
      </div>
      <div class="absolute bottom-[123px] left-1/2 transform -translate-x-1/2 text-center">
        <img src="/Studeco_2 5.webp" class="w-[168px] h-[173px] object-cover" />
      </div>
      <p
        class="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 w-[400px] text-[13px] text-white text-center desc"
      >
        L'objectif principal de <span class="text-[#fee47c]">STUD’ECO</span> est de devenir une
        ressource centralisée où les étudiants peuvent accéder à l'ensemble des opportunités
        offertes par leur carte étudiante ou lycéen.
      </p>
    </header>
    <Menu v-if="isMenuOpen" @closeMenu="closeMenu" />
  </div>
</template>
