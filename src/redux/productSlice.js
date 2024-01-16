// productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../api/Api";

const initialState = {
  productData: [],
  cart: [],
  userInfo: null,
  loading: false,
  error: null,
  count: 0,
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
    setBadges: (state) => {
      state.count = JSON.parse(localStorage.getItem('cartcart'))?.length || 0;
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
      state.cart.push(action.payload); 
      localStorage.setItem('cartcart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload._id); 
      localStorage.setItem('cartcart', JSON.stringify(state.cart));
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
  setBadges,
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
