import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Ecommerce from "./pages/Ecommerce";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductsDetails";
import "./index.css";

const Layout = () => {
  return (
    <div>
      {/* bagian header navbar */}
      <Header />
      {/* bagian isi, bagian "children" di router bawah */}
      <ScrollRestoration />
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
        element: <Ecommerce />,
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/login",
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
