export const handleSignUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handleLogIn = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handleLogOut = (state, { payload }) => {
  state.token = payload.token;
  state.profile = null;
};

export const handleIsUser = (state, { payload }) => {
  console.log(state);
  state.profile = payload;
};
