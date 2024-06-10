<script setup lang="ts"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.container {
  font-family: 'Jost', sans-serif;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-family: 'Alata', sans-serif;
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  position: relative;
}

.title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background-color: #83CDAC;
  margin: 10px auto 0;
}

.sub-title {
  font-family: 'Alata', sans-serif;
  font-size: 1.5em;
  margin-bottom: 20px;
}

.text {
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  margin-bottom: 20px;
}

.text img {
  float: right;
  width: 200px;
  margin-left: 20px;
}

.team-member {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.team-member img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.team-member p {
  margin: 0;
}

.quote {
  font-style: italic;
}

.quote-author {
  font-size: 0.8em;
  text-align: right;
}

.bg-vincent {
  background-color: #82c6a3;
}

.bg-adrien {
  background-color: #FEE47C;
}

.bg-nail {
  background-color: #85D0D9;
}
</style>

<template>
  <div class="container">
    <h1 class="title">À PROPOS</h1>
    
    <div class="text">
      <img src="/apropsimg.webp" alt="About Image">
      <h2 class="sub-title">À PROPOS DE NOUS</h2>
      <p>Nous sommes des étudiants en Métier du Multimédia et de l’Internet, nous avons réalisés ce site Internet dans le cadre d’un projet pédagogique.</p>
      <p>Notre trio se compose de :</p>
      <ul>
        <li>Vincent Barré</li>
        <li>Adrien Choulet</li>
        <li>Naïl Dezzaz</li>
      </ul>
    </div>
    
    <div class="team-member bg-vincent">
      <img src="/vinz.webp" alt="Vincent Barré">
      <div>
        <p><strong>Vincent Barré</strong> - Design</p>
        <p class="quote">« Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement. »</p>
        <p class="quote-author">Martin Luther King.</p>
      </div>
    </div>
    
    <div class="team-member bg-adrien">
      <img src="/adrien.webp" alt="Adrien Choulet">
      <div>
        <p><strong>Adrien Choulet</strong> - Com'</p>
        <p class="quote">« Tout est possible à qui rêve, ose, travaille et n’abandonne jamais. »</p>
        <p class="quote-author">Xavier Dolan.</p>
      </div>
    </div>
    
    <div class="team-member bg-nail">
      <img src="/nail.webp" alt="Naïl Dezzaz">
      <div>
        <p><strong>Naïl Dezzaz</strong> - Dev Web</p>
        <p class="quote">« Tu ne sais jamais à quel point tu es fort, jusqu'au jour où être fort reste la seule option. »</p>
        <p class="quote-author">Bob Marley.</p>
      </div>
    </div>
  </div>
</template>
