import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './Slice/ContactsSlice';
import { filterReducer } from './Slice/FilterSlice';
import { rootReducer } from './Slice/rootSlice';
import { userReducer } from './Slice/UserSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, userReducer);
const reducer = {
  contacts: phoneBookReducer,
  filter: filterReducer,
  root: rootReducer,
  user: persistedReducer,
};

export const store = configureStore({ reducer });
export const persistor = persistStore(store);
