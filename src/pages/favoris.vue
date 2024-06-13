<template>
    <div class="favoris-container">
      <h2>FAVORIS</h2>
      <p>Sur cette page tu retrouveras toutes tes offres favorites !</p>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
  
  .favoris-container {
    font-family: 'Jost', sans-serif;
    padding: 20px;
  }
  
  h2 {
    font-family: 'Alata', sans-serif;
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
  }
  
  h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 10px;
    background-color: #ffc107;
    z-index: -1;
  }
  
  p {
    font-size: 18px;
    margin-top: 10px;
  }
  </style>
  