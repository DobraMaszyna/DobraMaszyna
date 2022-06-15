import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import cart from './cart';
import menu from './menu';
import recentlyViewed from './recentlyViewed';
import productFilter from './productFilter';

const reducers = combineReducers({
  cart,
  menu,
  productFilter,
  recentlyViewed,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['searchQuery'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
