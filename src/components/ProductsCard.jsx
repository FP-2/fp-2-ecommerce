/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
//framerMotion, untuk animasi
import { motion } from "framer-motion";
import { viewportScaleDownFadeUp } from "../framerMotion";

const ProductsCard = ({ product }) => {
  return (
    <motion.div {...viewportScaleDownFadeUp} className="group relative">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        {/* menampilkan gambar product */}
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          //data fetch "product" di dapatkan dari props pada page "Products" dan dari "Products" ke page "Ecommerce" menggunakan "useLoaderData"
          src={product.image}
          alt="productImage"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          {/* menampilkan nama product, substring agar text maksimal 15 */}
          <div>
            <h2 className="font-tittleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>

          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            {/* menampilkan harga product */}
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-300">
              {/* harga mahal yang di coret */}
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              {/* harga terkini */}
              <p className="font-semibold">${product.price}</p>
            </div>

            {/* menampilkan text "add to cart" */}
            <p className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-300">
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>

        {/* menampilkan product category, "men, women" */}
        <div>
          <p>{product.category}</p>
        </div>

        {/* menampilkan sale, barang tersedia atau tidak */}
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-tittleFont px-6 py-1">
              Sale
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsCard;
