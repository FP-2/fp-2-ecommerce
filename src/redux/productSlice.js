import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../api/Api";

const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const initialState = {
  productData: [],
  items: savedCartItems,
  userInfo: null,
  loading: false,
  error: null,
  // count: 0,
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
    // setBadges: (state) => {
    //   state.count = JSON.parse(localStorage.getItem("cartItems"))?.length || 0;
    // },
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
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.items.unshift(action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    resetCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
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
  // setBadges,
  resetCart,
  incrementQuantity,
  decrementQuantity,
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
