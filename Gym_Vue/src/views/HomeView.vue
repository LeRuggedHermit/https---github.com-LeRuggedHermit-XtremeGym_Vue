
<template>
  <div class="main-container">
      <!--Sidans huvudinnehåll: -->
      <BannerComponent />
        <main>

          <article class="about">
            <section class="about-text">
              <h1>X-treme gym</h1>
              <p id="subheading">
                Xtreme-gym är gymmet för dig som vill träna X-tra hårt, som vill slå
                X-tra hårt och som vägrar kompromissa med din träning!
              </p>

              <p class="main-text">
                Vi tillhandahåller tjänster för dig som vill ägna dig åt antingen
                styrketräning i vårt gym, Jiu jitsu eller MMA.
              </p>

              <p class="main-text">
                Det spelar ingen roll om du är luttrad veteran eller aldrig satt din
                fot i ett gym tidigare!
              </p>

              <p class="main-text">
                Vi finns här för att hjälpa dig nå de resultat du vill nå.
              </p>
            </section>
            <section class="about-img">
              <img src="../assets/Kick_big.png" alt="kick" />
            </section>
          </article>
          <article class="news-article">
            <h1>Senaste nyheter!</h1>
            <div class="news-container">
              <div class="news">
                <p>
                  En kurs där man får lära sig grunderna i MMA. <br />
                  Variationsrik och allsidig träning för dig som inte har någon
                  tidigare erfarenhet av MMA och/eller för dig som tränat 1 termin
                  och vill ha mer grunder.
                  <a href="">Läs mer</a>
                </p>
              </div>
              <div class="news">
                <p>
                  En kurs där man får lära sig grunderna i MMA. <br />
                  Variationsrik och allsidig träning för dig som inte har någon
                  tidigare erfarenhet av MMA och/eller för dig som tränat 1 termin
                  och vill ha mer grunder.
                  <a href="">Läs mer</a>
                </p>
              </div>
              <div class="news">
                <p>
                  En kurs där man får lära sig grunderna i MMA. <br />
                  Variationsrik och allsidig träning för dig som inte har någon
                  tidigare erfarenhet av MMA och/eller för dig som tränat 1 termin
                  och vill ha mer grunder.
                  <a href="">Läs mer</a>
                </p>
              </div>
            </div>
          </article>
        </main>
  </div>
</template>

<script>
import BannerComponent from '../components/Hero.vue'

export default {
  name: 'HomeView',
  components: {
    BannerComponent
  }}
</script>

<style scoped>

/*.........................Sidans huvudinnehåll: .................*/
main {
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.about {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0;
  font-family: "Montserrat Alternates", sans-serif;
}

section {
  width: 50%;
}
.about-text {
  margin-left: 8vmin;
}

#subheading {
  width: 420px;
  font-weight: 600;
}
.about-text p {
  width: 420px;
}

.about-text h1 {
  font-size: 28px;
  text-decoration: underline;
  font-weight: 400;
}
.about-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-right: 8vmin;
}

.about-img img {
  width: 100%;
}

.news-article {
  margin-top: 10rem;
  height: 30rem;
  background-image: url("../assets/news-bg.png");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
  margin-bottom: 200px;
}

.news-article h1 {
  font-weight: 400;
  font-size: 3.5rem;
}

.news-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 8vmin;
  margin-top: 1.8rem;
}

.news {
  width: 250px;
}

.news a {
  color: rgb(200, 184, 135);
  transition: color 0.8s ease-in-out;
}

.news a:hover {
  color: #23c208;
  transition: color 0.2s ease-in-out;
}

@media only screen and (min-width: 300px) and (max-width: 400px) {
  .buttons {
    width: 80%;
  }

  .menu_btn,
  .member_btn,
  .trial_btn,
  .close_btn {
    width: 80px;
    height: 40px;
    font-size: 10px;
  }

  .push-btn {
    font-size: 20px;
  }

  .about-img {
    border: solid black 1px;
    width: 100%;
    margin: 0;
  }
}

/*För små skärmar: */
@media only screen and (max-width: 640px) {



  
  .menu_btn,
  .member_btn,
  .trial_btn,
  .close_btn{
    width: 100px;
    height: 40px;
  }



  .about {
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  .about-text {
    margin-left: 0;
    width: 300px;
  }

  #subheading {
    width: 300px;
    font-weight: 600;
  }
  .about-text p {
    width: 300px;
  }

  .about-img {
    width: 20rem;
    height: 10rem;
  }

  .about-img img {
    width: 20rem;
    height: 10rem;
  }

  .news-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 8vmin;
    margin-top: 1.8rem;
  }

  .news-article {
    margin-top: 10rem;
    height: fit-content;
    background-color: rgba(21, 21, 51, 0.539);
    background-image: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    font-family: "Montserrat Alternates", sans-serif;
    color: white;
    margin-bottom: 200px;
    text-align: center;
  }

  .news a {
    color: rgb(0, 0, 0);
    transition: color 0.8s ease-in-out;
  }
}


@media only screen and (min-width: 641px) and (max-width: 840px) {

  .menu_btn,
  .member_btn,
  .trial_btn,
  .close_btn,
  .push-btn {
    width: 100px;
    height: 40px;
  }

  .hero {
    object-fit: contain;
    background-repeat: no-repeat;
    background: url("/ASSETS/Hero_small.png");
    background-position: center;
    background-size: cover;
    height: fit-content;
  }

  .push-container {
    font-size: 80%;
  }

  .push-btn {
    margin-bottom: 4vmin;
  }

  .about {
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  .about-text {
    margin-left: 0;
    width: 500px;
  }

  #subheading {
    width: 300px;
    font-weight: 600;
  }
  .about-text p {
    width: 500px;
  }

  .about-img {
    width: 25rem;
    height: 10rem;
  }

  .about-img img {
    width: 20rem;
    height: 10rem;
  }

  .news-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 8vmin;
    margin-top: 1.8rem;
  }

  .news-article {
    margin-top: 10rem;
    height: fit-content;
    background-color: rgba(21, 21, 51, 0.539);
    background-image: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    font-family: "Montserrat Alternates", sans-serif;
    color: white;
    margin-bottom: 200px;
    text-align: center;
  }

  .news a {
    color: rgb(0, 0, 0);
    transition: color 0.8s ease-in-out;
  }

}

</style>
