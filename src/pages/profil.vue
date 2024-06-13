<template>
    <div>
      <div class="relative w-full h-100">
        <img src="/map2.webp" alt="Map" class="object-cover w-full h-full" />
        <div class="absolute top-4 left-1/2 transform -translate-x-1/2">
          <img src="/Studeco_2 4.webp" alt="Logo" class="w-30 h-30" />
        </div>
      </div>
      <div class="profile-container">
        <div class="profile-body">
          <div class="profile-content">
            <h2>VOTRE PROFIL</h2>
            <div class="profile-pic">
              <img src="/User.svg" alt="User Icon" class="user-icon" />
            </div>
            <div class="profile-details">
              <label for="username">Nom d’utilisateur</label>
              <input type="text" id="username" class="input-field" />
              <label for="email">Adresse mail</label>
              <input type="email" id="email" class="input-field" />
            </div>
            <button class="logout-button">Se déconnecter</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
  
  .profile-container {
    font-family: 'Jost', sans-serif;
    text-align: center;
    background-color: #fff;
    padding: 20px;
  }
  
  .profile-header {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .logo {
    width: 100px;
    height: auto;
  }
  
  .profile-body {
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 60vh;
  }
  
  .background-img {
    width: 100%;
    height: auto;
    opacity: 0.3;
  }
  
  .profile-content {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .profile-content h2 {
    font-family: 'Alata', sans-serif;
    margin-bottom: 20px;
    background-color: #ffc107;
    display: inline-block;
    padding: 5px 10px;
  }
  
  .profile-pic {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .user-icon {
    width: 100px;
    height: auto;
    border-radius: 50%;
  }
  
  .profile-details {
    text-align: left;
  }
  
  .profile-details label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ffeb3b;
  }
  
  .logout-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ffc107;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  