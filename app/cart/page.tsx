"use client";
import { useCartContext } from "@/src/context/cartContext";
import { Beer } from "@/types/types";
import Image from "next/image";

const Cart = () => {
  const { products } = useCartContext();

  let subtotal = 0;

  for (let i = 0; i < products?.length; i++) {
    let priceNumber = products[i].price.replace("$", "");
    subtotal += parseFloat(priceNumber);
  }

  return (
    <>
      <div className={"cart__container"}>
        <h2>Cart</h2>
        {products ? (
          products.map((product: Beer) => (
            <div className="card__item" key={product.id}>
              <button>X</button>
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.name}
              ></Image>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p className="msg">your cart is empty</p>
        )}
      </div>
      <p className="subtotal">Subtotal: {subtotal.toFixed(2)}$</p>
    </>
  );
};

export default Cart;
