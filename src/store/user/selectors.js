export const selectUser = (state) => state.user;

export const selectToken = (state) => {
  //   console.log("state with token", state);
  return state.user.token;
};
