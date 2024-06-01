<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import { RouterLink, RouterView } from 'vue-router/auto'
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})
</script>

<template>
    <header>
        <nav>
        <ul>
            <li>
            <RouterLink to="/" class="text-red-500 underline"> Accueil </RouterLink>
            </li>
        </ul>
        </nav>
    </header>
    <HeaderPage />
    <RouterView v-slot="{ Component }">
        <Suspense>
        <component :is="Component" />
        </Suspense>
    </RouterView>
    <FooterPage />
</template>
