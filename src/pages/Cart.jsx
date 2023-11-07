// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/productSlice";
import ProductsCard from "../components/ProductsCard";
import { motion } from "framer-motion";
import { viewportSlideRight } from "../framerMotion";

function Cart() {
  const cartItems = useSelector((state) => state.product.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <motion.div {...viewportSlideRight}>
          <h2 className="text-2xl bg-black text-white py-2 w-80 text-center">
            Keranjang Belanja
          </h2>
        </motion.div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
      {cartItems.map((item) => (
        <div key={item.id}>
          <ProductsCard key={item._id} product={item} />
          <button onClick={() => handleRemoveFromCart(item)}>Hapus dari Keranjang</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Cart;
