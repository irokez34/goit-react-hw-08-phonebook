export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload?.message;
};
export const handleFulfilled = state => {
  state.isLoading = false;
};
