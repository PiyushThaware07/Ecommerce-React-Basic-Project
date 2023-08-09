import React, { useState, createContext } from "react";
// Imports
import headphones from "../assets/headphones.jpg";
import powerbank from "../assets/powerbank.jpg";
import smartphone from "../assets/smartphone.jpg";
import laptop from "../assets/laptop.jpg";
import shoes from "../assets/shoes.jpg";

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: "headphones",
      price: 300,
      image: headphones,
      status: "hot",
    },
    {
      id: 2,
      name: "powerbank",
      price: 200,
      image: powerbank,
      status: "new",
    },
    {
      id: 3,
      name: "smartphone",
      price: 100,
      image: smartphone,
      status: "hot",
    },
    { id: 4, name: "laptop", price: 500, image: laptop, status: "new" },
    { id: 5, name: "shoes", price: 400, image: shoes, status: "new" },
  ]);
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
