import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";

const CartContext = createContext();

const initialState = {
    cart: [],
    totalPrice: null,
    deliveryCharge: null,
    totalCartItems: null,
    discount: null,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload,
            };

        default:
            return state;
    }
};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const { cart } = state;

//   const priceSum = (sum, currentValue) => sum - currentValue.price;

//   console.log(cart.reduce(priceSum, 0))
   

    // I'm doing that to take object data from add to cart button
    const token = localStorage.getItem("login-Token");

    // Now do post request with for a single project with the help of token

    const addToCart = (product) => {
        if (cart.find((eachProduct) => eachProduct._id === product._id)) {
            return;
        } else {
            (async () => {
                try {
                    const {
                        data: { cart },
                    } = await axios.post(
                        "/api/user/cart",
                        { product },
                        {
                            headers: {
                                authorization: token,
                            },
                        }
                    );

                    dispatch({
                        type: "ADD_TO_CART",
                        payload: cart,
                        productId: product._id,
                    });
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    };

    return (
        <CartContext.Provider value={{ state, dispatch, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };
