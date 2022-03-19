import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useState, useEffect } from "react";
import { TOTAL_CART_ITEMS } from "../Action/actions";

const CartContext = createContext();

const initialState = {
    cart: [],
    totalPrice: null,
    deliveryCharge: null,
    totalCartItems: 0,
    discount: null,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload,
                totalCartItems: action.totalItems
            };

        // case TOTAL_CART_ITEMS:
        
        // return{...state, totalCartItems: action.payload}

        default:
            return state;
    }
};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const { cart, totalCartItems } = state;

     
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
                        totalItems: cart.length
                    });

                    // dispatch({type: TOTAL_CART_ITEMS, payload: cart.length})
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
