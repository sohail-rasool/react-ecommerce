import { GET_USER_INFO } from '../constants/googleAuthConstants';
const INITIAL_STATE = {
  currentUser: null,
};
const googleAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default googleAuthReducer;
