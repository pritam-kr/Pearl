import {
  GET_CART_FROM_DATABASE,
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_PRODUCT,
  SET_LOADER
} from "../Action/actions";


export const cartReducer = (state, action) => {
  switch (action.type) {
    case GET_CART_FROM_DATABASE:
      return {
        ...state, cart: action.payload
      };

    case ADD_TO_CART:

    console.log(action.loading)

      return {
        ...state,
        cart: action.payload,
        loader: action.loading
      };

    case INCREMENT_QUANTITY:
       
      return {
        ...state,
        cart: action.payload,
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: action.payload,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        cart: action.payload,
      };

    case SET_LOADER:
      return {
        ...state, loader: action.payload
      }

      default:
        return state;
  }
};