<script setup lang="ts">
import { onErrorCaptured } from 'vue'
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router/auto'
import HeaderPage from './components/HeaderPage.vue'
import HeaderPage2 from './components/HeaderPage2.vue'
import FooterPage from './components/FooterPage.vue'

const route = useRoute()
const headerType = computed(() => route.meta.header || 'default')

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})
</script>

<template>
  <main>
    <HeaderPage v-if="route.name === '/' " />
    <HeaderPage2 v-if="route.name !== '/'" />
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <FooterPage />
</template>
