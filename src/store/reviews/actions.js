import { restApi } from "../../apis/calls";
export const SHOW_ALL_REVIEWS = "showAllReviews";
export const UPDATE_REVIEW = "updateReview";

// see all reviews
export const getAllReviews = (review) => {
  return async function (dispatch) {
    const res = await restApi.get(`/review`, {
      review,
    });
    // console.log("res order", res);
    dispatch({
      type: SHOW_ALL_REVIEWS,
    });
  };
};

//update review for user
export const updateReview = (review) => async (dispatch, getState) => {
  const res = await restApi.patch(`/review`, {
    review,
  });
  console.log("res oooooordeeeerrrrrrr", res);
  dispatch({
    type: UPDATE_REVIEW,
  });
};
