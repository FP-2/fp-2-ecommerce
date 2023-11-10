import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../api/Api";

const initialState = {
  productData: [],
  items: [],
  userInfo: null,
  loading: false,
  error: null,
  count:0,
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
    setBadges : (state) =>{
      state.count = JSON.parse(localStorage.getItem('cartItems'))?.length || 0;
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
      state.items.push(action.payload); 
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    addToCheckout: (state) => {
      let idx = -1;
      state.cart.forEach((item) => {
        if (item.cartQuantity >= 1) {
          const isProductFound = state.checkout.some((data, dataIdx) => {
            if (data.id === item.id) {
              idx = dataIdx;
              return true;
            }
            return false;
          });

          if (isProductFound)
            state.checkout[idx].sold += parseInt(item.cartQuantity);
          else state.checkout.push({ ...item, sold: item.cartQuantity });

          state.products.forEach((product, productIdx) => {
            if (product.id === item.id)
              state.products[productIdx].quantity -= item.cartQuantity;
          });
        }
      });

      state.cart = [];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id); 
      localStorage.setItem('cartItems', JSON.stringify(state.items));
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
