import { Link } from "react-router-dom";
import { cartImg } from "../assets";

const Header = () => {
  return (
    <div className="shadow-lg w-full h-20 bg-white border-b-[1px] font-tittleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <h1 className="font-tittleFont font-bold text-3xl hover:scale-105 duration-300">
              Team-VII
            </h1>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 underline-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300">
              <Link to="/">E-Commerce</Link>
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 underline-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300">
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative hover:scale-105 duration-300">
              <img className="w-6" src={cartImg} alt="cartImg" />
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full  hover:scale-105 duration-300"
              src="https://static.zerochan.net/Yae.Miko.full.3600626.jpg"
              alt="userLogo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
