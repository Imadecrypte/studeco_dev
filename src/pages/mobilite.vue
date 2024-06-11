<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.font-alata {
  font-family: 'Alata', sans-serif;
}

.font-jost {
  font-family: 'Jost', sans-serif;
}

.offer-image {
  width: 120px; 
  margin-top: -20px; 
}

.next-button {
  background-color: #86D2FD;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px; 
  margin-bottom: 20px; 
  float: right;
}

.offer-button {
  background-color: #ffcc00;
}
</style>

<template>
  <div class="font-jost text-center p-5">
    <div class="bg-gray-200 p-5 rounded">
      <h1 class="text-2xl font-bold font-alata">MOBILITÉ</h1>
      <img src="/Mobilité_offre2.webp" alt="Car Image" class="mx-auto mt-3" />
    </div>
    
    <div class="border border-gray-300 rounded-lg p-5 my-5">
      <div class="flex justify-center">
        <img src="/mobilité_offre.webp" alt="Tire Image" class="offer-image" />
      </div>
      <div class="text-xl font-bold mt-5">69 € LE CONTRÔLE TECHNIQUE</div>
      <div class="text-lg my-2">
        <p>NORISKO - ANDELNANS</p>
        <p>ZAC des Prés</p>
        <p>90400 Andelnans</p>
        <p>03 84 28 00 30</p>
      </div>
      <button class="offer-button">VOIR OFFRE</button>
    </div>
    
    <RouterLink to="/alimentation">
      <button class="next-button">
        Alimentation
        <img src="/flèche.svg" alt="Arrow" class="ml-3" />
      </button>
    </RouterLink>
  </div>
</template>
