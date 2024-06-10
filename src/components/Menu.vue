<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { RouterLink } from 'vue-router/auto'

const emit = defineEmits(['closeMenu'])

const sections = [
  { title: 'Accueil', path: '/accueil' },
  { title: 'Architecte', path: '/architecte' },
  { title: 'Galerie des oeuvres', path: '/galerie' },
  { title: 'Frise', path: '/frise' },
  { title: 'Inscription', path: '/inscription' },
  { title: 'Connexion', path: '/login' }
]

const handleLinkClick = () => {
  emit('closeMenu')
}
</script>

<template>
  <div class="menu-overlay">
    <div class="menu-content">
      <ul>
        <li v-for="section in sections" :key="section.title" class="mb-4">
          <router-link
            :to="section.path"
            class="flex items-center text-left text-xl font-bold focus:outline-none"
            @click="handleLinkClick"
          >
            <img src="/leaf-icon.svg" alt="Leaf icon" class="mr-2" />
            <span>{{ section.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-content {
  background-color: #f4efe3;
  padding: 16px;
  border-radius: 8px;
}

button {
  transition: all 0.3s ease;
}

button:hover {
  color: #7f9366;
}
</style>

