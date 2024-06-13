<template>
    <div class="container-wheel">
      <h1 class="wheel-title">La roue des bons plans 100 % gagnant</h1>
      <div class="wheel-container">
        <div class="pointer"></div>
  
        <div class="wheel" :style="{ transform: 'rotate(' + rotation + 'deg)' }"></div>
        <div class="lights">
          <div v-for="n in 8" :key="n" class="light"></div>
        </div>
      </div>
      
      <button @click="spinWheel" :disabled="spinning" class="spin-button">Jouer</button>
      <div v-if="prizeMessage" class="prize-message animated">{{ prizeMessage }}</div>
      <audio v-if="prizeMessage" id="win-sound" src="/tada-fanfare-a-6313.mp3" autoplay></audio>
    </div>
    <div class="m-4">*pour tout gains, veuillez effectuer une capture d'écran à envoyer dans le formulaire de contact.</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rotation: 0,
        spinning: false,
        prizeMessage: ''
      };
    },
    methods: {
      spinWheel() {
        if (this.spinning) return;
        this.spinning = true;
        this.prizeMessage = ''; // Clear previous message
        const spinDegrees = Math.floor(Math.random() * 3600) + 360;
        this.rotation += spinDegrees;
  
        setTimeout(() => {
          this.spinning = false;
          this.getPrize();
        }, 4000);
      },
      getPrize() {
        const segmentAngle = 360 / this.prizes.length;
        const normalizedRotation = this.rotation % 360;
        const prizeIndex = Math.floor(normalizedRotation / segmentAngle);
        this.prizeMessage = `Vous avez gagné : ${this.prizes[prizeIndex]} !`;
  
        // Play sound when the prize message is displayed
        const winSound = document.getElementById('win-sound');
        if (winSound) {
          winSound.currentTime = 0; // Rewind to the start
          winSound.play().catch(error => {
            console.error("Erreur lors de la lecture du son : ", error);
          });
        } else {
          console.error("Element audio introuvable");
        }
      }
    },
    computed: {
      prizes() {
        return [
          'Évaluation et code gratuit avec le CFC',
          'Abonnement premium gratuit pour un ami',
          '10 % de réduction sur l’addition Flunch',
          '30 % de réduction sur l’article de ton choix Intersport',
          '1 menu PEPE Chicken gratuit',
          'Pack étudiant'
        ];
      }
    },
    mounted() {
      // Preload the audio
      const winSound = document.getElementById('win-sound');
      if (winSound) {
        winSound.load();
      }
    }
  };
  </script>
  
  <style scoped>
  .container-wheel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    position: relative;
  }
  
  .wheel-title {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 40px;
  }
  
  .pointer {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid red;
    position: absolute;
    z-index: 10;
    left: 43%;
    top: -10%;
  }
  
  .wheel-container {
    position: relative;
  }
  
  .wheel {
    width: 300px;
    height: 300px;
    border: 5px solid gold;
    border-radius: 50%;
    background: conic-gradient(
      red 0% 16.67%,
      yellow 16.67% 33.33%,
      green 33.33% 50%,
      blue 50% 66.67%,
      violet 66.67% 83.33%,
      pink 83.33% 100%
    );
    transition: transform 4s ease-out;
  }
  
  .lights {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }
  
  .light {
    width: 10px;
    height: 10px;
    background-color: gold;
    border-radius: 50%;
    box-shadow: 0 0 5px gold;
    animation: blink 1.5s infinite;
    position: absolute;
  }
  
  .light:nth-child(1) { top: 0; left: 50%; transform: translate(-50%, -50%); }
  .light:nth-child(2) { top: 14%; left: 86%; transform: translate(-50%, -50%); }
  .light:nth-child(3) { top: 50%; right: 0; transform: translate(50%, -50%); }
  .light:nth-child(4) { bottom: 14%; right: 14%; transform: translate(50%, 50%); }
  .light:nth-child(5) { bottom: 0; left: 50%; transform: translate(-50%, 50%); }
  .light:nth-child(6) { bottom: 14%; left: 14%; transform: translate(-50%, 50%); }
  .light:nth-child(7) { top: 50%; left: 0; transform: translate(-50%, -50%); }
  .light:nth-child(8) { top: 14%; left: 14%; transform: translate(-50%, -50%); }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  
  .spin-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .spin-button:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
  }
  
  .prize-message {
    margin-top: 20px;
    font-size: 24px;
    color: #4caf50;
    font-weight: bold;
    text-align: center;
  }
  
  /* Animation for the prize message */
  .animated {
    animation: bounce 0.5s ease;
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  </style>
  
  