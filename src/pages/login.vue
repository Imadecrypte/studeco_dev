<template>
  <div class="bg-gray-100 flex justify-center items-center min-h-screen">
    <div class="bg-white w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
      <div class="relative w-full h-100">
        <img src="/map2.webp" alt="Map" class="object-cover w-full h-full" />
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
          <img src="/Studeco_2 4.webp" alt="Logo" class="w-30 h-30" />
        </div>
      </div>
      <div class="p-6">
        <h2 class="text-xl font-semibold mb-4">Connexion</h2>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label for="email" class="block text-gray-700">Adresse mail ou N°tel</label>
            <input
              type="email"
              v-model="email"
              id="email"
              class="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 h-[27px] bg-green-300 rounded-[15px]"
            />
          </div>
          <div>
            <label for="password" class="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              v-model="password"
              id="password"
              class="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 h-[27px] bg-green-300 rounded-[15px]"
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" v-model="remember" id="remember" class="mr-2" />
              <label for="remember" class="text-gray-700 text-sm">Se souvenir de moi</label>
            </div>
            <RouterLink to="/forgot-password" class="text-sm text-green-500 hover:underline"
              >Mot de passe oublié?</RouterLink
            >
          </div>
          <div>
            <button
              type="submit"
              class="w-full h-8 py-2 px-4 bg-green-400 text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-[30px]"
            >
              <div class="text-black text-base font-normal font-['Jost']">Se connecter</div>
            </button>
          </div>
        </form>
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-700">Pas de compte ?</p>
          <button
            class="w-[75%] h-8 py-2 px-4 bg-green-400 text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-[30px]"
          >
            <RouterLink to="/register">
              <div class="text-black text-base font-normal font-['Jost']">Créer un compte</div>
            </RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const remember = ref(false)

const login = () => {
  console.log({
    email: email.value,
    password: password.value,
    remember: remember.value
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

/* Ajout de cette règle pour s'assurer qu'il n'y a pas de marge par défaut */
body,
html,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
