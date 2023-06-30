import React, { useState } from "react";
import "./App.css";
import ListProducts from "./components/ListProducts";
import YourCart from "./components/YourCart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>

    <h2>Shopping Cart</h2>
    <div className="container">
      <ListProducts addToCart={addToCart} />
      <YourCart cartItems={cartItems} />
    </div>
    </>
  );
}

export default App;