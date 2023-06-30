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

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateCartItem = (itemId, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const createProduct = (product) => {
    // TODO: Implement createProduct function
  };

  const readProduct = (productId) => {
    // TODO: Implement readProduct function
  };

  const updateProduct = (productId, product) => {
    // TODO: Implement updateProduct function
  };

  const deleteProduct = (productId) => {
    // TODO: Implement deleteProduct function
  };

  return (
    <Container>
      <h2 className="text-center my-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <ListProducts addToCart={addToCart} />
        </div>
        <div className="col-lg-4 col-md-4">
          <YourCart
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            updateCartItem={updateCartItem}
            clearCart={clearCart}
            createProduct={createProduct}
            readProduct={readProduct}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;