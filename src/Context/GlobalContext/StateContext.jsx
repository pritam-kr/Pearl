import { createContext, useContext, useReducer, useEffect, useState } from "react"
import axios from "axios"
import { uniqueCategory } from "../../utils/uniqueCategory"
import { sortByPrice } from "../../utils/sortByPrice"
import { stateReducerFun } from "../GlobalContext/StateReducer"

const StateContext = createContext()


const initialState = {
    products: [],
    filters: {
        sortBy: '',
        priceRange: 20,
        categoryName: [],
        rating: ''
    },
    wishlist: [],
}

const StateContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(stateReducerFun, initialState);
    const { products, filters: { sortBy, categoryName } } = state

    // getting all category name
    const getUniqueCategory = uniqueCategory(products, "categoryName")

    // Sort By Price 
    const getSortByPrice = sortByPrice(products, sortBy)

    //filter by Category 
    const filterByCategory = (data, categoryName) => {

        const copied = [...data]

        if (categoryName.length !== 0) {
            return copied.filter((eachProduct) => categoryName.includes(eachProduct.categoryName))
        }

        return copied

    }

    const getFilterByCategory = filterByCategory(getSortByPrice, categoryName)
    console.log(getFilterByCategory)

    useEffect(() => {
        (async () => {
            try {
                const { data: { products } } = await axios.get('/api/products')
                dispatch({ type: "ON_SUCCESS", payload: products, setLoading: setLoading })
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])


    return (
        <StateContext.Provider value={{ state, dispatch, getUniqueCategory }} >
            {children}
        </StateContext.Provider>
    )

}

const useStateContext = () => useContext(StateContext)

export { useStateContext, StateContextProvider }