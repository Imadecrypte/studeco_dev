<script setup lang="ts">
import { reactive, ref } from 'vue';
import PocketBase, { ClientResponseError } from 'pocketbase';

const pb = new PocketBase('https://stud-eco.dezzaznail.fr:443'); // Utilisation de l'URL en ligne

interface Form {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const form = reactive<Form>({
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
});

const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);

const terms = ref(false);

const handleSubmit = async () => {
  if (form.password !== form.confirmPassword) {
    errorMessage.value = 'Les mots de passe ne correspondent pas.';
    return;
  }

  if (!terms.value) {
    errorMessage.value = 'Vous devez accepter les conditions d’utilisations du site';
    return;
  }

  try {
    const user = await pb.collection('users').create({
      name: form.name,
      email: form.email,
      username: form.username,
      password: form.password,
      passwordConfirm: form.confirmPassword,
    });

    successMessage.value = 'Inscription réussie. Vous pouvez maintenant vous connecter.';
    errorMessage.value = null;
  } catch (err) {
    console.error('Failed to register:', err);
    if (err instanceof ClientResponseError) {
      errorMessage.value = `Échec de l'inscription : ${err.message || 'Veuillez réessayer.'}`;
    } else {
      errorMessage.value = "Échec de l'inscription, veuillez réessayer.";
    }
    successMessage.value = null;
  }
};
</script>

<template>
  <div class="bg-gray-100 flex justify-center items-center min-h-screen">
    <div class="bg-white w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
      <div class="relative w-full h-100">
        <img src="/map2.webp" alt="Map" class="object-cover w-full h-full" />
        <div class="absolute top-4 left-1/2 transform -translate-x-1/2">
          <img src="/Studeco_2 4.webp" alt="Logo" class="w-30 h-30" />
        </div>
      </div>
      <div class="p-6">
        <h2 class="text-xl font-semibold mb-4">Création d’un compte</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block text-gray-700">Nom</label>
            <input
              type="text"
              v-model="form.name"
              id="name"
              class="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 h-[27px] bg-green-300 rounded-[15px]"
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700">Adresse mail ou N°tel</label>
            <input
              type="email"
              v-model="form.email"
              id="email"
              class="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 h-[27px] bg-green-300 rounded-[15px]"
            />
          </div>
          <div>
            <label for="username" class="block text-gray-700">Nom d’utilisateur</label>
            <input
              type="text"
              v-model="form.username"
              id="username"
              class="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 h-[27px] bg-green-300 rounded-[15px]"
            />
          </div>
          <div>
            <label for="password" class="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              v-model="form.password"
              id="password"
              class="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 h-[27px] bg-green-300 rounded-[15px]"
            />
          </div>
          <div>
            <label for="confirmPassword" class="block text-gray-700">Confirmer le mot de passe</label>
            <input
              type="password"
              v-model="form.confirmPassword"
              id="confirmPassword"
              class="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 h-[27px] bg-green-300 rounded-[15px]"
            />
          </div>
          <div class="flex items-center">
            <input type="checkbox" v-model="terms" id="terms" class="mr-2" />
            <label for="terms" class="text-gray-700 text-sm">
              Je suis d’accord avec les conditions d’utilisations du site
            </label>
          </div>
          <div>
            <button
              type="submit"
              class="w-full h-8 py-2 px-4 bg-green-400 text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-[30px]"
            >
              <div class="text-black text-base font-normal font-['Jost']">Création du compte</div>
            </button>
          </div>
        </form>
        <div v-if="errorMessage" class="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span class="block sm:inline">{{ errorMessage }}</span>
        </div>
        <div v-if="successMessage" class="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span class="block sm:inline">{{ successMessage }}</span>
        </div>
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-700">Déjà un compte ?</p>
          <button
            class="w-[75%] h-8 py-2 px-4 bg-green-400 text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-[30px]"
          >
            <RouterLink to="/login">
              <div class="text-black text-base font-normal font-['Jost']">Se connecter</div>
            </RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
