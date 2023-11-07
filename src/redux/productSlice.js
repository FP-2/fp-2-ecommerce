import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../api/Api";

const initialState = {
  productData: [],
  items: [],
  userInfo: null,
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.productData = action.payload;
      state.loading = false;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload); // Menambahkan produk ke keranjang
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Menghapus produk dari keranjang
    },
  },
});

export const {
  setProductData,
  setUserInfo,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addToCart,
  removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    const response = await productsData();
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
