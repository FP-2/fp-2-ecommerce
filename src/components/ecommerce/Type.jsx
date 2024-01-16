import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { viewportScaleDownFadeUp } from "../../framerMotion"; 
const Type = () =>{
    return(
        <div className="grid grid-cols-3 my-3 h-96 mx-2">
        <Link to="/" className="bg-hoodie flex cart-center mr-5">
            <div className="bg-white flex cart-center w-full h-10">Hoodie</div>
        </Link>
        <Link to="/" className="bg-jacket flex cart-center mr-5">
            <div className="bg-white flex cart-center w-full h-10">Jacket</div>
        </Link>
        <Link to="/" className="bg-t-shirt flex cart-center ">
            <div className="bg-white flex cart-center w-full h-10">T-Shirt</div>
        </Link>
        </div>
    //         <motion.div {...viewportScaleDownFadeUp} className="group relative">
    // </motion.div>
    )
}
export default Type;