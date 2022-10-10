import React, { createContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

const Root = () => {
  const { products, initailCart } = useLoaderData();
  const [cart, setCart] = useState(initailCart);
  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default Root;
