import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";
import { useAuthContext } from "../../Context/index";
import { useEffect } from "react";

const CartContext = createContext();

const initialState = {
    cart: [],
    totalPrice: null,
    deliveryCharge: null,
    totalCartItems: 0,
    discount: null,
};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const { cart } = state;
    const { token, user } = useAuthContext();

    //Getting cart from local storage, which will be run in initial state
    const initialCart = user.cart;

    // Getting data from cart and dispatching to initial state
    useEffect(() => {
        dispatch({ type: "GET_CART_FROM_LOCAL_STORAGE", payload: initialCart });
    }, [token, user]);

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
                        totalItems: cart !== null && cart.length,
                    });
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    };

    // Decrement Cart quantity
    const decrementQuantity = async (product, type) => {
        const productId = product._id;

        if (product.qty === 1) {
            return;
        } else {
            try {
                const {
                    data: { cart },
                } = await axios.post(
                    `/api/user/cart/${productId}`,
                    {
                        action: {
                            type: type,
                        },
                    },
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );

                dispatch({ type: "DECREMENT_QUANTITY", payload: cart });
            } catch (error) {
                console.log("Error from Increment", error);
            }
        }
    };

    //Increment cart quantity
    const incrementQuantity = async (product, type) => {
        const productId = product._id;

        try {
            const {
                data: { cart },
            } = await axios.post(
                `/api/user/cart/${productId}`,
                {
                    action: {
                        type: type,
                    },
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );

            dispatch({ type: "INCREMENT_QUANTITY", payload: cart });
        } catch (error) {
            console.log("Error from Increment", error);
        }
    };

    // Delete From Cart
    const deleteCartItem = async (product) => {
        const productId = product._id;

        try {
            const {
                data: { cart },
            } = await axios.delete(`/api/user/cart/${productId}`, {
                headers: {
                    authorization: token,
                },
            });

            dispatch({ type: "DELETE_PRODUCT", payload: cart });
        } catch (error) {
            console.log("Error from delete", error);
        }
    };

    return (
        <CartContext.Provider
            value={{
                state,
                dispatch,
                addToCart,
                incrementQuantity,
                decrementQuantity,
                deleteCartItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };
