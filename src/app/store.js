import { configureStore } from "@reduxjs/toolkit";
import { youtubeApi } from "../utils/youtubeapi";

export default configureStore({
  reducer: {
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([youtubeApi.middleware]),
});
