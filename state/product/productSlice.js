import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import PostDataModel from "@/models/postData";

const initialState = {
  products: [],
  lists: [],
  filteredLists: [],
  status: "PENDING",
  filteredCategories: [],
  minPrice: 0,
  maxPrice: 999,
};

const normalizeCategoryName = (category) => {
  switch (category) {
    case "electronics":
      return "electronics";
    case "jewelery":
      return "jewelry";
    case "men's clothing":
      return "mens-clothing";
    case "women's clothing":
      return "womens-clothing";
  }
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      if (action.payload.categories) {
        state.filteredCategories = action.payload.categories;
      }

      const currentState = current(state);

      const filteredProducts = currentState.products.filter((product) => {
        const filterCategory = action.payload.categories.includes(
          normalizeCategoryName(product.category)
        );

        const filterPricing =
          currentState?.minPrice < product.price &&
          currentState?.maxPrice > product.price;

        return filterCategory && filterPricing && product;
      });

      if (action?.payload?.categories?.length > 0) {
        state.lists = filteredProducts;
      } else {
        state.lists = currentState.products;
      }
    },
    filterProductsPricing: (state, action) => {
      const currentState = current(state);

      const filteredProducts = currentState.products.filter((product) => {
        state.minPrice = action.payload.minPrice;
        state.maxPrice = action.payload.maxPrice;

        const filterPricing =
          action?.payload?.minPrice < product.price &&
          action?.payload?.maxPrice > product.price;

        const filterCategory = currentState.filteredCategories.length
          ? currentState.filteredCategories.includes(
              normalizeCategoryName(product.category)
            )
          : true;

        return filterPricing && filterCategory && product;
      });

      state.lists = filteredProducts;
    },
    updateStatus: (state) => {
      state.status = "COMPLETED";
    },
    populateProducts: (state, action) => {
      const products = action.payload.map(PostDataModel.fromDto);
      state.lists = products;
      state.products = products;
      state.status = "COMPLETED";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.status = "PENDING";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        const currentState = current(state);
        state.status = "COMPLETED";
        const products = action.payload.map(PostDataModel.fromDto);

        const filteredProducts = products.filter((product) => {
          const filterCategory =
            currentState.filteredCategories.length > 0
              ? currentState.filteredCategories.includes(
                  normalizeCategoryName(product.category)
                )
              : true;

          const filterPricing =
            currentState?.minPrice < product.price &&
            currentState?.maxPrice > product.price;

          return filterCategory && filterPricing && product;
        });

        state.lists = filteredProducts;
        state.products = products;
      });
  },
});

export const searchProducts = createAsyncThunk(
  "product/searchProducts",
  async (keyword) => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/search?q=${keyword}`
    );
    const response = await data.json();
    return response.details;
  }
);

export const {
  filterProducts,
  updateStatus,
  populateProducts,
  filterProductsPricing,
} = productSlice.actions;

export default productSlice.reducer;
