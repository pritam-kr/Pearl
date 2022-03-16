export const filterByRating = (data, rating) => {
    if (!rating) {
        return data;
    }

    return data.filter((eachProduct) => eachProduct.rating === rating);
};