// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, setBadges } from "../redux/productSlice";
import ProductsCard from "../components/ProductsCard";
import { motion } from "framer-motion";
import { viewportSlideRight } from "../framerMotion";
import { useEffect } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.product.items);
  const quantityItems = useSelector((state) => state.product.quantity);
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
    dispatch(setBadges());
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
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-2 gap-10">
      {cartItems.map((item) => (
        <div key={item._id} className="flex flex-row">
          <ProductsCard product={item} />
            <div className="ml-5 flex flex-col justify-center">
              <div>Quantity : {quantityItems}</div>
              <div>Total : ${item.price*quantityItems}</div>
            </div>
          <div className="flex mb-10 flex-col items-center justify-end">
            <button onClick={() => handleRemoveFromCart(item)} className="text-red-600">Hapus dari Keranjang</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Cart;
