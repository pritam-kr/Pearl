// getting all categories name 
export const uniqueCategory = (data, category) => {
    const categoryName =data.map((eachProduct) => eachProduct[category])
    // get Unique Category name in array 
    return ([...new Set(categoryName)])
}