"use client";
import { Beer } from "@/types/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const CartContext = createContext<{
  products: Beer[];
  addProduct: (beer: Beer) => void;
  deleteProduct: (beer: Beer) => void;
}>({
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
});

export function useCartContext() {
  return useContext(CartContext);
}

const Cart = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Beer[] | []>([]);

  const saveCart = (products: Beer[]) => {
    localStorage.setItem("cart", JSON.stringify(products));
  };

  const addProduct = (beer: Beer) => {
    setProducts((prev) => {
      const newCart = [beer, ...prev];
      saveCart(newCart);
      return newCart;
    });
  };

  const deleteProduct = (beer: Beer) => {
    setProducts((prev) => {
      const newCart = prev.filter((p) => p.id !== beer.id);
      saveCart(newCart);
      return newCart;
    });
  };

  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    const cart = cartString ? JSON.parse(cartString) : null;
    cart && setProducts(cart);
  }, []);

  const value = { products, addProduct, deleteProduct };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default Cart;
