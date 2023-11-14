import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  resetCart,
} from "../redux/productSlice";
import { motion } from "framer-motion";
import { slideDown } from "../framerMotion";

const CartItem = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.product.items);
  const isLoggedIn = localStorage.getItem("auth") !== null;
  // console.log(
  // "🚀 ~ file: CartItem.jsx:6 ~ CartItem ~ item:",
  // item
  // );
  return (
    <motion.div {...slideDown} className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-tittleFont text-2xl">Shooping Cart</h2>
      </div>
      {!isLoggedIn ? (
        <div className="flex items-center justify-center w-full py-24">
          <p className="pt-4">Please login to view your cart.</p>
        </div>
      ) : item.length === 0 ? (
        <div className="flex items-center justify-center w-full py-24">
          <p className="pt-4">Your Cart Is Empty!!</p>
        </div>
      ) : (
        <div>
          {item.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between gap-6 mt-6"
            >
              <div className="flex items-center gap-2">
                <button onClick={() => dispatch(removeFromCart(item))}>
                  <MdOutlineClose className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" />
                </button>
                <img
                  className="w-32 h-32 object-cover"
                  src={item.image}
                  alt="productImg"
                />
              </div>
              <h2 className="w-52">{item.title}</h2>
              <p className="w-10">${item.price}</p>
              <div className="w-72 flex items-center justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button
                    onClick={() =>
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <div className="w-3">{item.quantity}</div>
                  <button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="w-14">${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      )}

      {isLoggedIn && item.length > 0 && (
        <div>
          <button
            onClick={() => {
              dispatch(resetCart());
            }}
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
          >
            Reset Cart
          </button>
        </div>
      )}
      <Link to="/">
        <button className="flex mt-8 ml-7 items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
    </motion.div>
  );
};

export default CartItem;
