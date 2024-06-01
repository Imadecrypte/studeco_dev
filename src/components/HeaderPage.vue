<script setup lang="ts">

</script>

<template>
  <header>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </RouterView>
  </header>
</template>
