<script setup lang="ts"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.title_card {
  font-family: 'Jost', sans-serif;
}

.card {
  font-family: 'Jost', sans-serif;
}

.access {
  font-family: 'Jost', sans-serif;
}
</style>

<template>
  <div class="w-full max-w-[345px] h-[172px] mx-auto mt-[20px] relative">
    <div class="w-full h-full rounded-[25px] bg-[#5e90d2]"></div>
    <RouterLink to="carte">
      <div class="absolute left-5 top-[140px] flex items-center space-x-2 cursor-pointer">
        <div class="relative w-[100px] h-[22px] bg-white rounded-[25px]">
          <p class="absolute left-2 top-[2px] text-[13px] text-left text-black access">
            Voir la carte
          </p>
          <img
            src="/Back Arrow.svg"
            class="absolute right-1 top-[3px] w-[17px] h-[17px] object-contain"
          />
        </div>
      </div>
    </RouterLink>
    <p
      class="absolute left-[85px] top-[12px] text-base text-left uppercase text-[#abd3ff] title_card"
      id="carte"
    >
      La Carte de Localisation
    </p>
    <p class="absolute left-8 top-[48px] text-[10px] text-left text-white w-[190px] h-[72px] card">
      Notre site internet intègre une fonctionnalité de carte de géolocalisation interactive, vous
      permettant de découvrir facilement les emplacements physiques des points d'intérêt, des
      magasins ou des événements près de chez vous.
    </p>
    <img
      src="/map.webp"
      class="w-[190px] h-[169px] absolute left-[calc(50%+15px)] top-[20px] object-cover"
    />
  </div>

  <div class="w-full max-w-[345px] h-[172px] mx-auto mt-[20px] relative">
    <div class="w-full h-full rounded-[25px] bg-[#ce7891]"></div>
    <RouterLink to="liste">
      <div class="absolute left-5 top-[140px] flex items-center space-x-2 cursor-pointer">
        <div class="relative w-[95px] h-[22px] bg-white rounded-[25px]">
          <p class="absolute left-2 top-[2px] text-[13px] text-left text-black access">
            Voir la liste
          </p>
          <img
            src="/Back Arrow(1).svg"
            class="absolute right-1 top-[3px] w-[17px] h-[17px] object-contain"
          />
        </div>
      </div>
    </RouterLink>
    <p
      class="absolute left-[114px] top-[12px] text-base text-left uppercase text-[#ffbfd2] title_card"
      id="liste"
    >
      La Liste des Offres
    </p>
    <p class="absolute left-9 top-[56px] text-[10px] text-left text-white w-[185px] h-[66px] card">
      Une liste de toutes les offres à votre disposition avec différentes possibilités de filtres
      afin de vous faire gagner du temps mais aussi pour faciliter votre navigation.
    </p>
    <img
      src="/note.webp"
      class="w-[190px] h-[169px] absolute left-[calc(50%+2px)] top-[20px] object-cover"
    />
  </div>

  <div class="w-full max-w-[345px] h-[172px] mx-auto mt-[20px] relative">
    <div class="w-full h-full rounded-[25px] bg-[#32a761]"></div>
    <RouterLink to="eoffres">
      <div class="absolute left-5 top-[140px] flex items-center space-x-2 cursor-pointer">
        <div class="relative w-[105px] h-[22px] bg-white rounded-[25px]">
          <p class="absolute left-2 top-1 text-xs text-left text-black access">Voir les offres</p>
          <img
            src="/Back Arrow(2).svg"
            class="absolute right-1 top-[3px] w-[17px] h-[17px] object-contain"
          />
        </div>
      </div>
    </RouterLink>
    <p
      class="absolute left-24 top-[14px] text-base text-left uppercase text-[#82ffb4] title_card"
      id="eoffres"
    >
      Les offres numériques
    </p>
    <p class="absolute left-9 top-[56px] text-[10px] text-left text-white w-[180px] h-[65px] card">
      Voici un catalogue des différentes offres disponibles UNIQUEMENT sur Internet. Ce qui vous
      donnera accès à leurs lien respectif et une courte description.
    </p>
    <img
      src="/ecran.webp"
      class="w-[155px] h-[155px] absolute left-[calc(50%+30px)] top-[30px] object-cover"
    />
  </div>

  <div class="w-full max-w-[345px] h-[172px] mx-auto mt-[20px] relative">
    <div class="w-full h-full rounded-[25px] bg-[#d3aa1a]"></div>
    <RouterLink to="top">
      <div class="absolute left-5 top-[140px] flex items-center space-x-2 cursor-pointer">
        <div class="relative w-[90px] h-[22px] bg-white rounded-[25px]">
          <p class="absolute left-2 top-1 text-xs text-left text-black access">Voir le TOP</p>
          <img
            src="/Back Arrow(3).svg"
            class="absolute right-1 top-[3px] w-[17px] h-[17px] object-contain"
          />
        </div>
      </div>
    </RouterLink>
    <p
      class="absolute left-[163px] top-[12px] text-base text-left uppercase text-[#fff3bd] title_card"
      id="top"
    >
      Le top
    </p>
    <p class="absolute left-[34px] top-[56px] text-[10px] text-left text-white w-[170px] card">
      Découvrez un classement des meilleures offres de la communauté ainsi que leurs descriptions et
      d’une notation.
    </p>
    <img
      src="/trophee.webp"
      class="w-[169px] h-[169px] absolute left-[calc(50%+20px)] top-[20px] object-cover"
    />
  </div>
</template>
