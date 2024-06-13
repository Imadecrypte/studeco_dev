<template>
  <div class="container mx-auto p-5 relative">
    <div class="header font-alata text-3xl font-bold mb-2 relative">
      NOTRE CARTE
      <span class="after-element"></span>
    </div>
    <p class="subtitle text-lg mb-5">
      Ne ratez plus aucune opportunité, STUD’ECO vous ouvre la porte vers une vie étudiante plus
      sereine.<br />
      Les bons plans les plus proches de chez-vous !
    </p>
  </div>
  <div class="flex justify-center items-center px-4">
    <div id="map" class="h-screen w-full"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Initialisation des coordonnées de Belfort
const lat = 47.6333
const lon = 6.8667
let macarte: L.Map | null = null

// Liste des villes et leurs coordonnées
const villes = {
  "<div class='marqueur'>UNE PARTIE DE BOWLING OFFERTE POUR UNE PARTIE ACHETÉE PAR LA MÊME PERSONNE<br>Bowling des 4 AS<br>Centre commercial des 4 As<br>90000 Belfort<br>03 84 54 04 47</div>":
    { lat: 47.637367, lon: 6.852622 },
  "<div class='marqueur'>10 % DE RÉDUCTION SUR L'ARTICLE DE TON CHOIX<br>Intersport - Belfort<br>6 route de Montbéliard<br>90000 Andelnans<br>03 84 21 34 92</div>":
    { lat: 47.616128, lon: 6.852102 },
  "<div class='marqueur'>UN DONUT OFFERT POUR UN MENU DAILY OU DÉLICH ACHETÉ<br>Cosy café et cie<br>Centre commercial des 4 AS<br>90000 Belfort</div>":
    { lat: 47.637367, lon: 6.852622 },
  "<div class='marqueur'>10 % DE RÉDUCTION SUR UNE COMMANDE AU DRIVE<br>Mc Donald's Montbéliard<br>Zac du Pied des Gouttes<br>25200 Montbéliard<br>03 81 90 00 04</div>":
    { lat: 47.508391, lon: 6.800918 },
  "<div class='marqueur'>10 % DE RÉDUCTION SUR LA COMMANDE + 1 SANDWICH GRATUIT<br>Burger King Exincourt<br>4 rue Philippe Goudey, C.C Happyt<br>25400 Exincourt<br>03 81 37 15 90</div>":
    { lat: 47.497324, lon: 6.81837 }
}

onMounted(() => {
  function initMap() {
    // Initialiser la carte
    macarte = L.map('map').setView([lat, lon], 11)
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
      minZoom: 1,
      maxZoom: 20
    }).addTo(macarte)

    // Ajouter les marqueurs des villes
    for (const ville in villes) {
      const marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte)
      marker.bindPopup(ville)
    }

    // Initialiser la géolocalisation
    geoloc()
  }

  function geoloc() {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoFail)

    function geoSuccess(position: GeolocationPosition) {
      const userLat = position.coords.latitude
      const userLon = position.coords.longitude
      console.log('lat: ' + userLat + ' - lon: ' + userLon)

      // Recentrer la carte sur la position de l'utilisateur
      macarte?.setView([userLat, userLon], 14)

      // Créer une icône personnalisée pour la position de l'utilisateur
      const userIcon = L.icon({
        iconUrl: '/marker.svg', // URL de l'icône
        iconSize: [25, 41], // Taille de l'icône
        iconAnchor: [12, 41], // Point de l'icône correspondant à la position du marqueur
        popupAnchor: [1, -34] // Point à partir duquel la popup doit s'ouvrir par rapport à l'iconAnchor
      })

      // Ajouter un marqueur pour la position de l'utilisateur avec l'icône personnalisée
      const userMarker = L.marker([userLat, userLon], { icon: userIcon }).addTo(macarte!)
      userMarker.bindPopup("<div class='marqueur'>Vous êtes ici</div>").openPopup()
    }

    function geoFail() {
      console.log('Géolocalisation refusée')
    }
  }

  // Initialisation de la carte
  initMap()
})
</script>

<style>
@import url('https://unpkg.com/leaflet@1.3.1/dist/leaflet.css');

#map {
  width: 100%;
  height: 75vh;
}

.marqueur {
  text-align: left;
}

.after-element {
  content: '';
  display: block;
  width: 100px;
  height: 10px;
  background-color: #add8e6; /* Light blue */
  position: absolute;
  left: 0;
  bottom: -5px;
}
</style>
