import shopData from '../data/shop-data';
const INITIAL_STATE = {
  sections: shopData,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopDataReducer;
