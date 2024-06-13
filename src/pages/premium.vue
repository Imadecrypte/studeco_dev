<template>
    <div class="premium-container">
      <div class="premium-header">
        <img src="/Studeco_2 5.webp" alt="Stud'Eco Logo" class="logo" />
      </div>
      <div class="premium-content">
        <h2>QUITTER PREMIUM ?</h2>
        <div class="premium-box">
          <h3>COMPTE PREMIUM</h3>
          <p class="price">4,99€/MOIS</p>
          <ul>
            <li>- SUPPRESSION DES PUBS</li>
            <li>- OFFRES + AVANTAGEUSES</li>
            <li>- ROUE</li>
          </ul>
          <button @click="handleResilier" class="resilier-button">RÉSILIER</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const handleResilier = () => {
    alert('Votre abonnement a bien été résilié.');
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
  
  .premium-container {
    font-family: 'Jost', sans-serif;
    text-align: center;
    background-color: #f5f5f5;
    padding: 20px;
  }
  
  .premium-header {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .logo {
    width: 100px;
    height: auto;
  }
  
  .premium-content {
    background-color: #4caf50;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
  }
  
  .premium-content h2 {
    font-family: 'Alata', sans-serif;
    margin-bottom: 20px;
  }
  
  .premium-box {
    background-color: #00bfff;
    padding: 20px;
    border-radius: 10px;
  }
  
  .premium-box h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .price {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .premium-box ul {
    list-style-type: none;
    padding: 0;
  }
  
  .premium-box li {
    margin: 10px 0;
  }
  
  .resilier-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #00932c;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  </style>
  