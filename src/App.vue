<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})
</script>

<template>
  <HeaderPage />
  <main>
    <router-view />
  </main>
  <FooterPage />
</template>
