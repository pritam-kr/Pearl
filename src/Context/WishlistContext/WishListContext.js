import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { ADD_TO_WISHLIST } from "../Action/actions";
import { useAuthContext } from "../index";
import { wishListReducer } from "./WishListReducer";

const WishListContext = createContext(null);

const initialState = {
    wishlist: [],
};

const WishListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wishListReducer, initialState);

    const {user} = useAuthContext()


    //local storage token
    const {token} = useAuthContext();

    const addToWishlist = (product) => {

        if (state.wishlist.find((eachProduct) => eachProduct._id === product._id)) {
            return;
        } else {
            (async () => {
                try {
                    const {
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


                    dispatch({
                        type: ADD_TO_WISHLIST,
                        payload: wishlist,
                    });
                } catch (error) {
                    console.log("error from catch", error);
                }
            })();
        }
    };

    const removeFromWishlist = (product) => {

        (async () => {
            try {

                const { data: {wishlist} } = await axios.delete(`/api/user/wishlist/${product._id}`, {
                    headers: {
                        authorization: token,
                    }
                })

                dispatch({
                    type: ADD_TO_WISHLIST,
                    payload: wishlist,
                });
                

            } catch (error) {
                console.log(error)
            }
        })()
    }

    return (
        <WishListContext.Provider value={{ state, addToWishlist, removeFromWishlist, }}>
            {children}
        </WishListContext.Provider>
    );
};

const useWishListContext = () => useContext(WishListContext);

export { useWishListContext, WishListContextProvider };
 