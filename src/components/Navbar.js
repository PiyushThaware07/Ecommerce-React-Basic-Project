import React,{useContext} from "react";
// Imports
import { Link } from "react-router-dom";
// context Api
import {CartContext} from '../Global/CartContext';

export default function Navbar() {
  const {qty} = useContext(CartContext);
  return (
    <>
      <nav>
        <ul className="left">
          <li>
            <Link to="/">ShopNow</Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <Link to="cart">
              <span className="shoppingCart">
                <i class="fa-solid fa-cart-plus"></i>
                <span className="cartCount">{qty}</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
