import React from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

const ProductItemWrapper = styled.div`
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-bottom: 30px;
  background-color: #fff;
`;

const ProductImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProductBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const ProductName = styled(Card.Title)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductTitle = styled(Card.Text)`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductPrice = styled(Card.Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductButton = styled(Button)`
  width: 100%;
  background-color: #ff5722;
  border-color: #ff5722;
  &:hover {
    background-color: #e64a19;
    border-color: #e64a19;
  }
`;

function ProductItem(props) {
    const { product, addToCart } = props;

    const handleClick = () => {
        addToCart(product);
    };

    return (
        <ProductItemWrapper>
            <ProductImage src={product.image} alt={product.name} />
            <ProductBody>
                <div>
                    <ProductName>{product.name}</ProductName>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>${product.price}</ProductPrice>
                </div>
                <ProductButton onClick={handleClick}>Add to Cart</ProductButton>
            </ProductBody>
        </ProductItemWrapper>
    );
}

export default ProductItem;