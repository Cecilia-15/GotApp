import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import favouriteSlice from "./auth/favouriteSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    favourite: favouriteSlice,
  },
});
