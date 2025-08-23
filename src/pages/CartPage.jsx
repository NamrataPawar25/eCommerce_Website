import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
            <div>
              <strong>{item.name}</strong> - ₹{item.price}
              <span className="ms-3">Qty: {item.quantity}</span>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decreaseQty(item.id)}>-</button>
              <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => increaseQty(item.id)}>+</button>
              <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
