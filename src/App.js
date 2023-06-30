import React, { useState } from "react";
import "./App.css";
import ListProducts from "./components/ListProducts";
import YourCart from "./components/YourCart";
import { Container } from "react-bootstrap";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Container>
      <h2 className="text-center my-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <ListProducts addToCart={addToCart} />
        </div>
        <div className="col-lg-4 col-md-4">
          <YourCart cartItems={cartItems} />
        </div>
      </div>
    </Container>
  );
}

export default App;