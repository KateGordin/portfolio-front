import { configureStore } from "@reduxjs/toolkit";
import user from "./user/reducer";
import actor from "./actors/reducer";

export default configureStore({
  reducer: {
    user,
    actor,
  },
});
