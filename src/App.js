import React from "react";
// CSS
import "./App.css";
// Imports
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Notfound from "./components/Notfound";

// contextApi
import ProductContextProvider from "./Global/ProductContext";
import CartContextProvider from "./Global/CartContext";


// react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <>
      <div className="container">
        <ProductContextProvider>
          <CartContextProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Products />} exact />
                <Route path="/cart" element={<Cart />} exact />
                <Route path="/*" element={<Notfound />} exact />
              </Routes>
            </Router>
          </CartContextProvider>
        </ProductContextProvider>
      </div>
    </>
  );
}
