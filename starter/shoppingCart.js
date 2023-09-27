// Exporting modules

console.log('Exporting modules');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push({ quantity });
  console.log(`${quantity} ${product} added to cart`);
}
