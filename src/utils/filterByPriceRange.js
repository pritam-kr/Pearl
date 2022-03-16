export const filterByPriceRange = (data, price) => {
  if (!price) {
    return data;
  }
  return data.filter((eachProduct) => eachProduct.price >= price);
};
