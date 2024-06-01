<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </RouterView>
  </footer>
</template>
