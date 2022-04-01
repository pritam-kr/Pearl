 // getting max min price in all products

 export const gettingMaxPrice = (productData) => Math.max(...productData.map((eachProduct) => eachProduct.currentPrice))

// export const gettingMinPrice = (productData) => Math.min(...productData.map((eachProduct) => eachProduct.currentPrice))