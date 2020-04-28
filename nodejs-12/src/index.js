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
  const chosedProducts = productsList.filter(({ id }) => ids.includes(id));

  const products = chosedProducts.map((product) => ({
      name: product.name,
      category: product.category,
    }));
  
  const promotion = getPromotion(products.map(({ category }) => category));

  const expectedValue = chosedProducts.map(({ regularPrice }) => regularPrice)
    .reduce((acum, value) => acum + value)
    .toFixed(2);

  const promotionValue = 0;

  const discountValue = 0;

  const discountPercentage = promotionValue / expectedValue;

  return {
    products,
    promotion,
    totalPrice: promotionValue,
    discountValue,
    discountPercentage,
  };
};

console.log(getShoppingCart([120, 230, 310, 490], products));

module.exports = { getShoppingCart };
