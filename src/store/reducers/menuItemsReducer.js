import menuItemsData from '../data/menu-items-data';
const INITIAL_STATE = {
  sections: menuItemsData,
};

const menuItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default menuItemReducer;
