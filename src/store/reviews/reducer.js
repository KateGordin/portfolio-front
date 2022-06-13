import { SHOW_ALL_REVIEWS } from "./actions";
import { UPDATE_REVIEW } from "./actions";

const initialState = {
  reviews: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL_REVIEWS:
      return {
        ...state,
        reviews: [],
      };

    case UPDATE_REVIEW:
      return {
        ...state,
        reviews: [],
      };

    default:
      return state;
  }
}
