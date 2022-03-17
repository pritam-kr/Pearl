 
import {FEATURED_PRODUCT, LOW_TO_HIGH, HIGH_TO_LOW, ON_SUCCESS, GET_CATEGORY, STAR_RATING, PRICE_RANGE, CLEAR_FILTER } from "../Action/actions"
import {gettingMaxPrice} from "../../utils/maxMinPrice"
import {featuredProduct} from "../../utils/featuredProduct"

export const stateReducerFun = (state, action) => {

    switch (action.type) {

        case ON_SUCCESS:
            if (action.payload) {

                return {
                    ...state,
                    products: action.payload,
                };
            }

        case "LOAD_MAX_PRICE":
            return {
                ...state, filters: { ...state.filters, maxPrice:  gettingMaxPrice(action.payload)}
            }

        case LOW_TO_HIGH:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sortBy: action.payload,
                },
            };

        case HIGH_TO_LOW:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sortBy: action.payload,
                },
            };

        case GET_CATEGORY:
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

        case STAR_RATING:

        if(action.payload !== ""){
            return { ...state, filters: { ...state.filters, rating: action.payload } }
        }

        return null

        case PRICE_RANGE:

            return { ...state, filters: { ...state.filters, priceRange: action.payload } }

        case CLEAR_FILTER:

            return {
                ...state, filters: {
                    ...state.filters, sortBy: "",
                    priceRange: 2000,
                    categoryName: [],
                    rating: null,
                }
            }

        case FEATURED_PRODUCT:

        return {
            ...state, featured: featuredProduct(action.payload)
        }

        default:
            return state;
    }
};
