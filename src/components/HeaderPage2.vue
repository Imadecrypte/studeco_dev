<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Menu from './Menu.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const authStore = useAuthStore()
const router = useRouter()

const handleUserClick = () => {
  if (authStore.isLoggedIn) {
    router.push('/profil')
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <div>
    <div class="flex justify-center items-center">
      <div class="relative w-full h-[69px]">
        <div
          class="absolute inset-0"
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
        <router-link to="/">
          <img
            src="/Studeco_2 5.webp"
            class="w-[47px] h-[51px] absolute left-[9.5px] top-[6.5px] object-cover"
          />
        </router-link>
        <img
          src="/User.webp"
          class="w-[30px] h-[30px] absolute left-[269.5px] top-[19.5px] object-contain cursor-pointer"
          @click="handleUserClick"
        />
        <div @click="toggleMenu" class="absolute left-[320px] top-[20px] cursor-pointer">
          <div>
            <div class="w-[33px] h-[3.5px] rounded-[25px] bg-white my-1"></div>
            <div class="w-[21px] h-1 rounded-[25px] bg-white my-1"></div>
            <div class="w-[43px] h-1 rounded-[25px] bg-white my-1"></div>
          </div>
        </div>
      </div>
    </div>
    <Menu v-if="isMenuOpen" @closeMenu="toggleMenu" />
  </div>
</template>
