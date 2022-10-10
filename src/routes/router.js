import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import About from "../components/About";
import Errorpage from "../components/ErrorPage";
import { productAndCartLoader } from "../components/productAndCartLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    loader: productAndCartLoader,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/cart", element: <Cart></Cart> },
      { path: "/about", element: <About></About> },
    ],
  },
]);
