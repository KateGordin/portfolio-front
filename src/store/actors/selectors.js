export const selectActors = (state) => {
  // console.log("state", state);
  return state.actor.filteredActors;
};
