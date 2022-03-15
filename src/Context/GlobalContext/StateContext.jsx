import {createContext, useContext, useReducer, useEffect} from "react" 
import axios from "axios"

const StateContext = createContext()


const stateReducerFun = (state, action) => {

    switch(action.type){
        case  "ON_SUCCESS" :
        return {...state, products: action.payload}
    }

}

const initialState = {
    products: [],
    filters : {
        sortBy: '',
        priceRange: 20, 
        category: [],
        rating: ''
    },
    wishlist: [], 
}


const StateContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(stateReducerFun, initialState);
    const {products} = state

    // getting all categories name 

    const uniqueCategory = () => {

    }

    console.log()
     

    useEffect(() => {
        
        (async () => {
            try{
                const {data : {products}} = await axios.get('/api/products')
                dispatch({type: "ON_SUCCESS", payload: products})
            }
            catch(error){
                console.log(error)
            }
        })()

    }, [])


    return (
        <StateContext.Provider value={{state, dispatch}} >
            {children}
        </StateContext.Provider>
    )

}

const useStateContext = () => useContext(StateContext)

export {useStateContext, StateContextProvider}