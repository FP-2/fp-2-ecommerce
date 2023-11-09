// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/productSlice";
import ProductsCard from "../components/ProductsCard";
import { motion } from "framer-motion";
import { viewportSlideRight } from "../framerMotion";
import { useEffect } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.product.items);
  //Pemanggilan state cart untuk menampilkan data yang dimasukkan kedalam cart
  
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Ambil data dari local storage

    if (cartItems.length === 0 && storedCartItems.length > 0) {
      // Jika Redux store kosong dan local storage memiliki data, isi Redux store dengan data dari local storage
      storedCartItems.forEach((item) => {
        dispatch(addToCart(item));
      });
    }
  }, [dispatch, cartItems]);
  
  //fungsi untuk menghapus
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  
  return (
    <div>
      <div className="text-center flex justify-center mt-5">        
      <motion.div {...viewportSlideRight}>
          <h2 className="text-2xl bg-black text-white py-2 w-80 text-center">
            Keranjang Belanja
          </h2>
        </motion.div>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
      {cartItems.map((item) => (
        <div key={item._id}>
          <ProductsCard product={item} />
          <button onClick={() => handleRemoveFromCart(item)}>Hapus dari Keranjang</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Cart;
