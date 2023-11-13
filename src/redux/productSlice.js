import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../api/Api";
import Swal from "sweetalert2";

const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const checkoutItems = JSON.parse(localStorage.getItem("checkoutItems")) || [];
const dataProduct = JSON.parse(localStorage.getItem("productData")) || [];
const today = new Date();
const day = today.getDay();
const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const now = daysOfWeek[day];
const initialState = {
  productData: [],
  total : 0,
  quantity:10,
  checkout:checkoutItems,
  items: savedCartItems,
  userInfo: null,
  loading: false,
  error: null,
  user :null,
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
    fetchQuantity : (state,action)=>{
      state.quantity = action.payload;
    },
    resetQuantity : (state)=>{
      state.quantity = 10;
      // const item = state.productData.find((product) => product._id);
      // console.log(item.quantity)
      // localStorage.setItem("productData", JSON.stringify(item));
    },
    fetchProductsSuccess: (state, action) => {
      state.productData = action.payload;
      state.loading = false;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchAdmin : (state,action)=>{
      state.checkout = action.payload;
      console.log(checkoutItems.length);
      const info = {
        username : state.user || 'unknown',
        date : now,
        total : state.total
      };
      const Checkout = state.checkout.map(item => ({ ...item, ...info }));
      if(checkoutItems.length > 0){
        console.log("1")
        const updateCheckout = checkoutItems.concat(Checkout);
        localStorage.setItem("checkoutItems", JSON.stringify(updateCheckout));
      }else{
        console.log("0")
        localStorage.setItem("checkoutItems", JSON.stringify(Checkout));
      }
      console.log("anda berhasil checkout ",JSON.parse(localStorage.getItem('checkoutItems')));
      state.checkout = checkoutItems;
    },
    fetchTotal : (state,action)=>{
      state.total = action.payload;
    },
    fetchUser : (state,action)=>{
      state.user = action.payload;
      console.log(state.user);
    },
    addToCart: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
        console.log('ini kuantitasnya ',item.quantity);
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
      console.log(item.quantity);
      const indexToChange = state.productData.findIndex((product) => product._id === item._id);
      console.log(dataProduct[indexToChange].quantity)
      if ((dataProduct[indexToChange].quantity) === 0) {
        Swal.fire({
          title: "Sold Out",
          icon: "error"
        })
      }else{
        item.quantity++;
        dataProduct[indexToChange].quantity--; 
      }
      localStorage.setItem("productData", JSON.stringify(dataProduct));
      console.log('sisa stok = ',(dataProduct[indexToChange].quantity))
      localStorage.setItem("cartItems", JSON.stringify(dataProduct));
    },
    returnQuantity : (state)=>{
      savedCartItems.map((item)=>{
        const indexToChange = state.items.findIndex((product) => product._id === item._id);
        console.log('data yang dikembalikan', dataProduct[indexToChange].title, 'sebesar ',dataProduct[indexToChange].quantity)
        localStorage.setItem("productData", JSON.stringify(dataProduct));
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      })
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      const indexToChange = state.productData.findIndex((product) => product._id === item._id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        dataProduct[indexToChange].quantity++; 
      }
      localStorage.setItem("productData", JSON.stringify(dataProduct));
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      console.log('sisa stok = ',(dataProduct[indexToChange].quantity)-1)
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
  fetchAdmin,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  fetchUser,
  fetchTotal,
  resetQuantity,
  returnQuantity,
} = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    let productData = JSON.parse(localStorage.getItem("productData")) || [];
    if (productData.length === 0) {
      const response = await productsData();
      productData = response.data.map((product) => ({
        ...product,
        quantity: 10,
      }));
      localStorage.setItem("productData", JSON.stringify(productData));
    }
    dispatch(fetchProductsSuccess(productData));
    localStorage.setItem("productData", JSON.stringify(productData));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
