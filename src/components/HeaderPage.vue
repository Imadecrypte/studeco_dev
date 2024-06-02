<script setup lang="ts"></script>

<template>
  <div class="flex justify-center items-center">
    <header>
      <div class="w-[400px] h-[422px] relative">
        <div class="w-full h-[422px] absolute left-[-11.5px] top-[-11.5px] rounded-[25px]"></div>
        <div
          class="w-full h-[411px] absolute left-[-0.5px] top-[-0.5px]"
          style="
            background: linear-gradient(
              134.68deg,
              #fee47c -0.56%,
              #25c27c 33.13%,
              #26b877 55.25%,
              #47d2e4 79.1%,
              #86d2fd 87.45%
            );
          "
        ></div>
        <img
          src="/Studeco_2 5.webp"
          class="w-[168px] h-[173px] absolute left-[115px] top-[108.5px] object-cover"
        />
        <router-link to="/menu">
          <div class="w-[43px] h-[22px] absolute left-[320px] top-[20px] cursor-pointer">
            <div class="w-[33px] h-[3.5px] rounded-[25px] bg-white my-1"></div>
            <div class="w-[21px] h-1 rounded-[25px] bg-white my-1"></div>
            <div class="w-[43px] h-1 rounded-[25px] bg-white my-1"></div>
          </div>
        </router-link>
        <p class="w-[70px] h-[19px] absolute left-[11px] top-[73px] text-sm text-left text-white">
          LA CARTE
        </p>
        <p class="w-14 h-[19px] absolute left-[105px] top-[73px] text-sm text-left text-white">
          LA LISTE
        </p>
        <p class="w-[92px] h-[19px] absolute left-[194px] top-[73px] text-sm text-left text-white">
          LES E-OFFRES
        </p>
        <p class="w-[49px] h-[19px] absolute left-[316px] top-[73px] text-sm text-left text-white">
          LE TOP
        </p>
        <p class="w-[331px] h-[81px] absolute left-[22px] top-[299px] text-[13px] text-left">
          <span class="w-[331px] h-[81px] text-[13px] text-left text-white"
            >L'objectif principal de </span
          ><span class="w-[331px] h-[81px] text-[13px] text-left text-[#fee47c]">STUD’ECO</span
          ><span class="w-[331px] h-[81px] text-[13px] text-left text-white">
            est de devenir une ressource centralisée où les étudiants peuvent accéder à l'ensemble
            des opportunités offertes par leur carte étudiante ou lycéen.
          </span>
        </p>
        <img
          src="/Studeco_2 4.webp"
          class="w-[47px] h-[51px] absolute left-[9.5px] top-[6.5px] object-cover"
        /><img
          src="/User.webp"
          class="w-[30px] h-[30px] absolute left-[269.5px] top-[19.5px] object-contain"
        />
      </div>
    </header>
  </div>
</template>
