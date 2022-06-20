import { createContext, useEffect, useState, useContext } from "react";

import axios from "../config/axios";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const res = await axios.get(`/cart/cartId/`);
    console.log("res.data");
    console.log(res.data.cart);
    setCart(res.data.cart);
  };

  const total = cart.reduce((acc, curr) => {
    let res = acc + curr.Product.price * curr.amount;
    return res;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, getCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const ctx = useContext(CartContext);
  return ctx;
};
export default CartContextProvider;

export { useCart, CartContext };
