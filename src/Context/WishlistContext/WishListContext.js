import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { ADD_TO_WISHLIST } from "../Action/actions";
import { useAuthContext } from "../index";
import { wishListReducer } from "./WishListReducer";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const WishListContext = createContext(null);

const initialState = {
  wishlist: [],
  loading: false,
};

const WishListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, initialState);

  //local storage token
  const { token } = useAuthContext();

  //getting cart items from backend as a initial data

  useEffect(() => {
    (async () => {
      try {
        const {
          status,
          data: { wishlist },
        } = await axios.get(`/api/user/wishlist/`, {
          headers: {
            authorization: token,
          },
        });

        if (status === 200) {
          dispatch({
            type: "GET_WISHLIST_DATA",
            payload: wishlist,
          });
        }
      } catch (error) {}
    })();
  }, []);

  const addToWishlist = (product) => {
    if (state.wishlist.find((eachProduct) => eachProduct._id === product._id)) {
      return;
    } else {
      (async () => {
        try {
          dispatch({ type: "SET_LOADING", payload: true });

          const {
            status,
            data: { wishlist },
          } = await axios.post(
            "/api/user/wishlist",
            { product },
            {
              headers: {
                authorization: token,
              },
            }
          );

          if (status === 201) {
            dispatch({ type: "SET_LOADING", payload: false });
            toast.success("Added to wishlist");

            dispatch({
              type: ADD_TO_WISHLIST,
              payload: wishlist,
            });
          }
        } catch (error) {
          dispatch({ type: "SET_LOADING", payload: false });
        }
      })();
    }
  };

  const removeFromWishlist = (product) => {
    (async () => {
      try {
        const {
          status,
          data: { wishlist },
        } = await axios.delete(`/api/user/wishlist/${product._id}`, {
          headers: {
            authorization: token,
          },
        });

        {
          status === 200 && toast.success("Removed from wishlist");
        }

        dispatch({
          type: ADD_TO_WISHLIST,
          payload: wishlist,
        });
      } catch (error) {}
    })();
  };

  return (
    <WishListContext.Provider
      value={{ state, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishListContext = () => useContext(WishListContext);

export { useWishListContext, WishListContextProvider };
