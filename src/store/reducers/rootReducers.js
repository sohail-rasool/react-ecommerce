import { combineReducers } from 'redux';

import googleAuthReducer from '../reducers/googleAuthReducer';

const rootReducer = combineReducers({
  googleUser: googleAuthReducer,
});

export default rootReducer;
