//Get search Products
export const searchProducts = (products, query) => {
  let copied = [...products];

  if (query !== "") {
    return copied.filter((eachProduct) =>
      eachProduct.title.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    return copied;
  }
};
