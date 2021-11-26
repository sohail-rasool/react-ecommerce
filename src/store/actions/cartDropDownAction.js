import { cartActionType } from '../constants/CartDropDownConstants';

export const toggleDropDownAction = () => {
  return {
    type: cartActionType.TOGGLE_DROP_DOWN,
  };
};

export const addItem = (item) => {
  return {
    type: cartActionType.ADD_ITEM,
    payload: item,
  };
};
