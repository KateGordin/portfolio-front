export const APP_LOADING = "APP_LOADING";
export const APP_DONE_LOADING = "APP_DONE_LOADING";
export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const appLoading = () => ({ type: APP_LOADING });
export const appDoneLoading = () => ({ type: APP_DONE_LOADING });
export const clearMessage = () => ({ type: CLEAR_MESSAGE });

export const setMessage = (variant, dismissable, text) => {
  return {
    type: SET_MESSAGE,
    payload: {
      variant,
      dismissable,
      text,
    },
  };
};

export const showMessageWithTimeout = (
  variant,
  dismissable,
  text,
  timeOutMilliSeconds
) => {
  return (dispatch) => {
    dispatch(setMessage(variant, dismissable, text));

    const timeout = timeOutMilliSeconds || 3000;
    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};
