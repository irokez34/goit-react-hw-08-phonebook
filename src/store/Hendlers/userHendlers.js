export const handleSignUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};

export const handleLogIn = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};

export const handleLogOut = (state, { payload }) => {
  state.token = payload.token;
  state.profile = { name: null, email: null };
  state.isLoggedIn = false;
};

export const handleRefreshUser = (state, action) => {
  state.profile = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
