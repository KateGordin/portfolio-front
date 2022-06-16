import { restApi } from "../../apis/calls";
export const SHOW_ALL_REVIEWS = "showAllReviews";
export const UPDATE_REVIEW = "updateReview";

export const getAllReviews = (review) => {
  return async function (dispatch) {
    const res = await restApi.get(`/review`, {
      review,
    });
    dispatch({
      type: SHOW_ALL_REVIEWS,
    });
  };
};

export const updateReview = (review) => async (dispatch, getState) => {
  const res = await restApi.patch(`/review`, {
    review,
  });
  dispatch({
    type: UPDATE_REVIEW,
    payload: review,
  });
};
