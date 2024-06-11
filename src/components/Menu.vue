<template>
  <div class="menu-overlay">
    <div class="menu-content">
      <div class="header-container">
        <div class="header-background"></div>
        <router-link to="/">
          <img
            src="/Studeco_2 5.webp"
            class="w-[47px] h-[51px] absolute left-[9.5px] top-[6.5px] object-cover"
          />
        </router-link>
        <div class="close-button" @click="handleLinkClick"></div>
      </div>
      <ul class="menu-sections">
        <li v-for="section in sections" :key="section.title" class="menu-item">
          <router-link
            :to="section.path"
            class="flex items-center justify-center text-left text-xl font-bold focus:outline-none"
            @click="handleLinkClick"
          >
            <span>{{ section.title }}</span>
          </router-link>
        </li>
      </ul>
      <div class="additional-links">
        <router-link to="/contact">
          <div class="link-container">
            <div class="link-background"></div>
            <p class="link-text">Contact</p>
          </div>
        </router-link>
        <router-link to="/a-propos">
          <div class="link-container">
            <div class="link-background"></div>
            <p class="link-text"><span class="uppercase">à </span><span>propos</span></p>
          </div>
        </router-link>
        <router-link to="/inscription">
          <div class="link-container">
            <div class="link-background"></div>
            <p class="link-text">Inscription</p>
          </div>
        </router-link>
        <router-link to="/mentions-legales">
          <div class="link-container">
            <div class="link-background"></div>
            <p class="link-text text-sm">Mentions Légales</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { RouterLink } from 'vue-router/auto'

const emit = defineEmits(['closeMenu'])

const sections = [
  { title: 'Accueil', path: '/' },
  { title: 'Carte', path: '/carte' },
  { title: 'Liste', path: '/liste' },
  { title: 'E-Offres', path: '/eoffres' },
  { title: 'Top', path: '/top' }
]

const handleLinkClick = () => {
  emit('closeMenu')
}
</script>

<style scoped>
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-content {
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  background: white;
}

.header-container {
  position: relative;
  margin-bottom: 16px;
  height: 65px;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    134.68deg,
    #fee47c -0.56%,
    #25c27c 33.13%,
    #26b877 55.25%,
    #47d2e4 79.1%,
    #86d2fd 87.45%
  );
  height: 100px;
}

.menu-sections {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-item {
  width: 75%;
  padding: 10px 0;
  border-bottom: 1px solid black;
}

.menu-item:last-child {
  border-bottom: none;
}

.additional-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.link-container {
  width: 134px;
  height: 47px;
  position: relative;
  margin-bottom: 16px;
}

.link-background {
  width: 134px;
  height: 47px;
  border-radius: 15px;
  background: #4ebe8c;
}

.link-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.close-button::before,
.close-button::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 24px;
  background-color: white;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.close-button::before {
  transform: translateX(-50%) rotate(45deg);
}

.close-button::after {
  transform: translateX(-50%) rotate(-45deg);
}

button {
  transition: all 0.3s ease;
}

button:hover {
  color: #7f9366;
}
</style>
