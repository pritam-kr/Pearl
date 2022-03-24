import {
  GET_CART_FROM_LOCAL_STORAGE,
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_PRODUCT,
  SET_LOADER
} from "../Action/actions";


export const cartReducer = (state, action) => {
  switch (action.type) {
    case GET_CART_FROM_LOCAL_STORAGE:
      return {
        ...state, cart: action.payload
      };

    case ADD_TO_CART:

      return {
        ...state,
        cart: action.payload,

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