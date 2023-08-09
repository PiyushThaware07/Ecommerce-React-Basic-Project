import React, { useContext } from "react";
// Imports
import { ProductsContext } from "../Global/ProductContext";
import { CartContext } from "../Global/CartContext";

// components
import Banner from "./Banner";

export default function Products() {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <Banner />
        <div className="products">
          {products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt="" />
                </div>
                <div className="product-details">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price}.00</div>
                </div>
                <div className="add-to-cart" onClick={() => dispatch({ type: "ADD_TO_CART", id: product.id, product })}>Add to Cart</div>
                {product.status === "hot" ? <div className="hot">hot <i class="fa-solid fa-fire"></i></div> : ""}
                {product.status === "new" ? <div className="new">new <i class="fa-solid fa-star-of-life"></i></div> : ""}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
