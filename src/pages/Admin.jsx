import { useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { scaleDown } from "../framerMotion";
import CartAdmin from "../components/CartAdmin";

const Admin = () => {
  const item = useSelector((state) => state.product.checkout);

  //menampilkan harga
  useEffect(() => {
    let price = 0;
    item.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
  }, [item]);

  return (
    <div>
      <div className="text-center flex justify-center mt-5">
        <motion.div {...scaleDown}>
          <h2 className="text-2xl bg-black text-white py-2 w-80 text-center">
            Rekap Penjualan
          </h2>
        </motion.div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartAdmin />
      </div>

    </div>
  );
};

export default Admin;
