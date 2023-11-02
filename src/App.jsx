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

const Layout = () => {
  return (
    <div>
      <Header /> {/* bagian header navbar */}
      <ScrollRestoration />
      {/* ScrollRestoration, untuk otomatis ke bagian paling atas saat ke home dari page lain,
      agar tidak perlu scroll keatas terlebih dahulu */}
      <Outlet /> {/* bagian isi, bagian "children" di router bawah */}
      <Footer /> {/* bagian Footer */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Ecommerce />, //Home ecommerce
        loader: productsData, //loader, untuk mengambil api dari folder api/Api.js (nyoba routing versi terbaru untuk fething lebih mudah, 1 fetch bisa digunakan banyak tinggal di loader)
      },
      {
        path: "/cart",
        element: <Cart />, //page cart checkout (testing routing)
      },
      {
        path: "/shop",
        element: <Shop />, //page shop (testing routing)
      },
      {
        path: "/login",
        element: <Login />, //page login (testing routing)
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
