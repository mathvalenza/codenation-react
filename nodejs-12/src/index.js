const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const { products } = require('./data/products');

function getShoppingCart(ids, productsList) {
  const products = productsList
    .filter(({ id }) => ids.includes(id))
    .map((product) => ({
      name: product.name,
      category: product.category,
    }));
  
  console.log('products> ', products);
  return {};
}

getShoppingCart([120, 230, 310, 490], products);

module.exports = { getShoppingCart };
