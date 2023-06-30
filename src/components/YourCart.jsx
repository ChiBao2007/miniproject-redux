import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const YourCartWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const YourCartTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const YourCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const YourCartItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const YourCartItemPrice = styled.span`
  font-size: 16px;
`;

const YourCartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const YourCartTotalLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const YourCartTotalValue = styled.span`
  font-size: 18px;
`;

const YourCartButton = styled(Button)`
  background-color: #f0ad4e;
  border-color: #f0ad4e;
  color: #fff;

  &:hover {
    background-color: #ec971f;
    border-color: #ec971f;
    color: #fff;
  }
`;

function YourCart(props) {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct,
  } = props;

  const [editItemId, setEditItemId] = useState(null);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleUpdateCartItem = (itemId, quantity) => {
    updateCartItem(itemId, quantity);
    setEditItemId(null); // Kết thúc chế độ sửa đổi
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleEditCartItem = (itemId) => {
    setEditItemId(itemId); // Bắt đầu chế độ sửa đổi
  };

  const handleCreateProduct = (product) => {
    createProduct(product);
  };

  const handleReadProduct = (productId) => {
    readProduct(productId);
  };

  const handleUpdateProduct = (productId, product) => {
    updateProduct(productId, product);
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  return (
    <YourCartWrapper>
      <YourCartTitle className="mb-4">Your Cart</YourCartTitle>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <YourCartItem key={item.id}>
              <div>
                <YourCartItemName>{item.name}</YourCartItemName>
                <YourCartItemPrice>${item.price}</YourCartItemPrice>
              </div>
              {editItemId === item.id ? (
                <div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItem(item.id, parseInt(e.target.value))
                    }
                  />
                  <Button
                    variant="success"
                    size="sm"
                    className="ml-2"
                    onClick={() => handleUpdateCartItem(item.id, item.quantity)}
                  >
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="ml-2"
                    onClick={() => setEditItemId(null)}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <div>
                  <span>{item.quantity}</span>
                  <Button
                    variant="primary"
                    size="sm"
                    className="ml-2"
                    onClick={() => handleEditCartItem(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="ml-2"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              )}
            </YourCartItem>
          ))}
          <YourCartTotal>
            <YourCartTotalLabel>Total:</YourCartTotalLabel>
            <YourCartTotalValue>${totalPrice}</YourCartTotalValue>
          </YourCartTotal>
          <div className="text-center mt-4">
            <YourCartButton onClick={handleClearCart}>Clear Cart</YourCartButton>
          </div>
        </>
      )}
    </YourCartWrapper>
  );
}

export default YourCart;