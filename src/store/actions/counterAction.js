import { REMOVE_NUMBER, ADD_NUMBER } from '../constants/counterConstants';

export const increaseCounter = (amount) => {
  return {
    type: ADD_NUMBER,
    payload: amount,
  };
};

export const decreaseCounter = () => {
  return {
    type: REMOVE_NUMBER,
  };
};
