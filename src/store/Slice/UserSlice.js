const {
  LogInThunk,
  SignUpThunk,
  LogOutThunk,

  RefreshUserThunk,
} = require('store/thunk/thunk');
import { createSlice } from '@reduxjs/toolkit';
const {
  handleSignUp,
  handleLogIn,
  handleLogOut,
  handleIsUser,
} = require('store/Hendlers/userHendlers');

const initialState = {
  token: '',
  profile: null,
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(LogInThunk.fulfilled, handleLogIn)
      .addCase(SignUpThunk.fulfilled, handleSignUp)
      .addCase(LogOutThunk.fulfilled, handleLogOut)
      .addCase(RefreshUserThunk.fulfilled, handleIsUser);
  },
});

export const userReducer = UserSlice.reducer;
