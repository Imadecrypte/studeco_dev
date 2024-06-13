<template>
    <div class="bg-gradient-to-b from-gray-300 to-gray-500 min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <p class="text-2xl text-blue-500 mb-8">Oups! La page que vous recherchez n'existe pas.</p>
        <router-link to="/" class="px-6 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-300">
          Retour à l'accueil
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Page404',
  };
  </script>
  
  <style scoped>
  .bg-gradient-to-b {
    background: #ffffff;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .flex {
    display: flex;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .text-center {
    text-align: center;
  }
  .text-6xl {
    font-size: 4rem;
  }
  .font-bold {
    font-weight: bold;
  }
  .text-blue-500 {
    color: #3b82f6;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .mb-8 {
    margin-bottom: 2rem;
  }
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .bg-white {
    background-color: #ffffff;
  }
  .text-black {
    color: #000000;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .hover\:bg-gray-300:hover {
    background-color: #d1d5db;
  }
  </style>
  