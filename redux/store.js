import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import cart from './cart';
import searchQuery from './searchQuery';
import menu from './menu';

const reducers = combineReducers({
  cart,
  searchQuery,
  menu,
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
