import { restApi } from "../../apis/calls";
export const SET_ALL_ACTORS = "setAllActors";
export const FILTER_ACTORS = "filterActors";
export const RESET_FILTERED_ACTORS = "resetFilteredActors";

//get actors from backend
export const getAllActors = async (dispatch) => {
  const response = await restApi.get("/actor");
  dispatch({
    type: SET_ALL_ACTORS,
    payload: response.data,
  });
};

export const filterActors = (searchString) => ({
  type: FILTER_ACTORS,
  payload: searchString,
});
