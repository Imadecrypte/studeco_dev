<script setup lang="ts"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: 'Jost', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.header {
  font-family: 'Alata', sans-serif;
  font-size: 36px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.header span {
  background-color: #add8e6; 
  padding: 0 10px;
  position: absolute;
  left: 0;
  bottom: -10px;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.grid-item {
  position: relative;
  border: 2px solid #000;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.grid-item:hover {
  transform: scale(1.05);
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
}

.grid-item p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 0;
}
</style>

<template>
  <div class="container">
    <div class="header">
      <span>NOTRE LISTE</span>
    </div>
    <p class="subtitle">
      Si tu préfères retrouver les offres près de chez toi par thématique tu es au bon endroit !
      Consulte les différents thèmes et choisis en un afin de découvrir ses offres
    </p>
    <div class="grid">
      <div class="grid-item">
        <img src="/Mobilité.webp" alt="Mobilité">
        <p>MOBILITÉ</p>
      </div>
      <div class="grid-item">
        <img src="/Alimentation.webp" alt="Alimentation">
        <p>ALIMENTATION</p>
      </div>
      <div class="grid-item">
        <img src="/Santé.webp" alt="Santé">
        <p>SANTÉ</p>
      </div>
      <div class="grid-item">
        <img src="/Vêtement.webp" alt="Vêtement">
        <p>VÊTEMENT</p>
      </div>
      <div class="grid-item">
        <img src="/Sport.webp" alt="Sport">
        <p>SPORT</p>
      </div>
      <div class="grid-item">
        <img src="/Loisirs.webp" alt="Loisirs">
        <p>LOISIR</p>
      </div>
      <div class="grid-item">
        <img src="/Culture.webp" alt="Culture">
        <p>CULTURE</p>
      </div>
      <div class="grid-item">
        <img src="/Admin.webp" alt="Administratif">
        <p>ADMINISTRATIF</p>
      </div>
    </div>
  </div>
</template>
