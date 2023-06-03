// import CartContext from "@/src/context/cartContext";
// import { Beer } from "@/types/types";
// import { useCallback, useContext } from "react";

// type useCardType = {
//   products: Beer[];
//   addProduct: (products: Beer) => void;
// };

// const useCart = (): useCardType => {
//   const { products, setProducts } = useContext(CartContext);

//   const addProduct = useCallback(
//     (products: Beer) => {
//       setProducts((prev) => {
//         const newProducts = [products, ...prev];
//         return newProducts;
//       });
//     },
//     [products, setProducts]
//   );
//   return { products, addProduct };
// };

// export default useCart;
