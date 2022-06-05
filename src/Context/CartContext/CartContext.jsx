import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";
import { useAuthContext } from "../../Context/index";
import { useEffect, useState } from "react";
import {toast} from "react-hot-toast"

const CartContext = createContext();

const initialState = {
  cart: [],
  loader: false, 
  error: null,
  coupon: [20, 30, 50, 60],
  orderDetails: ""
};

 


const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { cart,} = state;
  const { token, user } = useAuthContext();

 
  
  // Getting data from cart and dispatching to initial state
  useEffect(() => {
     if(token){
      (async () => {
        try {
          const {
            data: { cart },
          } = await axios.get("api/user/cart", {
            headers: {
              authorization: token,
            },
          });

          dispatch({ type: "GET_CART_FROM_DATABASE", payload: cart });
        } catch (error) {
          console.log(error);
        }
      })();
     }
  }, []);

  // Now do post request with for a single project with the help of token
  const addToCart = (product) => {
    
    if (cart.find((eachProduct) => eachProduct._id === product._id)) {
      return;
    } else {
      (async () => {
        try {
          const {
            status,
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

          // show ing toast on add to cart
            status === 201 ? toast.success("Product Added to Cart") : null

          dispatch({
            type: "ADD_TO_CART",
            payload: cart,
            productId: product._id,
            loading: true
          });
        } catch (error) {
           console.log(error)
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
         console.log(error)
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
       console.log(error)
    }
  };

  // Delete From Cart
  const deleteCartItem = async (product) => {
    const productId = product._id;

    try {
      const {
        status,
        data: { cart },
      } = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: token,
        },
      });

      // showing toast on deleting product from cart
       status === 200 ? toast.success("Product Delete from cart") : null

      dispatch({ type: "DELETE_PRODUCT", payload: cart });
    } catch (error) {
       console.log(error)

    }
  };

  return (
    <>
  
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
    </CartContext.Provider> </> 
  );
 
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartContextProvider };
