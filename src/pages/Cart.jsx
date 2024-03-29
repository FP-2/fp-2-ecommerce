<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/productSlice";
import ProductsCard from "../components/ProductsCard";
import { motion } from "framer-motion";
import { viewportSlideRight } from "../framerMotion";

function Cart() {
  const cartcart = useSelector((state) => state.product.cart);
=======
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItems";
import { motion } from "framer-motion";
import { scaleDown, slideLeft } from "../framerMotion";
import { fetchAdmin, fetchTotal, fetchUser } from "../redux/productSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Cart = () => {
  const item = useSelector((state) => state.product.items);
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState("");
  const isLoggedIn = localStorage.getItem("auth") !== null;
  const user = JSON.parse(localStorage.getItem("auth")) || [];
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
  const dispatch = useDispatch();
  item.map((items)=>{
    console.log(items.quantity)
  })
  console.log(user.usernameUser)
  const handleCheckout = () => {
    item.map((items)=>{
      if(items.quantity === 0){
        console.log('jumlahnya ',items.quantity)
        Swal.fire({
          title: "Masukkan Jumlah",
          icon: "error"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/shop");
          }
        });
      }else{
        dispatch(fetchUser(user.usernameUser));
        dispatch(fetchTotal(totalAmount));
        dispatch(fetchAdmin(item));
        navigate("/cart");
        Swal.fire({
            title: "Barang berhasil di checkout",
            icon: "success"
        })
      }
    })
  }

<<<<<<< HEAD
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <div className="text-center flex justify-center mt-5">
        <motion.div {...viewportSlideRight}>
=======
  //menampilkan harga
  useEffect(() => {
    let price = 0;
    item.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
    // console.log("🚀 ~ file: Cart.jsx:15 ~ item.map ~ price:", price);
  }, [item]);

  // console.log("🚀 ~ file: Cart.jsx:5 ~ Cart ~ item:", item);
  return (
    <div>
      <div className="text-center flex justify-center mt-5">
        <motion.div {...scaleDown}>
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
          <h2 className="text-2xl bg-black text-white py-2 w-80 text-center">
            Keranjang Belanja
          </h2>
        </motion.div>
      </div>
<<<<<<< HEAD
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {cartcart && cartcart.length > 0 ? (
          cartcart.map((item) => (
            <div key={item._id}>
              <ProductsCard product={item} />
              <button onClick={() => handleRemoveFromCart(item)}>Hapus</button>
            </div>
          ))
        ) : (
          <p>Keranjang belanja Anda kosong.</p>
=======
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />

        {!isLoggedIn ? (
          <motion.div {...slideLeft} className="w-1/3 bg-[#FAFAFA] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Cart Totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{""}
                <span className="font-tittleFont font-bold text-lg">
                  ${"0"}
                </span>
              </p>
            </div>
            <p className="font-tittleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${"0"}</span>
            </p>
            <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
              proceed to checkout
            </button>
          </motion.div>
        ) : (
          <motion.div {...slideLeft} className="w-1/3 bg-[#FAFAFA] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Cart Totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-tittleFont font-bold text-lg">
                  ${totalAmount}
                </span>
              </p>
            </div>
            <p className="font-tittleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${totalAmount}</span>
            </p>
            <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
              proceed to checkout
            </button>
          </motion.div>
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
        )}
      </div>
      \
    </div>
  );
};

export default Cart;
