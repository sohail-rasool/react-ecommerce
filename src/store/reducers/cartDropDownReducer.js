import { cartActionType } from "../constants/CartDropDownConstants";
import { addCartItems, removeCartItem } from "../utils/cart";

const INITIAL_STATE = {
  cartDropDown: false,
  cartItems: [],
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_DROP_DOWN:
      return {
        ...state,
        cartDropDown: !state.cartDropDown,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItems(state.cartItems, action.payload),
      };
    case cartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    case cartActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default counterReducer;
