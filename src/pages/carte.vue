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
    <div id="map" class="h-screen"></div>
  </div>
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
    { lat: 47.51043, lon: 6.795931 },
  "<div class='marqueur'>PEPE CHICKEN<br>18 pass. des augustins<br>Mulhouse<br>03 89 66 47 47</div>":
    { lat: 47.7464407, lon: 7.3348223 }
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

    // Initialiser la géolocalisation
    geoloc()
  }

  // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
  initMap()
})

function geoloc() {
  var geoSuccess = function (position) {
    // Ceci s'exécutera si l'utilisateur accepte la géolocalisation
    const userLat = position.coords.latitude
    const userLon = position.coords.longitude
    console.log('lat: ' + userLat + ' - lon: ' + userLon)

    // Recentrer la carte sur la position de l'utilisateur
    macarte.setView([userLat, userLon], 14)

    // Créer une icône personnalisée pour la position de l'utilisateur
    const userIcon = L.icon({
      iconUrl: '/marker.svg', // URL de l'icône orange
      iconSize: [25, 41], // Taille de l'icône
      iconAnchor: [12, 41], // Point de l'icône correspondant à la position du marqueur
      popupAnchor: [1, -34] // Point à partir duquel la popup doit s'ouvrir par rapport à l'iconAnchor
    })

    // Ajouter un marqueur pour la position de l'utilisateur avec l'icône personnalisée
    const userMarker = L.marker([userLat, userLon], { icon: userIcon }).addTo(macarte)
    userMarker.bindPopup("<div class='marqueur'>Vous êtes ici</div>").openPopup()
  }

  var geoFail = function () {
    // Ceci s'exécutera si l'utilisateur refuse la géolocalisation
    console.log('Géolocalisation refusée')
  }

  // La ligne ci-dessous cherche la position de l'utilisateur et déclenchera la demande d'accord
  navigator.geolocation.getCurrentPosition(geoSuccess, geoFail)
}
</script>

<style>
@import url('https://unpkg.com/leaflet@1.3.1/dist/leaflet.css');

#map {
  width: 90%;
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
