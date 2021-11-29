import shopData from '../data/shop-data';
const INITIAL_STATE = {
  collesctions: shopData,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopDataReducer;
