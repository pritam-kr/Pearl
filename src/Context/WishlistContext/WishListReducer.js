import {ADD_TO_WISHLIST} from "../Action/actions"
export const wishListReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_WISHLIST:
        return {
          ...state,
          wishlist: action.payload,
        };
      case "GET_WISHLIST_DATA":
        return {
          ...state,
          wishlist: action.payload,
        };
      default:
      return state
    }
  };