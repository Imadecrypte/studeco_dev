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
  position: relative;
}

.header {
  font-family: 'Alata', sans-serif;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  position: relative;
}

.header::after {
  content: '';
  display: block;
  width: 100px;
  height: 10px;
  background-color: #add8e6; /* Light blue */
  position: absolute;
  left: 0;
  bottom: -5px;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
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
  font-size: 18px; /* Adjusted the size */
  font-weight: bold; /* Removed the bold */
  color: #000;
  margin: 0;
}

</style>

<template>
  <div class="container">
    <div class="header">NOTRE LISTE</div>
    <p class="subtitle">
      Si tu préfères retrouver les offres près de chez toi par thématique tu es au bon endroit !<br />
      Consulte les différents thèmes et choisis en un afin de découvrir ses offres
    </p>
    <div class="grid">
      <router-link to="/Mobilite" class="grid-item">
        <img src="/Mobilité.webp" alt="Mobilité">
        <p>MOBILITÉ</p>
      </router-link>
      <router-link to="/Alimentation" class="grid-item">
        <img src="/Alimentation.webp" alt="Alimentation">
        <p>ALIMENTATION</p>
      </router-link>
      <router-link to="/Sante" class="grid-item">
        <img src="/Santé.webp" alt="Santé">
        <p>SANTÉ</p>
      </router-link>
      <router-link to="/Vetement" class="grid-item">
        <img src="/Vêtement.webp" alt="Vêtement">
        <p>VÊTEMENT</p>
      </router-link>
      <router-link to="/Sport" class="grid-item">
        <img src="/Sport.webp" alt="Sport">
        <p>SPORT</p>
      </router-link>
      <router-link to="/Loisir" class="grid-item">
        <img src="/Loisirs.webp" alt="Loisir">
        <p>LOISIR</p>
      </router-link>
      <router-link to="/Culture" class="grid-item">
        <img src="/Culture.webp" alt="Culture">
        <p>CULTURE</p>
      </router-link>
      <router-link to="/Administratif" class="grid-item">
        <img src="/Admin.webp" alt="Administratif">
        <p>ADMINISTRATIF</p>
      </router-link>
    </div>
  </div>
</template>
