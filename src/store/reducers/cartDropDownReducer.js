import { cartActionType } from '../constants/CartDropDownConstants';
import addCartItems from '../utils/addCartItems';

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
    default:
      return state;
  }
};
export default counterReducer;
