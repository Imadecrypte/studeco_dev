<script setup lang="ts"></script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');


.footerh1 {
  font-family: 'Jost' , sans-serif;
}

</style>

<template>
  <div class="w-full flex justify-center mt-6">
    <footer class="w-full">
      <div class="w-full h-[225px] relative">
        <div
          class="w-full h-[225px] absolute left-0 top-0"
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
        <svg
          width="375"
          height="1"
          viewBox="0 0 375 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-0 top-[225px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="0.5" x2="375" y2="0.5" stroke="white"></line>
        </svg>
        <div class="absolute top-[24px] w-full flex justify-center">
          <p class="text-base text-center text-white footerh1">CONTACT</p>
        </div>
        <svg
          width="400"
          height="1"
          viewBox="0 0 375 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-0 top-[61px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="0.5" x2="375" y2="0.5" stroke="white"></line>
        </svg>
        <div class="absolute top-[85px] w-full flex justify-center">
          <p class="text-base text-center uppercase text-white footerh1">à propos</p>
        </div>
        <svg
          width="400"
          height="1"
          viewBox="0 0 375 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-0 top-[122px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="0.5" x2="375" y2="0.5" stroke="white"></line>
        </svg>
        <div class="absolute top-[144px] w-full flex justify-center">
          <p class="text-base text-center uppercase text-white footerh1">mentions légales</p>
        </div>
        <svg
          width="400"
          height="1"
          viewBox="0 0 375 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-0 top-[179px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="0.5" x2="375" y2="0.5" stroke="white"></line>
        </svg>
        <div class="absolute top-[195px] w-full flex justify-center space-x-6">
          <img
            src="/logo_insta.svg"
            class="w-[23px] h-[23px] object-cover"
          />
          <img
            src="/logo_x.svg"
            class="w-[21px] h-[19px] object-cover"
          />
          <img
            src="/logo_message.svg"
            class="w-6 h-[19px] object-cover"
          />
        </div>
      </div>
    </footer>
  </div>
</template>
