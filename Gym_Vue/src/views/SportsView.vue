<template>
    <!--Sidans huvudinnehåll: -->
    <main>
      <article class="sports-content-container">
        <section class="mma">
          <div class="sports-text">
            <h1>MMA</h1>
            <p>
              MMA (Mixed Martial Arts) är en kampsport som kombinerar tekniker
              från flera discipliner som boxning, brottning, brasiliansk
              jiu-jitsu, thaiboxning och judo. Träningen fokuserar på att
              utveckla allsidiga färdigheter både stående och på marken, vilket
              ger utövaren verktyg för slag, sparkar, kast, nedtagningar och
              markkamp.
            </p>
            <p>
              MMA-träning bygger på att förbättra fysisk styrka, kondition,
              smidighet och mental uthållighet. Den innehåller både teknisk
              träning, där du lär dig olika kombinationer och tekniker, samt
              sparring och matchliknande situationer för att finslipa dina
              färdigheter i en säker miljö.
            </p>
            <p>
              Förutom teknisk skicklighet tränas reaktionsförmåga, strategi och
              taktiskt tänkande. Oavsett om du tränar för tävling eller för
              fitness, erbjuder MMA en mångsidig och intensiv träning som bygger
              självförtroende, disciplin och kroppskontroll. Det är en sport som
              utmanar hela kroppen och sinnet.
            </p>
          </div>
          <div class="sports-img">
            <img
              src="https://images.unsplash.com/photo-1671856129092-ef4f4c412186?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              alt="mma-pic"
            />
          </div>
        </section>
        <section class="thai">
          <div class="sports-text">
            <h1>Muay Thai (thaiboxning)</h1>
            <p>
              Muay Thai, ofta kallad "de åtta lemmarna", är en thailändsk
              kampsport som använder slag, sparkar, knän och armbågar. Träningen
              fokuserar på att utveckla kraft, teknik och kondition genom en
              kombination av skuggboxning, mittsträning, säckträning och
              sparring.
            </p>
            <p>
              I Muay Thai lär du dig att utnyttja hela kroppen som ett vapen,
              vilket gör den till en effektiv och dynamisk kampsport. Träningen
              förbättrar styrka, uthållighet och smidighet, samtidigt som den
              bygger självförtroende och disciplin.
            </p>
            <p>
              Förutom tekniska färdigheter betonas också strategiskt tänkande
              och reaktionsförmåga, vilket gör att utövare kan anpassa sig till
              olika situationer i ringen. Oavsett om du tränar för tävling eller
              fitness, erbjuder Muay Thai en intensiv och givande
              träningsupplevelse som stärker både kropp och sinne.
            </p>
          </div>
          <div class="sports-img">
            <img
              src="https://plus.unsplash.com/premium_photo-1661963901750-f498389cc4a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="muay thai"
            />
          </div>
        </section>
        <section class="bjj">
          <div class="sports-text">
            <h1>brasiliansk jiu-jitsu (BJJ)</h1>
            <p>
              Brasiliansk Jiu-Jitsu (BJJ) är en kampsport som fokuserar på
              markkamp och grappling. Den bygger på principen att en mindre,
              svagare person kan besegra en större och starkare motståndare
              genom att använda teknik, grepp och kontroll.
            </p>
            <p>
              Träningen innefattar lärande av olika tekniker som nedtagningar,
              låsningar och strypningar, samt hur man försvarar sig mot dessa.
              BJJ-träning förbättrar smidighet, styrka och uthållighet,
              samtidigt som den främjar mental skärpa och problemlösning.
            </p>
            <p>
              Pass inkluderar ofta drilling av tekniker, sparring och rullning,
              vilket ger utövarna möjlighet att tillämpa sina färdigheter i
              verkliga situationer. BJJ främjar en stark gemenskap och
              kamratskap, där utövare lär sig av varandra oavsett
              erfarenhetsnivå. Oavsett om du tränar för självförsvar, fitness
              eller tävling, erbjuder brasiliansk jiu-jitsu en djup och
              meningsfull träningsupplevelse.
            </p>
          </div>
          <div class="sports-img">
            <img
              src="https://plus.unsplash.com/premium_photo-1712438460624-ed01afc4f6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
              alt="BJJ"
            />
          </div>
        </section>
      </article>
    </main>
</template>

<script>
export default {
    name: 'SportsView'}
</script>


<style scoped>
/*-----------Sidans huvudinnehåll: --------------*/
main {
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.sports-content-container {
  width: 80%;
}

.mma,
.thai,
.bjj {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}

.sports-content-container h1 {
  font-family: "Metal Mania", sans-serif;
}

.sports-text {
  font-family: "Montserrat Alternates", sans-serif;
  width: 50%;
}

.sports-img img {
  width: 46vmin;
  height: 38vmin;
  object-fit: cover;
  object-position: center;
  border-radius: 25px;
}


/* ...................Media queries ............................ */

/*  för små skärmar  */
@media only screen and (max-width: 640px) {
  
  .mma,
  .thai,
  .bjj {
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 8vmin;
  }

  .sports-text {
    font-family: "Montserrat Alternates", sans-serif;
    width: 100%;
  }

  main {
    margin-bottom: 3rem;
  }
}



/*För halv-små skärmar: */
@media only screen and (min-width: 641px) and (max-width: 840px) {
  
  .mma,
  .thai,
  .bjj {
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 6vmin;
  }

  .sports-text {
    font-family: "Montserrat Alternates", sans-serif;
    width: 100%;
  }

  .sports-img {
    margin-bottom: 1.8rem;
  }

  main {
    margin-bottom: 3rem;
  }
}


</style>