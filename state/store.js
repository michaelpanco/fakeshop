import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import reviewReducer from "./review/reviewSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productReducer,
      review: reviewReducer,
    },
  });
};
