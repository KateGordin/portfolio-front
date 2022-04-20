const initialState = {
  actors: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "setAllActors":
      return { ...state, actors: action.payload };

    default:
      return state;
  }
}
