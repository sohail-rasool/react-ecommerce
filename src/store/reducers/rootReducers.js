import { combineReducers } from 'redux';

import googleAuthReducer from '../reducers/googleAuthReducer';
import counterReducer from '../reducers/cartDropDownReducer';

const rootReducer = combineReducers({
  googleUser: googleAuthReducer,
  showCartDropDown: counterReducer,
});

export default rootReducer;
