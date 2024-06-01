<script setup lang="ts">

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
