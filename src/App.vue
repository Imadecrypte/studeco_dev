<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import { RouterView } from 'vue-router/auto'
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
    <RouterView />
  </main>
  <FooterPage />
</template>
