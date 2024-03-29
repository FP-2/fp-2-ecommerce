// productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../api/Api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const checkoutItems = JSON.parse(localStorage.getItem("checkoutItems")) || [];
const dataProduct = JSON.parse(localStorage.getItem("productData")) || [];
const navigate = useNavigate;
const today = new Date();
const dayOfWeek = today.getDay();
const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const dayOfMonth = today.getDate();
const month = today.getMonth() + 1; // Perlu ditambah 1 karena indeks bulan dimulai dari 0
const year = today.getFullYear();

const now = `${daysOfWeek[dayOfWeek]}, ${dayOfMonth} ${bulanIndonesia(month)} ${year}`;
function bulanIndonesia(monthIndex) {
  const namaBulan = [
      "Januari", "Februari", "Maret", "April",
      "Mei", "Juni", "Juli", "Agustus",
      "September", "Oktober", "November", "Desember"
  ];
  return namaBulan[monthIndex - 1];
}
const initialState = {
  productData: [],
<<<<<<< HEAD
  cart: [],
  userInfo: null,
  loading: false,
  error: null,
  count: 0,
=======
  total : 0,
  quantity:10,
  checkout:checkoutItems,
  items: savedCartItems,
  userInfo: null,
  loading: false,
  error: null,
  user :null,
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
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
<<<<<<< HEAD
    setBadges: (state) => {
      state.count = JSON.parse(localStorage.getItem('cartcart'))?.length || 0;
    },
=======
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchQuantity : (state,action)=>{
      state.quantity = action.payload;
    },
    resetQuantity: (state,action) => {
      console.log(action.payload)
      dataProduct.map((item)=>{
        if(item._id === action.payload._id){
          item.quantity =10
          Swal.fire({
            title: "Sukses reset",
            icon: "success"
          }).then((result) => {
            if(result.isConfirmed) {
              navigate("/shop");
              window.location.reload()
            }
          });
        }
      })
      localStorage.setItem("productData", JSON.stringify(dataProduct));
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
      console.log(state.checkout);
      const info = {
        username : state.user || 'unknown',
        date : now,
        total : state.total
      };
      const Checkout = state.checkout.map(item => ({ ...item, ...info }));
      if(checkoutItems.length > 0){
        const updateCheckout = checkoutItems.concat(Checkout);
        localStorage.setItem("checkoutItems", JSON.stringify(updateCheckout));
      }else{
        localStorage.setItem("checkoutItems", JSON.stringify(Checkout));
      }
      console.log("anda berhasil checkout ",JSON.parse(localStorage.getItem('checkoutItems')));
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
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
<<<<<<< HEAD
      state.cart.push(action.payload); 
      localStorage.setItem('cartcart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload._id); 
      localStorage.setItem('cartcart', JSON.stringify(state.cart));
=======
      const item = state.items.find((item) => item._id === action.payload._id);
      const existingItem = state.items.find((item) => item._id === action.payload._id);
      if (existingItem) {
        Swal.fire({
          title: "Item sudah ada dalam keranjang",
          icon: "warning"
        });
        return state;
      }else{
        dataProduct.map((items)=>{
        if(action.payload._id === items._id){
          items.quantity--;
          console.log('kuantitasnya ',items.quantity)
          // state.productData = items;
        }
        return items;
        })
        localStorage.setItem("productData", JSON.stringify(dataProduct));
        if (item) {
          item.quantity = action.payload.quantity;
          console.log('ini kuantitasnya ',item.quantity);
        } else {
          state.items.unshift(action.payload);
        }
        localStorage.setItem("cartItems", JSON.stringify(state.items));
        Swal.fire({
          title: "Berhasil menambahkan kedalam keranjang",
          icon: "success"
        }).then((result) => {
          if (result.isConfirmed){
            window.location.reload()
          }
        })
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
      console.log(action.payload)
      const indexToChange = dataProduct.findIndex((product) => product._id === action.payload._id);
      if (indexToChange !== -1) {
        dataProduct[indexToChange].quantity = dataProduct[indexToChange].quantity + action.payload.quantity;
        state.productData = dataProduct;
      }
      console.log(dataProduct[indexToChange])
      localStorage.setItem("productData", JSON.stringify(dataProduct));
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    resetCart: (state) => {
      state.items.forEach((item) => {
        console.log(item.quantity)
        const indexToChange = dataProduct.findIndex((product) => product._id === item._id);
        
        if (indexToChange !== -1) {
          dataProduct[indexToChange].quantity = dataProduct[indexToChange].quantity + item.quantity;
          state.productData = dataProduct;
        }
        console.log(dataProduct[indexToChange])
      });
      // Set items di state menjadi array kosong
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("productData", JSON.stringify(state.productData));
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
        if(item.quantity === 1){
          dataProduct[indexToChange].quantity = dataProduct[indexToChange].quantity - item.quantity;
        }else{
          dataProduct[indexToChange].quantity--;
        }
      }
      console.log(dataProduct[indexToChange].quantity)
      localStorage.setItem("productData", JSON.stringify(dataProduct));
      console.log('sisa stok = ',(dataProduct[indexToChange].quantity));
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
      console.log('sisa stok = ',(dataProduct[indexToChange].quantity))
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
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
