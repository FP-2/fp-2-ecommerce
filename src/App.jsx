import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Ecommerce from "./pages/Ecommerce";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
