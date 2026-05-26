//Definerer min div .products som productsEL
const productsEl = document.querySelector(".products");

//Funktion ved navn render products, der "printer" mine bøger
function renderProducts() {
  //Beder om at gennemgå alle mine produkter og gøre følgende for hvert produkt:
  products.forEach((product) => {
    //Lav en div, som min egen .products og indsæt følgende html:
    productsEl.innerHTML += `
    //En div ved navn "item"
      <div class="item">
      //En container til selve indholdet af hvert item
        <div class="item-container">
      //En div ved navn "item-img"
          <div class="item-img">
          //I item-img indsættes billede og titel for produktet
          //Her bruger ${products.} til at hente konkret data fra min "products.js"
          //I denne div indsættes billedet, alternativt vises title, hvis ikke billedet er tilgængeligt.
            <img src="${product.image}" alt="${product.name}">
          </div>
          //Herefter indsættes en ny div, ved navn "desc", der indeholder de resterende informationer
          <div class="desc">
          //Header med titel på bogen
            <h3>${product.name}</h3>
            //Paragraph med forfatteren
            <p>${product.author}</p>
            //Paragraph med beskrivelsen
            <p>${product.description}</p>
          </div>
          //Til sidst en div, der indeholder interaktions mulighedern
          <div class="book-actions">
          //a tag fortæller at det er et link der kan klikkes på
          //href definerer at det er pdf filen der skal bruges
          //Til sidst defineres der, at den skal forsøge at downloade denne fil
            <a class="download-btn" href="${product.pdf}" download>
            //Inde i mit a tag, fremgår teksten der skal stå på knappen
              Download PDF
            </a>
          //Nyt a tag, fordi der skal laves en sekundær knap
          //Det er stadig pdf filen der skal bruges
          //target="_blank" fortæller at den skal åbnes, i et nyt vindue
            <a class="read-btn" href="${product.pdf}" target="_blank">
            //Inde i mit a tag står der "read online", hvilket er den mulighed brugeren får, når filen åbnes i nyt vindue
              Read Online
            </a>
          </div>

        </div>
      </div>
    `;
  });
}
//Her kaldes funktionen, hvilket vil sige, at ovenstående proces sættes igang
renderProducts();
