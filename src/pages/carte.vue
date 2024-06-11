<template>
  <div id="map" class="h-screen"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// On initialise la latitude et la longitude de Belfort (centre de la carte)
const lat = 47.6333
const lon = 6.8667
let macarte = null

// Liste des villes et leurs coordonnées
const villes = {
  "<div class='marqueur'>UN ATELIER D'ÉVEIL À LA CRÉATION OFFERT<br>Frédérique Tissot - Art Thérapeute<br>4 rue André Boulloche<br>25200 Montbéliard<br>06 29 23 89 84</div>":
    { lat: 47.4493784, lon: 6.8031718 },
  "<div class='marqueur'>5 € DE RÉDUCTION DÈS 50 € D'ACHAT<br>DES JEUX QUI DES BOITES<br>24 rue Georges Clémenceau<br>25200 Montbéliard<br>09 84 45 28 84</div>":
    { lat: 47.51043, lon: 6.795931 }
  // Ajoutez d'autres villes ici...
}

onMounted(() => {
  // Fonction d'initialisation de la carte
  function initMap() {
    // Créer l'objet "macarte" et l'insérer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11)
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      // Il est toujours bien de laisser le lien vers la source des données
      attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
      minZoom: 1,
      maxZoom: 20
    }).addTo(macarte)
    // Nous parcourons la liste des villes
    for (const ville in villes) {
      const marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte)
      marker.bindPopup(ville)
    }
  }

  // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
  initMap()
})
</script>

<style>
@import url('https://unpkg.com/leaflet@1.3.1/dist/leaflet.css');

#map {
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;

  width: 80%;
  height: 75vh; /* Full screen height */
}

.marqueur {
  text-align: left;
}
</style>
