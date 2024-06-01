<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
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