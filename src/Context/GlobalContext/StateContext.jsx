import {
    createContext,
    useContext,
    useReducer,
    useEffect, 
} from "react";
import axios from "axios";
import { stateReducerFun } from "../GlobalContext/StateReducer";
import {toast} from "react-hot-toast"
import { searchProducts,uniqueCategory, sortByPrice, filterByCategory, filterByPriceRange, filterByRating } from "../../utils";

 
const StateContext = createContext();

const initialState = {
    products: [],
    filters: {
        sortBy: "",
        priceRange: 9600,
        categoryName: [],
        rating: null,
        maxPrice: "",
        minPrice: "",
        search: ""
    },
    featured: [],
    
};

const StateContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(stateReducerFun, initialState);
    const {
        products,
        filters: { sortBy, categoryName, rating, priceRange, search}, featured
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
    const filteredProductList = getFilterByPriceRange 

    const getSearchedProducts = searchProducts(filteredProductList, search)

   
    //Getting product from Backend
    useEffect(() => {
        (async () => {
            try {
                const {
                    status,
                    data: { products }, 
                } = await axios.get("/api/products");

                 if(status === 200){
                    dispatch({ type: "LOAD_MAX_PRICE", payload: products })
                    dispatch({type: "FEATURED_PRODUCT", payload: products})
                    dispatch({
                        type: "ON_SUCCESS",
                        payload: products,
                    });
                 }

            } catch (error) {
                 toast.error("Error occured in Global Product Data", {position: "top-right"})
            }
        })();
    }, []);

    return (
        <StateContext.Provider value={{ state, dispatch, getUniqueCategory, filteredProductList, getSearchedProducts }}>
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => useContext(StateContext);

export { useStateContext, StateContextProvider };


