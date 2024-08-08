import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostDataModel from "@/models/postData";

const initialState = {
  lists: [],
  status: "PENDING",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state) => {},
    updateStatus: (state) => {
      state.status = "COMPLETED";
    },
    populateProducts: (state, action) => {
      const products = action.payload.map(PostDataModel.fromDto);
      state.lists = products;
      state.status = "COMPLETED";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, () => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.lists = action.payload;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
    );
    const response = await data.json();
    //console.log(response, "response");
    return response.details;
  }
);

export const { filterProducts, updateStatus, populateProducts } =
  productSlice.actions;

export default productSlice.reducer;
