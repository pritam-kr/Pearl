import {
  GET_CART_FROM_DATABASE,
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_PRODUCT,
  SET_LOADER,
} from "../Action/actions";

export const cartReducer = (state, action) => {
  switch (action.type) {

    case "SET_LOADING": 
    return {...state, loader: action.payload}

    case GET_CART_FROM_DATABASE:
      return {
        ...state,
        cart: action.payload,
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
        ...state,
        loader: action.payload,
      };

      //Empty cart after payment done
      case "EMPTY_CART": 
      return {...state, cart: action.payload}
      
      case "GET_ORDER_DETAILS":
        return {...state, orderDetails: action.payload}

    default:
      return state;
  }
};
