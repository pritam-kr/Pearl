export const stateReducerFun = (state, action) => {
    switch (action.type) {
        case "ON_SUCCESS":
            if (action.payload) {
                action.setLoading(false);
                return {
                    ...state,
                    products: action.payload,
                };
            }

        case "LOW_TO_HIGH":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sortBy: action.payload,
                },
            };

        case "HIGH_TO_LOW":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sortBy: action.payload,
                },
            };

        case "GET_CATEGORY":
            if (state.filters.categoryName.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        categoryName: [...state.filters.categoryName].filter(
                            (eachCategory) => eachCategory !== action.payload
                        ),
                    },
                };
            }

            return {
                ...state,
                filters: {
                    ...state.filters,
                    categoryName: [...state.filters.categoryName, action.payload],
                },
            };
        default:
            return state;
    }
};
