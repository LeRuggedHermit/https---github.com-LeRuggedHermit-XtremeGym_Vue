<template>
    <!--Sidans huvudinnehåll: -->
    <main>
      <article class="booking-content-container">
        <section class="booking-info">
          <h1>Boka ditt första pass här nedan!</h1>
          <p>
            Innan du startar din nya resa på vårt gym, oavsett om du är
            nybörjare eller erfaren, kan det kännas bra att prova på först!
          </p>
          <p>
            I formuläret nedan kan du boka ditt första pass hos oss och se vad
            som passar dig!
          </p>
        </section>
        <section class="booking-form-container">
          <form action="booking.html?1" method="post">
            <label for="name">ditt namn</label>
            <input type="text" name="name" id="name" />
            <label for="email">Din email</label>
            <input type="text" name="email" id="email" />
            <label for="phone">ditt telefonnummer</label>
            <input type="tel" name="phone" id="phone" />
            <label for="date">Välj datum för pass</label>
            <input type="date" name="date" id="date" />
            <label for="choice">välj sport</label>
            <select name="choice" id="choice">
              <option value="1">mma</option>
              <option value="2">bjj</option>
              <option value="3">Muay thai</option>
            </select>
            <label for="level">Välj den nivå du anser att du ligger på</label>
            <select name="level" id="level">
              <option value="1">nybörjare</option>
              <option value="2">fortsättare (medelnivå)</option>
              <option value="3">fortsättare (avancerad)</option>
            </select>
            <label for="submit">Skicka in</label>
            <input type="submit" value="skicka" />
          </form>
        </section>
      </article>
    </main>
</template>


<script>
export default{
    name: 'BookingView',
}
</script>

<style scoped>

/*-----------Sidans huvudinnehåll: --------------*/

main {
  width: 100%;
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
  margin-top: 5rem;
  margin-bottom: 15rem;
  font-family: "Montserrat Alternates", sans-serif;
}

form {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 4vmin;
  background-color: rgba(128, 128, 128, 0.676);
  padding: 1.5rem;
}

input[type="text"],
input[type="tel"],
input[type="email"] {
  width: 250px;
  height: 50px;
}

input[type="date"] {
  width: 150px;
  height: 50px;
}

select {
  width: 250px;
  height: 50px;
}

input[type="submit"] {
  width: 100px;
  height: 50px;
  background-color: rgb(6, 126, 178);
  transition: backgroundcolor, ease-in, 0.8s, border-radius, ease-in, 0.8s;
  cursor: pointer;
  border: none;
}

input[type="submit"]:hover {
  background-color: rgb(74, 198, 74);
  border-radius: 50px;
}

</style>