import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/productSlice";
import ProductsCard from "../components/ProductsCard";
import { motion } from "framer-motion";
import { viewportSlideRight } from "../framerMotion";

function Cart() {
  const cartcart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

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
        {cartcart && cartcart.length > 0 ? (
          cartcart.map((item) => (
            <div key={item._id}>
              <ProductsCard product={item} />
              <button onClick={() => handleRemoveFromCart(item)}>Hapus</button>
            </div>
          ))
        ) : (
          <p>Keranjang belanja Anda kosong.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
