<template>
  <div class="flex flex-col items-center min-h-screen pt-10 m-4">
    <div class="flex flex-col items-center w-full max-w-md mx-auto">
      <div class="bg-[#82c6a3] w-full rounded-t-lg overflow-hidden shadow-lg p-6">
        <h2 class="text-2xl font-bold text-center text-black mb-4">Contactez-nous</h2>
        <p class="text-center text-black mb-6">
          N'hésitez pas à nous envoyer un message, que ce soit une question, une demande ou encore
          un avis nous serons ravis de nous en préoccuper
        </p>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block text-black mb-2">Nom & Prénom</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label for="email" class="block text-black mb-2">Adresse Mail</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label for="message" class="block text-black mb-2">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Envoyer
          </button>
        </form>
      </div>
      <div class="bg-black text-white p-6 w-full rounded-b-lg shadow-lg relative">
        <p class="text-center font-bold mb-4">Informations</p>
        <p class="flex items-center mb-2">
          <img src="/PngItem_5119843-1.svg" alt="Email" class="mr-2 h-6 w-6" />
          business.studeco@gmail.com
        </p>
        <p class="flex items-center mb-2">
          <img src="/PngItem_96593-1.svg" alt="Phone" class="mr-2 h-6 w-6" /> 06 02 09 75 00
        </p>
        <p class="flex items-center mb-2">
          <img src="/Logo-instagram-png-blanc-2.svg" alt="Instagram" class="mr-2 h-6 w-6" />
          STUDECO25
        </p>
        <div class="absolute top-4 right-4">
          <img src="/Studeco_2 4.webp" alt="STUDECO" class="h-10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)

const handleSubmit = async () => {
  try {
    const contact = await pb.collection('contacts').create({
      name: form.name,
      email: form.email,
      message: form.message
    })
    successMessage.value = 'Votre message a été envoyé avec succès.'
    errorMessage.value = null
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    console.error('Failed to send message:', err)
    errorMessage.value = `Échec de l'envoi du message : ${err.message || 'Veuillez réessayer.'}`
    successMessage.value = null
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: 'Jost', sans-serif;
}
</style>
