"use client";
import { Beer } from "@/types/types";
import { ReactNode, createContext, useContext, useState } from "react";

export const CartContext = createContext<{
  products: Beer[];
  addProduct: (beer: Beer) => void;
  //   deleteProduct: () => void;
}>({
  products: [],
  addProduct: () => {},
  //   deleteProduct: () => {},
});

export function useCartContext() {
  return useContext(CartContext);
}

// type Props = {
//   children: ReactNode;
// };

const Cart = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Beer[] | []>([]);

  const addProduct = (beer: Beer) => {
    setProducts((prev) => [
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
      ...prev,
    ]);
  };

  //   const deleteProduct = () => {};
  const value = { products, addProduct };
  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>;
    </>
  );
};

export default Cart;
