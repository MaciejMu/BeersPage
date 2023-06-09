"use client";
import { Beer } from "@/types/types";
import { ReactNode, createContext, useContext, useState } from "react";

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

  const addProduct = (beer: Beer) => {
    setProducts((prev: Beer[]) => [
      ...prev,
      {
        price: beer.price,
        name: beer.name,
        rating: {
          average: beer.rating.average,
          reviews: beer.rating.reviews,
        },
        image: beer.image,
        id: beer.id,
      },
    ]);
  };

  const deleteProduct = (beer: Beer) => {
    setProducts(products.filter((p) => p.id !== beer.id));
  };

  const value = { products, addProduct, deleteProduct };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default Cart;
