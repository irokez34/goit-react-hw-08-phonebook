import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './Slice/ContactsSlice';
import { filterReducer } from './Slice/FilterSlice';
import { rootReducer } from './Slice/rootSlice';

const reducer = {
  contacts: phoneBookReducer,
  filter: filterReducer,
  root: rootReducer,
  // user: userReducer,
};

export const store = configureStore({ reducer: reducer });
