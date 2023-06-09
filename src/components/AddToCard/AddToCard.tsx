"use client";
import { useCartContext } from "@/src/context/cartContext";
import { Beer } from "@/types/types";

const AddToCard = (beer: Beer) => {
  const { addProduct, deleteProduct, products } = useCartContext();
  const dupa = products.filter((x) => x.id === beer.id);
  console.log(products);
  console.log(dupa);

  return (
    <>
      {!dupa[0] ? (
        <button className="add" onClick={() => addProduct(beer)}>
          Add Product
        </button>
      ) : (
        <button className="add" onClick={() => deleteProduct(beer)}>
          Remove Product
        </button>
      )}
    </>
  );
};

export default AddToCard;
