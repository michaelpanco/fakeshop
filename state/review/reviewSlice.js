import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  addNew: false,
};

const reviewSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createReview: (state) => {
      state.addNew = true;
    },
  },
});

export const { filterProducts } = reviewSlice.actions;

export default reviewSlice.reducer;
