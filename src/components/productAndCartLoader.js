import { getStoredCart } from "../utils/fakeDB";

export const productAndCartLoader = async () => {
  const productData = await fetch("products.json");
  const products = await productData.json();

  const savedCart = getStoredCart();
  let initailCart = [];
  for (const id in savedCart) {
    const savedProduct = products.find((product) => product.id === id);
    if (savedProduct) {
      const quantity = savedCart[id];
      savedProduct.quantity = quantity;
      initailCart.push(savedProduct);
    }
  }
  return { products, initailCart };
};
