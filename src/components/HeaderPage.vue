<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router/auto'
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
          <img src="/User.webp" class="w-[30px] h-[30px] object-contain" />
          <div @click="toggleMenu">
            <svg
              width="99"
              height="95"
              viewBox="0 0 99 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[60px] h-[60px] sm:w-[98.64px] sm:h-[94.29px] relative top-1 sm:top-3.5 cursor-pointer"
              preserveAspectRatio="none"
            >
              <path
                d="M47.3938 20.7178V22.6514H63.1917H79.0089L78.9511 20.7546L78.8933 18.8762L63.1532 18.8209L47.3938 18.7841V20.7178Z"
                fill="white"
              ></path>
              <path
                d="M19.6511 47.1444V48.986H49.3204H78.9896V47.1444V45.3029H49.3204H19.6511V47.1444Z"
                fill="white"
              ></path>
              <path
                d="M19.6896 73.5159L19.7474 75.4127L35.5068 75.4679L51.2469 75.5048V73.5711V71.6374H35.449H19.6318L19.6896 73.5159Z"
                fill="white"
              ></path>
            </svg>
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
