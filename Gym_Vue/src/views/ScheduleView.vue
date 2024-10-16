<template>
    <!--Sidans huvudinnehåll: -->
    <main>
      <article class="schema-content-container">
        <section class="schema-text">
          <h1>Här är gymmets schemalagda tider för hösten 2024</h1>
        </section>
        <section class="schema-schema">
          <table class="schema-table">
            <colgroup>
              <col width="115" />
              <col width="115" />
              <col width="115" />
              <col width="115" />
              <col width="115" />
              <col width="115" />
              <col width="115" />
              <col width="115" />
            </colgroup>
            <tbody>
              <tr>
                <td class="cell"><h4>Tider:</h4></td>
                <td class="cell"><h4>Måndag</h4></td>
                <td class="cell"><h4>Tisdag</h4></td>
                <td class="cell"><h4>Onsdag</h4></td>
                <td class="cell"><h4>Torsdag</h4></td>
                <td class="cell"><h4>Fredag</h4></td>
                <td class="cell"><h4>Lördag</h4></td>
                <td class="cell"><h4>Söndag</h4></td>
              </tr>
              <tr>
                <td class="cell"><p>16:00 - 17:30</p></td>
                <td class="cell"><p>Muay thai (nybörjare)</p></td>
                <td class="cell"><p>BJJ (nybörjare)</p></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"><p>MMA (nybörjare)</p></td>
                <td class="cell"></td>
                <td class="cell"></td>
              </tr>
              <tr>
                <td class="cell"><p>17:40 - 19:00</p></td>
                <td class="cell">Muay Thai (fortsättare)</td>
                <td class="cell"></td>
                <td class="cell">BJJ (fortsättare)</td>
                <td class="cell">MMA (fortsättare)</td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
              </tr>
              <tr>
                <td class="cell"><p>19:05 - 20:30</p></td>
                <td class="cell">MMA (avancerad)</td>
                <td class="cell">BJJ(avancerad)</td>
                <td class="cell">Muay thai (avancerad)</td>
                <td class="cell"></td>
                <td class="cell">BJJ(alla grupper)</td>
                <td class="cell"></td>
                <td class="cell"></td>
              </tr>
            </tbody>
          </table>
          <p>
            Notera att förändringar kan ske på grund av sjukdom eller andra
            faktorer utom vår kontroll.
          </p>
          <p>För att boka PT till gymmet prata med receptionen på plats!</p>
        </section>
        <section>
          <h3>Detta schema gäller för datumen: 2024-09-01 - 2025-01-06</h3>
        </section>
      </article>
    </main>
</template>

<script>

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

.schema-table {
  border-collapse: collapse;
  width: 100%;
  font-family: "Montserrat Alternates", sans-serif;
}

/* Definierar cellernas kantlinjer */
.schema-table .cell {
  border: 1px solid #000;
  padding: 0; /* Tar bort padding för att eliminera utrymme inom cellerna */
  text-align: center;
  height: 12vmin;
  width: 16vmin;
}

/* Tar bort eventuella marginaler från tabellens rubriker */
.schema-table h4 {
  margin: 0;
  padding: 10px;
}


/*...................................MEDIA-QUERIES.......................... */

/*För små skärmar: */
@media only screen and (max-width: 640px) {
  
  article {
    width: 95%;
    overflow-x: hidden; /* inget ska spilla ut ur artikeln */
  }

  .schema-schema {
    width: 100%;
    overflow-x: auto; /* möjliggör sidoscroll för tabellen */
  }

  .schema-table {
    width: 100%;
    table-layout: auto; /* anpassa tabellen efter innehåll */
    border-collapse: collapse;
  }

  .schema-table .cell {
    height: auto;
    width: auto;
    font-size: 0.85em; /* vi minskar teckenstorleken en smula */
    padding: 5px;
    word-wrap: break-word;
  }

  .schema-table h4 {
    padding: 5px;
    font-size: 1em;
  }
}


/*För Halv-små skärmar: */
@media only screen and (min-width: 641px) and (max-width: 840px) {
  
  article {
    width: 95%;
    overflow-x: hidden; /* inget ska spilla ut ur artikeln */
  }

  .schema-schema {
    width: 100%;
    overflow-x: auto; /* möjliggör sidoscroll för tabellen */
  }
}
</style>