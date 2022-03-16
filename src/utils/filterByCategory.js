export const filterByCategory = (data, categoryName) => {

    const copied = [...data]

    if (categoryName.length !== 0) {
        return copied.filter((eachProduct) => categoryName.includes(eachProduct.categoryName))
    }

    return copied

}