<template>
     <!--Sidans huvudinnehåll: -->
     <main>
      <article class="contact-content-container">
        <section class="contact-content">
          <div class="contact-info">
            <h1>Är du intresserad av att träna hos oss?</h1>
            <h2>I så fall ser vi fram emot att höra av dig!</h2>
            <p>
              Använd kontaktuppgifterna för att kontakta oss på mail eller
              telefon eller besök oss i våra lokaler så hjälper vi dig!
            </p>

            <p><b> address: </b>Väggatan 2</p>
            <p><b> telefon: </b>000-000 00 00</p>
            <p><b> Epost </b>noMail@notamail.se</p>
          </div>
        </section>
        <section class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d440.00711037233793!2d21.000628406828753!3d63.823999998483266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNjPCsDQ5JzI2LjQiTiAyMcKwMDAnMDQuNyJF!5e0!3m2!1ssv!2sse!4v1726922641003!5m2!1ssv!2sse"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            id="map"
          ></iframe>
        </section>
      </article>
    </main>
</template>

<script>
export default{
    name: 'ContactView'
}
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

article {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  font-family: "Montserrat Alternates", sans-serif;
}

.contact-info h1 {
  font-size: 3rem;
}

.contact-map {
  margin-top: 5rem;
}

.contact-map iframe {
  width: 30rem;
  height: 15rem;
}



/* ......................MEDIA QUERIES ........................ */
/*För små skärmar: */
@media only screen and (max-width: 640px) {
  #map {
    width: 350px;
    height: 200px;
  }
}
</style>