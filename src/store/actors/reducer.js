import { SET_ALL_ACTORS } from "./actions";

const initialState = {
  actors: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_ACTORS:
      return { ...state, actors: action.payload };

    default:
      return state;
  }
}
