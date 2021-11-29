import { combineReducers } from 'redux';

import googleAuthReducer from '../reducers/googleAuthReducer';
import cartReducer from '../reducers/cartReducer';
import menuItemReducer from '../reducers/menuItemsReducer';
import shopDataReducer from '../reducers/shopDataReducer';

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
  cart: cartReducer,
  menuItems: menuItemReducer,
  shopData: shopDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
