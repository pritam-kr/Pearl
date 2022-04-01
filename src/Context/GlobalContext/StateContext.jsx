import {
    createContext,
    useContext,
    useReducer,
    useEffect,
} from "react";
import axios from "axios";
import { uniqueCategory } from "../../utils/uniqueCategory";
import { sortByPrice } from "../../utils/sortByPrice";
import { filterByCategory } from "../../utils/filterByCategory";
import { stateReducerFun } from "../GlobalContext/StateReducer";
import { filterByRating } from "../../utils/filterByRating"
import { filterByPriceRange } from "../../utils/filterByPriceRange"
import {toast, ToastContainer} from "react-toastify"


const StateContext = createContext();

const initialState = {
    products: [],
    filters: {
        sortBy: "",
        priceRange: 0,
        categoryName: [],
        rating: null,
        maxPrice: "",
        minPrice: ""
    },
    featured: []
};

const StateContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(stateReducerFun, initialState);
    const {
        products,
        filters: { sortBy, categoryName, rating, priceRange, }, featured
    } = state;

   
    // getting all category's name
    const getUniqueCategory = uniqueCategory(products, "categoryName");

    // Sort By Price
    const getSortByPrice = sortByPrice(products, sortBy);

    //filter by Category
    const getFilterByCategory = filterByCategory(getSortByPrice, categoryName);

    // filter by Rating
    const getFilterByRating = filterByRating(getFilterByCategory, rating);

    //filter by Price range
    const getFilterByPriceRange = filterByPriceRange(getFilterByRating, priceRange)

    //Final Filtered` list
    const filteredProductList = getFilterByPriceRange;


    useEffect(() => {
        (async () => {
            try {
                const {
                    status,
                    data: { products },
                } = await axios.get("/api/products");

                dispatch({
                    type: "ON_SUCCESS",
                    payload: products,
                });

                 if(status === 200){
                    dispatch({ type: "LOAD_MAX_PRICE", payload: products })
                    dispatch({type: "FEATURED_PRODUCT", payload: products})
                 }

            } catch (error) {
                 toast.error("Error occured in Global Product Data", {position: "top-right"})
            }
        })();
    }, []);

    return (
        <StateContext.Provider value={{ state, dispatch, getUniqueCategory, filteredProductList }}>
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => useContext(StateContext);

export { useStateContext, StateContextProvider };


