import React from "react";
import "../css/YourCart.css";

function YourCart(props) {
  const { cartItems } = props;

  return (
    <div className="your-cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Empty products in your cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default YourCart;