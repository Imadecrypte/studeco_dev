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
  background-color: #83CDAC;
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
  grid-template-columns: 1fr;
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
  height: auto;
  object-fit: cover;
  opacity: 0.8;
}

.grid-item .content {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.grid-item .content p {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.grid-item .content span {
  display: block;
  font-size: 16px;
  font-weight: normal;
  color: #555;
}

.grid-item .content .icon {
  margin-left: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.blue-circle {
  position: absolute;
  top: 20px;
  right: 25px;
  width: 50px;
  height: 50px;
  background-color: #85D0D9;
  border-radius: 50%;
}
</style>

<template>
  <div class="container">
    <div class="header">E-OFFRES</div>
    <p class="subtitle">
      Voici quelques offres disponibles exclusivement sur Internet.<br />
      Consulte les différentes offres et clique sur le lien afin d'accéder à la page web.
    </p>
    <div class="grid">
      <div class="grid-item">
        <img src="/Asos.webp" alt="ASOS">
        <div class="content">
          <div>
            <p>ASOS</p>
            <span>-20% SUR TOUT</span>
          </div>
          <img src="/Internet.svg" alt="Internet Icon" class="icon" @click="goToLink('https://www.asos.com')" />
        </div>
      </div>
      <div class="grid-item">
        <img src="/Etam.webp" alt="ETAM">
        <div class="content">
          <div>
            <p>ETAM</p>
            <span>-20% DE RÉDUCTION POUR LES ÉTUDIANTS</span>
          </div>
          <img src="/Internet.svg" alt="Internet Icon" class="icon" @click="goToLink('https://www.etam.com')" />
        </div>
      </div>
      <div class="grid-item">
        <img src="/Emma.webp" alt="EMMA">
        <div class="content">
          <div>
            <p>EMMA</p>
            <span>JUSQU'À -50%</span>
          </div>
          <img src="/Internet.svg" alt="Internet Icon" class="icon" @click="goToLink('https://www.emma.fr')" />
        </div>
      </div>
      <div class="grid-item">
        <img src="/Adidas.webp" alt="ADIDAS">
        <div class="content">
          <div>
            <p>ADIDAS</p>
            <span>-15% POUR LES ÉTUDIANTS</span>
          </div>
          <img src="/Internet.svg" alt="Internet Icon" class="icon" @click="goToLink('https://www.adidas.com')" />
        </div>
      </div>
    </div>
    <div class="blue-circle"></div>
  </div>
</template>

<script setup lang="ts">
function goToLink(url: string) {
  window.open(url, '_blank');
}
</script>
