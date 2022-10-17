import { createSlice } from "@reduxjs/toolkit";
import { useSetFavourite } from "../../firebase/config";

const initialState = [];

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    like: (state, { payload }) => {
      state.push(payload.data);
      useSetFavourite(payload.uid, state);
    },
    unlike: (state, { payload }) => {
      const newState = state.filter((card) => card.id !== payload.data.id);
      useSetFavourite(payload.uid, newState);
      return newState;
    },
    masiveUpdate: (state, { payload }) => {
      state.push(...payload);
    },
  },
});

export const { like, unlike, masiveUpdate } = favouriteSlice.actions;

export default favouriteSlice.reducer;
