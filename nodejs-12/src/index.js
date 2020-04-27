const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const { products } = require('./data/products');

function getPromotion(categories) {
  const categoriesByAmount = categories.reduce((acum, value) => ({
    ...acum,
    [value]: (acum[value] || 0) + 1,
  }), {});

  const differentCategoriesCount = Object.entries(categoriesByAmount).length;

  if (differentCategoriesCount === 0)
    return null;

  return promotions[differentCategoriesCount-1];
};

function getShoppingCart(ids, productsList) {
  const products = productsList
    .filter(({ id }) => ids.includes(id))
    .map((product) => ({
      name: product.name,
      category: product.category,
    }));
  
  const promotion = getPromotion(products.map(({ category }) => category));

  return {
    products,
    promotion,
  };
};

console.log(getShoppingCart([120, 230, 310, 490], products));

module.exports = { getShoppingCart };
