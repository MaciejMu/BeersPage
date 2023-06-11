"use client";
import CustomImage from "@/src/components/customImg/customImage";
import { useCartContext } from "@/src/context/cartContext";
import { Beer } from "@/types/types";

const Cart = () => {
  const { products, deleteProduct } = useCartContext();

  let subtotal = 0;

  for (let i = 0; i < products?.length; i++) {
    let priceNumber = products[i].price.replace("$", "");
    subtotal += parseFloat(priceNumber);
  }

  return (
    <>
      <div className={"cart__container"}>
        <h2>Cart</h2>
        {products[0] ? (
          products.map((product: Beer) => (
            <div className="card__item" key={product.id}>
              <button onClick={() => deleteProduct(product)}>X</button>
              <CustomImage
                src={product.image}
                width={100}
                height={100}
                alt={product.name}
                unoptimized
              ></CustomImage>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p className="msg">your cart is empty</p>
        )}
      </div>
      {products[0] ? (
        <p className="subtotal">Subtotal: {subtotal.toFixed(2)}$</p>
      ) : null}
    </>
  );
};

export default Cart;
