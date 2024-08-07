import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  status: "PENDING",
};

const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    filterProducts: (state) => {},
    updateStatus: (state) => {
      state.status = "COMPLETED";
    },
  },
});

export const { filterProducts, updateStatus } = productSlice.actions;

export default productSlice.reducer;
