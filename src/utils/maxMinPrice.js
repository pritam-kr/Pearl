 // getting max price in all products

 export const gettingMaxPrice = (productData) => Math.max(...productData.map((eachProduct) => eachProduct.price))

 export const gettingMinPrice = (productData) => Math.min(...productData.map((eachProduct) => eachProduct.price))