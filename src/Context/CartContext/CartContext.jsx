import axios from "axios";
import { useEffect, createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { useAuthContext } from "../AuthContext/AuthContext";

const CartContext = createContext()


const initialState = {
    cart: [],
    totalPrice: null,
    deliveryCharge: null,
    totalCartItems: null,
    discount: null

}

const cartReducer = (state, action) => {

}

const CartContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(cartReducer, initialState)

    // I'm doing that to take object data from add to cart button
    const [cartItem, setCartItems] = useState ({})

    // Now do post request with for a single project with the help of token 
    
    useEffect(() => {
        (async () => {

            try{
                const response = await axios.post('/api/user/cart', cartItem, {
                    headers: {
                        'authorization': getToken
                    }
                })

                console.log(response)
            }
            catch(error){
                console.log(error)
            }

        })()
    }, [])
    


    return(
        <CartContext.Provider value={{state, dispatch, setCartItems}}  >
            {children}
        </CartContext.Provider>
    )
}


const useCartContext = () => useContext(CartContext)

export{useCartContext, CartContextProvider}