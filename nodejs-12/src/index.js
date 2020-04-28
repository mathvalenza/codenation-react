const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const { products } = require('./data/products');

function getPromotion(categories) {
  const categoriesByAmount = categories.reduce((acum, value) => ({
    ...acum,
    [value]: (acum[value] || 0) + 1,
  }), {});

  const differentCategoriesCount = Object.entries(categoriesByAmount).length;

  return promotions[differentCategoriesCount-1];
};

function getPromotionValue(products, promotion) {
  return products.reduce((acum, product) => {
    const productPromotion = product.promotions.find(({ looks }) => looks.includes(promotion));

    if (!!productPromotion)
      return acum + productPromotion.price;

    return acum + product.regularPrice;
  }, 0);
}

function getShoppingCart(ids, productsList) {
  const chosenProducts = productsList.filter(({ id }) => ids.includes(id));

  const products = chosenProducts.map((product) => ({
    name: product.name,
    category: product.category,
  }));
  
  const promotion = getPromotion(products.map(({ category }) => category));

  const expectedValue = chosenProducts.reduce((acum, product) => acum + product.regularPrice, 0);

  const promotionValue = getPromotionValue(chosenProducts, promotion);

  const discountValue = expectedValue - promotionValue;

  const discountPercentage = (1 - (promotionValue / expectedValue)) * 100;

  return {
    products,
    promotion,
    totalPrice: promotionValue.toFixed(2),
    discountValue: discountValue.toFixed(2),
    discount: `${discountPercentage.toFixed(2)}%`,
  };
};

module.exports = { getShoppingCart };
