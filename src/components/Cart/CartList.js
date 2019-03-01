import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  //remember, {value} is extracted from props and cart (below) from value
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
