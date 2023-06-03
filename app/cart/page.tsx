"use client";
import { useCartContext } from "@/src/context/cartContext";
import Image from "next/image";

const Cart = () => {
  const { products } = useCartContext();
  let subtotal = 0;
  for (let i = 0; i < products.length; i++) {
    let priceNumber = products[i].price.replace("$", "");
    subtotal += parseFloat(priceNumber);
  }
  return (
    <div className={"cart__container"}>
      <h2>Cart</h2>
      {products[0] ? (
        products.map((product) => (
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
        <p>your cart is empty</p>
      )}
      <p>Subtotal:{subtotal.toFixed(2)}$</p>
    </div>
  );
};

export default Cart;
