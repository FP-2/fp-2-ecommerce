import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MdOutlineStar } from "react-icons/md";
//framer motion, untuk animasi
import { motion } from "framer-motion";
import { slideDown, slideLeft } from "../framerMotion";
const ProductDetails = () => {
  //location, untuk mengakses data yang telah di kirimkan melalui navigasi dari halaman sebelumnya yaitu state yang dikirimkan dari (/products card)
  const location = useLocation();
  //state, untuk quantity
  let [quantity, setQuantitys] = useState(1);
  const [productDetails, setProductDetails] = useState({});

  //useEffects, untuk mengolah data ke setProductDetails yang telah di akses oleh useLocation yaitu berupa item (varibel yang sebelumnya telah di buat pada (/productsCrad) yang membawa data fetch "products",)
  useEffect(() => {
    setProductDetails(location.state.item);
  }, [location.state.item]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <motion.div {...slideDown} className="w-2/5 relative">
          {/* product Image */}
          <img
            className="w-full h-[550px] object-cover "
            src={productDetails.image}
            alt="productImage"
          />
          <div className="absolute top-4 right-0">
            {/* product Sale */}
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
            {/* nama product */}
            <h2 className="text-4xl font-semibold">{productDetails.title}</h2>
            {/* harga product */}
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-base text-gray-500">
                ${productDetails.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${productDetails.price}
              </p>
            </div>
          </div>
          {/* icon bintang 5x */}
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
          {/* deskripsi product */}
          <p className="text-base text-gray-500">
            {productDetails.description}
          </p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                {/* button - (minnus) mengurangi quantity */}
                <button
                  onClick={() =>
                    setQuantitys(quantity === 1 ? (quantity = 1) : quantity - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{quantity}</span>
                {/* button +(plus) menambahkan quantity */}
                <button
                  onClick={() => setQuantitys(quantity + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            {/* button add to cart */}
            <button className="bg-black text-white py-3 px-6 active:bg-gray-800">
              add to cart
            </button>
          </div>
          {/* category product */}
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
