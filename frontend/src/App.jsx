
import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Loginsignup from "./Pages/Loginsignup";
import Shopcategory from "./Pages/Shopcategory";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kid_banner from "./Components/Assets/banner_kids.png"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Mens" element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path="/Womens" element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path="/Kids" element={<Shopcategory banner={kid_banner} category="kid" />} />

          <Route path="/product" element={<Product />}>

            <Route path=":product_Id" element={<Product />} />

          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />

        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  )
}
export default App




