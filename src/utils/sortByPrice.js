export const sortByPrice = (data, sortBy) => {

    if(sortBy === "HIGH_TO_LOW"){
        return [...data].sort((a, b) => b.currentPrice - a.currentPrice)
    }
    if(sortBy === "LOW_TO_HIGH"){
     return [...data].sort((a, b) => a.currentPrice - b.currentPrice)
    }

    return [...data]
 }