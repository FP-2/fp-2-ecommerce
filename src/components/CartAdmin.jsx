import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { slideDown } from "../framerMotion";

const CartAdmin = () => {
  const item = useSelector((state) => state.product.checkout);
  const isLoggedIn = localStorage.getItem("authAdmin") !== null;
  return (
    <motion.div {...slideDown}>
      <div className="w-full">
      {[...new Set(item.map(items => items.username))].map((username, index) => (
        <h2 key={index} className="font-tittleFont text-2xl">
            Shopping Cart by {username}
        </h2>
        ))}
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
        <table>
        <thead>
        <tr className="flex mx-4 items-center justify-between gap-2 mt-6">
            <th>Date</th>
            <th>Preview</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        </thead>
          {item.map((item,index) => (
            <tbody key={index}>
            <tr className="flex mx-6 items-center justify-between gap-6 mt-6">
                <td>{item.date}</td>
                <td>
                <div className="flex items-center gap-2">
                <img
                  className="w-32 h-32 object-cover"
                  src={item.image}
                  alt="productImg"
                />
                </div>
                </td>
                <td><h2 className="w-52">{item.title}</h2></td>
                <td><p className="w-10">${item.price}</p></td>
                <td>              
                <div className="w-16 flex items-center justify-center text-gray-500 gap-4 border p-3">
                  <div className="w-2">{item.quantity}</div>
                </div>
                </td>
                <td>{item.total}</td>
            </tr>
            </tbody>
          ))}
        </table>
        </div>
      )}
    </motion.div>
  );
};

export default CartAdmin;
