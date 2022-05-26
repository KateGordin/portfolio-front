import { restApi } from "../../apis/calls";

//get actors from backend
export const getAllActors = async (dispatch) => {
  const response = await restApi.get("/actor");
  dispatch({
    type: "setAllActors",
    payload: response.data,
  });
};
