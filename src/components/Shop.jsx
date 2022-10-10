import React, { useContext } from "react";
import { CartContext, ProductsContext } from "../layout/Root";
import Product from "../components/Product";
import { addToDb } from "../utils/fakeDB";
import { toast } from "react-toastify";

const Shop = () => {
  const products = useContext(ProductsContext);
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find((cartProduct) => cartProduct.id === product.id);
    const rest = cart.filter((cartProduct) => cartProduct.id !== product.id);
    if (exist) {
      exist.quantity += 1;
      newCart = [...rest, exist];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.id);
    toast.success("Product added succesfully");
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
