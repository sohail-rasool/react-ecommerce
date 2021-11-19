import { REMOVE_NUMBER, ADD_NUMBER } from '../constants/counterConstants';

const INITIAL_STATE = {
  count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case REMOVE_NUMBER:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
