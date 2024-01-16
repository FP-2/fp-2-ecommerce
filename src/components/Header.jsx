import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { cartImg } from "../assets";
import { MDBBadge } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { setBadges } from "../redux/productSlice";

const Header = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  const admin = JSON.parse(localStorage.getItem("authAdmin"));
  const item = useSelector((state) => state.product.items);
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("auth") || localStorage.removeItem("authAdmin");
        navigate("/login");
        Swal.fire({
          title: "Logout Success",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="shadow-lg w-full h-20 bg-white border-b-[1px] font-tittleFont sticky top-0 z-50">
<<<<<<< HEAD
      <div className="max-w-screen-xl h-full mx-auto flex cart-center justify-between">
        {/* logo MfiimShop */}
=======
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
        <Link to="/">
          <div>
            <h1 className="font-tittleFont font-bold text-3xl hover:scale-105 duration-300">
              MFIIM-SHOP
            </h1>
          </div>
        </Link>
<<<<<<< HEAD
        <div className="flex justify-center cart-center gap-8">
          <ul className="flex cart-center gap-8">
            {/* navbar E-commerce */}
=======
        <div className="flex justify-center items-center gap-8">
          <ul className="flex items-center gap-8">
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
            <li className="text-base text-black font-bold hover:text-orange-900 underline-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300">
              <Link to="/">E-Commerce</Link>
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 underline-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300">
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
<<<<<<< HEAD
          {/* navbar login,logout */}
          { auth ? <Link onClick={handleLogout} className="text-red-600">Logout</Link> : <Link to="/login" className="text-green-600">Login</Link>}
          {/* navbar, Image Cart */}
          <Link to="/cart">
            <div className="relative hover:scale-105 duration-300 flex cart-center">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <MDBBadge className='ms-2'>{item}</MDBBadge>
=======
          {auth || admin ? (
          <>
            {admin ?(
            <div className="text-base text-black font-bold hover:text-orange-900 underdivne-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300">
              <Link to="/admin">Admin</Link>
>>>>>>> ec36a8a36324eb461bf4312b0a2592577d4630f0
            </div>
            ):(<>
            <Link to="/cart">
              <div className="relative hover:scale-105 duration-300 flex items-center">
                <img className="w-6" src={cartImg} alt="cartImg" />
                {auth ? (
                  <MDBBadge className="ms-2">{item.length}</MDBBadge>
                ) : (
                  <MDBBadge className="ms-2">{""}</MDBBadge>
                )}
              </div>
            </Link>
            </>)}
            <div
              onClick={handleLogout}
              className="text-base font-bold hover:text-red-800 underline-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300 text-red-600"
            >
              Logout
            </div>
          </>
          ) : (
            <Link
              to="/login"
              className="text-base font-bold hover:text-green-800 underline-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300 text-green-600"
            >
              Login
            </Link>
          )}
          {/* <img
            className="w-8 h-8 rounded-full  hover:scale-105 duration-300"
            src="https://static.zerochan.net/Yae.Miko.full.3600626.jpg"
            alt="userLogo"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
