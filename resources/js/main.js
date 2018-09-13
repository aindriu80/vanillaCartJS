"use strict";

const addToCartButton = document.querySelectorAll(
  '[data-action="ADD_TO_CART"]'
);
console.log(addToCartButton);
addToCartButton.forEach(addToCartButtonDOM => {
  addToCartButtonDOM.addEventListener("click", () => {
    console.log(addToCartButtonDOM.parentNode);
    const productDOM = addToCartButtonDOM.parentNode;
    const product = {
      image: productDOM.querySelector(".product__image").getAttribute("src"),
      name: productDOM.querySelector(".product__name").innerText,
      price: productDOM.querySelector(".product__price").innerText
    };
    console.table(product);
  });
});
