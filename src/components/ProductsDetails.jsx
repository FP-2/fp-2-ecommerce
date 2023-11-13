import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MdOutlineStar } from "react-icons/md";
import { motion } from "framer-motion";
import { slideDown, slideLeft } from "../framerMotion";
import { useDispatch } from "react-redux";
import { addToCart, resetQuantity } from "../redux/productSlice";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  //location, untuk mengakses data yang telah di kirimkan melalui navigasi dari halaman sebelumnya yaitu state yang dikirimkan dari (/products card)
  const location = useLocation();
  let [quantity] = useState(0);
  const [productDetails, setProductDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);

  //useEffects, untuk mengolah data ke setProductDetails yang telah di akses oleh useLocation yaitu berupa item (varibel yang sebelumnya telah di buat pada (/productsCrad) yang membawa data fetch "products",)
  useEffect(() => {
    setProductDetails(location.state.item);
  }, [location.state.item]);
  // const authen = localStorage.getItem("auth") ;

  // Fungsi untuk mengecek status login
  const checkLoginStatus = () => {
    const auth = localStorage.getItem("auth");
    const authAdmin = localStorage.getItem("authAdmin");
    if (auth) {
      setIsLoggedIn(true);
    }else if (authAdmin) {
      setIsLoggedInAdmin(true);
    }
  };
  const handleReset = () =>{
    dispatch(resetQuantity(
      {
        _id: productDetails._id,
      }
    ))
  }
  // const handleStok = () => {
  //     navigate("/");
  //     Swal.fire({
  //         title: "Stok Habis",
  //         icon: "error"
  //     })
  // };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleAddToCart = () => {
    if (isLoggedIn === true) {
      dispatch(
        addToCart({
          _id: productDetails._id,
          title: productDetails.title,
          image: productDetails.image,
          price: productDetails.price,
          quantity: quantity,
          description: productDetails.description,
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
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <motion.div {...slideDown} className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover "
            src={productDetails.image}
            alt="productImage"
          />
          <div className="absolute top-4 right-0">
            {productDetails.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </motion.div>
        <motion.div
          {...slideLeft}
          className="w-3/5 flex flex-col justify-center gap-12"
        >
          <div>
            <h2 className="text-4xl font-semibold">{productDetails.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-base text-gray-500">
                ${productDetails.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${productDetails.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base ">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500">
            {productDetails.description}
          </p>
          <div className="flex gap-4">
            {isLoggedIn ?(<>
            {/* <div className="w-72 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setQuantitys(quantity === 1 ? (quantity = 1) : quantity - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <div className="w-3">{quantity}</div>
                <button
                  onClick={() => setQuantitys(quantity === productDetails.quantity ? (handleStok()):(quantity + 1))}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div> */}
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add to cart
            </button>
            </>
            ):(<>
              <div className="w-72 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">remaining stock</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <div className="w-3">{productDetails.quantity}</div>
              </div>
              </div>
              {isLoggedInAdmin?(<>
              <button
              onClick={handleReset}
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              reset quantity
            </button>
              </>):(<></>)}
            </>
            )}
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">
              {productDetails.category}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
