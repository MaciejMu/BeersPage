"use client";
import { useCartContext } from "@/src/context/cartContext";
import { Beer } from "@/types/types";

const AddToCard = (beer: Beer) => {
  const { addProduct } = useCartContext();
  return (
    <button className="add" onClick={() => addProduct(beer)}>
      Add Product
    </button>
  );
};

export default AddToCard;
