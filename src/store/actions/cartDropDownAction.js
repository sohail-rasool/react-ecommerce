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

export const removeItem = (item) => {
  return {
    type: cartActionType.REMOVE_ITEM,
    payload: item,
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: cartActionType.REMOVE_ITEM_FROM_CART,
    payload: id,
  };
};
