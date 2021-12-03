import shopData from '../data/shop-data';
import shopActionTypes from '../constants/shopConstants';

const INITIAL_STATE = {
  collections: shopData,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
export default shopDataReducer;
