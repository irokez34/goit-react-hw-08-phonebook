import { createSlice } from '@reduxjs/toolkit';
const {
  LogInThunk,
  SignUpThunk,
  LogOutThunk,

  RefreshUserThunk,
} = require('store/thunk/thunk');
const {
  handleSignUp,
  handleLogIn,
  handleLogOut,
  handleRefreshUser,
} = require('store/Hendlers/userHendlers');

const initialState = {
  token: null,
  profile: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(LogInThunk.fulfilled, handleLogIn)

      .addCase(SignUpThunk.fulfilled, handleSignUp)

      .addCase(LogOutThunk.fulfilled, handleLogOut)
      .addCase(RefreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(RefreshUserThunk.fulfilled, handleRefreshUser)

      .addCase(RefreshUserThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const userReducer = UserSlice.reducer;
