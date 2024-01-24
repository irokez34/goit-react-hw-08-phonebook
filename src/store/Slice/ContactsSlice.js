import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'store/thunk/thunk';

const initialState = {
  phoneBook: {
    items: [],
  },
};
const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.phoneBook.items = payload;
      })
      .addCase(addNewContactThunk.fulfilled, (state, { payload }) => {
        state.phoneBook.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.phoneBook.items = state.phoneBook.items.filter(
          el => el.id !== payload.id
        );
      });
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
