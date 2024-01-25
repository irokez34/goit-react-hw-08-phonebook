const { createSlice } = require('@reduxjs/toolkit');
const { LogInThunk, SignUpThunk, LogOutThunk } = require('store/thunk/thunk');

const initialState = {
  user: {
    token: '',
  },
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(LogInThunk.fulfilled, (state, { payload }) => {
        state.user.token = payload;
      })
      .addCase(SignUpThunk.fulfilled, (state, { payload }) => {
        state.user.token.push(payload);
      })
      .addCase(LogOutThunk.fulfilled, (state, { payload }) => {
        state.phoneBook.items = state.phoneBook.items.filter(
          el => el.id !== payload.id
        );
      });
  },
});
