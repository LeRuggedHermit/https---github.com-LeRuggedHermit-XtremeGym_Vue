<template>
    <!--Banner med puffar-->
    <div class="hero">
      <div class="push-container">
        <div class="push">
          <h1>Börja idag!</h1>
          <h3>Boka in ditt första pass redan nu!</h3>
        </div>
        <div class="push-button-container">
          <button class="push-btn" @click="BookPush">Boka</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BannerComponent',
    methods:{
      BookPush() {
        this.$router.push({ name: 'booking' });
      }
    }
  };
  </script>

<style scoped>
/*----------------Sid-banner med puffar: ----------------*/

.hero {
  width: 100%;
  height: 484.58px;
  background-image: url("../assets/HERO.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: left;
  align-content: center;
}

.push {
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
  margin-top: 5.5rem;
  margin-left: 8vmin;
}

.push-btn {
  width: 150px;
  height: 50px;
  background-color: #27378990;
  color: #ffffff;
  border: #ffffff solid 1px;
  padding-bottom: 0.5rem;
  cursor: pointer;
  font-family: "Metal Mania", sans-serif;
  font-size: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-left: 8vmin;
  transition: color 0.4s ease-in, background-color 0.4s ease-in;
}

.push-btn:hover {
  background-color: #7d93ff53;
  color: rgb(0, 152, 10);
}
</style>