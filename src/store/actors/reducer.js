import { SET_ALL_ACTORS } from "./actions";
import { FILTER_ACTORS } from "./actions";
import { RESET_FILTERED_ACTORS } from "./actions";

const initialState = {
  actors: [],
  filteredActors: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_ACTORS:
      return {
        ...state,
        actors: action.payload,
        filteredActors: action.payload,
      };

    case FILTER_ACTORS: {
      const filteredActors = state.actors.filter((actor) => {
        return actor.name
          .toLowerCase()
          .includes(action.payload.toLowerCase().trim());
      });
      return {
        ...state,
        filteredActors,
      };
    }

    case RESET_FILTERED_ACTORS:
      return {
        ...state,
        filteredActors: state.actors,
      };

    default:
      return state;
  }
}
