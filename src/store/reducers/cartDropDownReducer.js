import { TOGGLE_DROP_DOWN } from '../constants/CartDropDownConstants';

const INITIAL_STATE = {
  cartDropDown: false,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DROP_DOWN:
      return {
        ...state,
        cartDropDown: !state.cartDropDown,
      };
    default:
      return state;
  }
};
export default counterReducer;
