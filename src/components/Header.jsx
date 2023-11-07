import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { cartImg } from "../assets";

const Header = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("auth");
                navigate("/login");
                Swal.fire({
                    title: "Logout Success",
                    icon: "success"
                });
            }
        });
    };

  return (
    <div className="shadow-lg w-full h-20 bg-white border-b-[1px] font-tittleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        {/* logo Team-VIII */}
        <Link to="/">
          <div>
            <h1 className="font-tittleFont font-bold text-3xl hover:scale-105 duration-300">
              Team-VIII
            </h1>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {/* navbar E-commerce */}
            <li className="text-base text-black font-bold hover:text-orange-900 underline-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300">
              <Link to="/">E-Commerce</Link>
            </li>
            {/* navbar Shop */}
            <li className="text-base text-black font-bold hover:text-orange-900 underline-offset-2 decoration-[1px] cursor-pointer hover:scale-105 duration-300">
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
          {/* navbar login,logout */}
          <Link to="/login">Login</Link>
          { auth ? <Link onClick={handleLogout}>Logout</Link> : <></>}
          {/* navbar, Image Cart */}
          <Link to="/cart">
            <div className="relative hover:scale-105 duration-300">
              <img className="w-6" src={cartImg} alt="cartImg" />
            </div>
          </Link>
          {/* navbar, Image Login */}
          
            <img
              className="w-8 h-8 rounded-full  hover:scale-105 duration-300"
              src="https://static.zerochan.net/Yae.Miko.full.3600626.jpg"
              alt="userLogo"
            />
          
        </div>
      </div>
    </div>
  );
};

export default Header;
