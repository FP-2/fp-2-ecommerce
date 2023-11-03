import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Ecommerce from "./pages/Ecommerce";
import { productsData } from "./api/Api";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductsDetails";

const Layout = () => {
  return (
    <div>
      {/* bagian header navbar */}
      <Header />
      {/* ScrollRestoration, untuk otomatis ke bagian paling atas saat ke home dari page lain,
      agar tidak perlu scroll keatas terlebih dahulu */}
      <ScrollRestoration />
      {/* bagian isi, bagian "children" di router bawah */}
      <Outlet />
      {/* bagian Footer */}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        //Home ecommerce
        element: <Ecommerce />,
        //loader, untuk mengambil api dari folder api/Api.js (nyoba routing versi terbaru untuk fething lebih mudah, 1 fetch bisa digunakan banyak tinggal di loader)
        loader: productsData,
      },
      {
        path: "/productdetails/:id",
        //page Product Details
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        //page cart checkout (testing routing)
        element: <Cart />,
      },
      {
        path: "/shop",
        //page shop (testing routing)
        element: <Shop />,
      },
      {
        path: "/login",
        //page login (testing routing)
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;