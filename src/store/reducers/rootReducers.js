import { combineReducers } from 'redux';

import googleAuthReducer from '../reducers/googleAuthReducer';
import counterReducer from '../reducers/cartDropDownReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// WHITELIST
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'], // only navigation will be persisted
};

const rootReducer = combineReducers({
  user: googleAuthReducer,
  cart: counterReducer,
});

export default persistReducer(persistConfig, rootReducer);
