import {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useState,
} from "react";
import axios from "axios";
import { uniqueCategory } from "../../utils/uniqueCategory";
import { sortByPrice } from "../../utils/sortByPrice";
import { filterByCategory } from "../../utils/filterByCategory";
import { stateReducerFun } from "../GlobalContext/StateReducer";
import {filterByRating} from "../../utils/filterByRating"
import {filterByPriceRange} from "../../utils/filterByPriceRange"

const StateContext = createContext();

const initialState = {
    products: [],
    filters: {
        sortBy: "",
        priceRange: 2000,
        categoryName: [],
        rating: null,
    },
    wishlist: [],
};

const StateContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [state, dispatch] = useReducer(stateReducerFun, initialState);
    const {
        products,
        filters: { sortBy, categoryName, rating, priceRange },
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

    const filteredProductList = getFilterByPriceRange;


    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { products },
                } = await axios.get("/api/products");
                dispatch({
                    type: "ON_SUCCESS",
                    payload: products,
                    setLoading: setLoading,
                });
            } catch (error) {
                console.log(error);
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
