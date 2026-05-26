const productsEl = document.querySelector(".products");

function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
      <div class="item">
        <div class="item-container">

          <div class="item-img">
            <img src="${product.image}" alt="${product.name}">
          </div>

          <div class="desc">
            <h3>${product.name}</h3>
            <p>${product.author}</p>
            <p>${product.description}</p>
          </div>

          <div class="book-actions">
            <a class="download-btn" href="${product.pdf}" download>
              Download PDF
            </a>

            <a class="read-btn" href="${product.pdf}" target="_blank">
              Read Online
            </a>
          </div>

        </div>
      </div>
    `;
  });
}

renderProducts();
