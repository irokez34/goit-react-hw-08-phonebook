export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};
export const handleFulfilled = state => {
  state.isLoading = false;
};
