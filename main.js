import { makeProducts } from "./index.js";
import "./styles/index.scss";

// console.log(makeProducts());

document.querySelector("#app").innerHTML = `
<section class="product-section">
  <h2 class="product-section__heading">Bestseller und neue Produkte</h2>
  <div class="product-section__product-list">${makeProducts()}</div>
<a class="product-section__button" href="#">weitere Produkte anzeigen</a>
</section>
`;
