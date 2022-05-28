import { restApi } from "../../apis/calls";
export const SET_ALL_ACTORS = "setAllActors";

//get actors from backend
export const getAllActors = async (dispatch) => {
  const response = await restApi.get("/actor");
  dispatch({
    type: SET_ALL_ACTORS,
    payload: response.data,
  });
};
