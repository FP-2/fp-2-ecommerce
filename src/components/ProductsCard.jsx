/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { viewportScaleDown } from "../framerMotion";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";
<<<<<<< HEAD
=======
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };

  const routingId = idString(_id);

=======
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //mengambil product.title dari api dan di untuk di ubah menjadi id dengan variable _id
  const _id = product.title;
  //idString, mengubah _id (product.title) menjadi text kecil semua & tanpa spasi
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const routingId = idString(_id);
  //handle untuk button onclick, untuk navigate (pindah page) ke /productdetails/id, id (sesuai nama product yang di klick)
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
  const handleDetails = () => {
    navigate(`/productdetails/${routingId}`, {
      state: {
        item: product,
      },
    });
  };

  // Fungsi untuk mengecek status login
  const checkLoginStatus = () => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      dispatch(
        addToCart({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
          description: product.description,
        })
      );
    } else {
      Swal.fire({
        title: "Silahkan login terlebih dahulu",
        icon: "info",
      });
    }
  };

  return (
<<<<<<< HEAD
    <motion.div {...viewportScaleDownFadeUp} className="group relative">
      <div onClick={handleDetails} className="w-full h-96 cursor-pointer overflow-hidden">
=======
    <motion.div {...viewportScaleDown} className="group relative">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={product.image}
          alt="productImage"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
<<<<<<< HEAD
        <div className="flex justify-between cart-center">
=======
        <div className="flex justify-between items-center">
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
          <div>
            <h2 className="font-tittleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>

          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-300">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
<<<<<<< HEAD

            <p onClick={handleAddToCart} className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex cart-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-300">
=======
            {isLoggedIn ? (
            <p
              onClick={handleAddToCart}
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-300"
            >
              {/* {textCard} */}
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
            ):(<></>)}
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-tittleFont px-6 py-1">
              New
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsCard;
