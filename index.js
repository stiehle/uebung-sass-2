import { products, star } from "./data";

export function makeProducts() {
  let html = "";
  let html1 = "";
  let html2 = "";
  let html3 = "";

  for (let element of products) {
    console.log(element);

    html1 = `
    <div class="product">
          <div class="product__badge product__badge${element.badge}">${element.badge_text}</div>
          <img src="${element.file}" class="product__image"></img>
          <div class="product__stock-stars">
    `;

    if (!element.instock) {
      html2 = `     
            <p class="product__stock product__stock--out-of-stock">nicht im Lager</p>           
    `;
    } else {
      html2 = `     
            <p class="product__stock product__stock--in-stock">im Lager</p>            
    `;
    }

    html2 += `<p class="product__stars">`;

    for (let i = 0; i < `${element.stars}`; i++) {
      html2 += `${star}`;
    }

    html3 = `       
            </p>
          </div>
          <div class="product__description">
            <div class="product__title"><h2>${element.title}</h2></div>
            <div class="product__text"><p>${element.text}</p></div>
          </div>
          <div class="product__prices">
            <div class="product__price product__price--reduce">${element.price_reduce}${element.price_unit}</div>
            <div class="product__price product__price--basis">${element.price_basis}${element.price_unit}</div>
          </div>
        </div>
    `;

    html += html1 + html2 + html3;
  }
  return html;
}
