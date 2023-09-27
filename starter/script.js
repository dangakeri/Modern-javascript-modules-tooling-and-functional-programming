// Importing modules
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('bread', 10);
// console.log(price, qt);

console.log('Importing modules');

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(add.cart);
