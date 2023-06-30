import React from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

const YourCartWrapper = styled.div`
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 20px;
`;

const YourCartTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const YourCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const YourCartItemName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const YourCartItemPrice = styled.span`
  font-size: 18px;
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
  font-size: 20px;
  font-weight: bold;
`;

const YourCartButton = styled(Button)`
  width: 100%;
  background-color: #ff5722;
  border-color: #ff5722;
  &:hover {
    background-color: #e64a19;
    border-color: #e64a19;
  }
`;

function YourCart(props) {
  const { cartItems } = props;

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <YourCartWrapper>
      <YourCartTitle className="mb-4">Your Cart</YourCartTitle>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <YourCartItem key={item.id}>
              <YourCartItemName>{item.name}</YourCartItemName>
              <YourCartItemPrice>${item.price}</YourCartItemPrice>
            </YourCartItem>
          ))}
          <YourCartTotal>
            <YourCartTotalLabel>Total:</YourCartTotalLabel>
            <YourCartTotalValue>${totalPrice}</YourCartTotalValue>
          </YourCartTotal>
          <YourCartButton>Checkout</YourCartButton>
        </>
      )}
    </YourCartWrapper>
  );
}

export default YourCart;