"use strict";

const addToCartButton = document.querySelectorAll(
  '[data-action="ADD_TO_CART"]'
);
console.log(addToCartButton);
addToCartButton.forEach(function(addToCartButtonDOM) {
  console.log(addToCartButtonDOM);
});
