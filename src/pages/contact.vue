<script setup lang="ts"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

body {
  font-family: 'Alata', sans-serif;
}

.contact-container {
  width: 300px;
  background-color: #82c6a3;
  padding: 20px;
  border-radius: 15px;
  margin: 20px auto; /* Adds space above and below to lower the container */
}

.contact-title {
  text-align: center;
  color: #000;
}

.contact-text {
  color: #000;
  text-align: center;
}

.contact-form {
  margin-top: 10px;
}

.contact-form label {
  color: #000;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
}

.contact-form button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
}

.contact-info {
  margin: 20px 10px 0 10px; /* Adjusted margin to add space on the sides */
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  position: relative;
}

.contact-info-title {
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
}

.contact-info p {
  margin: 5px 0;
  display: flex;
  align-items: center;
}

.contact-info img {
  vertical-align: middle;
  margin-right: 10px;
}

.contact-logo {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>

<template>
  <div class="contact-container">
    <h2 class="contact-title">Contactez-nous</h2>
    <p class="contact-text">
      N'hésitez pas à nous envoyer un message, que ce soit une question, une demande ou encore un avis nous serons ravis de nous en préoccuper
    </p>
    <form class="contact-form">
      <div>
        <label for="name">Nom & Prénom</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label for="email">Adresse Mail</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4"></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
  <div class="contact-info">
    <p class="contact-info-title">Informations</p>
    <p>
      <img src="/PngItem_5119843-1.svg" alt="Email"> business.studeco@gmail.com
    </p>
    <p>
      <img src="/PngItem_96593-1.svg" alt="Phone"> 06 02 09 75 00
    </p>
    <p>
      <img src="/Logo-instagram-png-blanc-2.svg" alt="Instagram"> STUDECO25
    </p>
    <div class="contact-logo">
      <img src="/Studeco_2 4.webp" alt="STUDECO" style="height: 40px;">
    </div>
  </div>
</template>
