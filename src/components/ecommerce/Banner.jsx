import { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
//framerMotion, untuk animasi
import { motion } from "framer-motion";
import { scaleDown, slideLeft, slideRight } from "../../framerMotion";

const Banner = () => {
  //state untuk banner slider
  const [currentSlide, setCurrentSlide] = useState(0);

  //variable data, untuk image banner
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  //prevSlide, untuk button slider, banner geser ke kiri
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
  };

  //nextSlide, untuk button slider banner geser ke kanan
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
  };

  return (
    <motion.div {...scaleDown} className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        {/* transforrm: agar banner bisa di slide */}
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="flex w-[400vw] h-full transition-transform duration-500"
        >
          {/* ambil gambar banner dari variabel "data" i index ke 0 */}
          <img
            className="w-screen h-full object-top object-cover"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />

          {/* ambil gambar banner dari variabel "data" i index ke 1 */}
          <img
            className="w-screen h-full object-top object-cover"
            src={data[1]}
            alt="ImageTwo"
            loading="priority"
          />

          {/* ambil gambar banner dari variabel "data" index ke 2 */}
          <img
            className="w-screen h-full object-top object-cover"
            src={data[2]}
            alt="ImageThree"
            loading="priority"
          />

          {/* ambil gambar banner dari variabel "data" index ke 3 */}
          <img
            className="w-screen h-full object-top object-cover"
            src={data[3]}
            alt="ImageFour"
            loading="priority"
          />

          {/* button prev dan next */}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          {/* button prev */}
          <motion.div
            {...slideRight}
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex cart-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </motion.div>

          {/* button next */}
          <motion.div
            {...slideLeft}
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex cart-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
