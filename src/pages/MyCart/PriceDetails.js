 
export const productQuantity = (sum, currentItem) => sum + currentItem.qty
export const totalPrice = (sum, currentItem) => sum + currentItem.currentPrice * currentItem.qty
export const totalMRP = (sum, currentItem) => sum + currentItem.originalPrice * currentItem.qty







 