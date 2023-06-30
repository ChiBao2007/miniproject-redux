import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const ListProductsContainer = styled.div`
  margin-top: 30px;
`;

const ListProductsTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

function ListProducts(props) {
    const products = [
        {
            id: 1,
            name: "Pizza",
            title: "Delicious Pizza",
            price: 10,
            image:
                "https://vnvinaphone.vn/wp-content/uploads/2021/11/Veggie-mania.jpg",
            quantity: 10,
        },
        {
            id: 2,
            name: "Hamburger",
            title: "Juicy Hamburger",
            price: 20,
            image:
                "https://xebanhmithonhiky.vn/wp-content/uploads/2020/11/C%C3%A1ch-l%C3%A0m-v%E1%BB%8F-b%C3%A1nh-m%C3%AC-humberger.jpg",
            quantity: 20,
        },
        {
            id: 3,
            name: "Bread",
            title: "Fresh Bread",
            price: 30,
            image:
                "https://image.baophapluat.vn/1200x630/Uploaded/2023/bcivvowk/2021_07_13/184777263-111751194426558-1223235248964044224-n-2537.jpg",
            quantity: 30,
        },
        {
            id: 4,
            name: "Cake",
            title: "Sweet Cake",
            price: 30,
            image:
                "https://cdn.shopify.com/s/files/1/0018/9340/0623/products/ChocoCreammakebyCakeplaza_512x.jpg?v=1608190513",
            quantity: 40,
        },
        {
            id: 5,
            name: "Milk Tea",
            title: "Authentic Hong Kong Milk Tea",
            price: 4,
            image: "https://thewoksoflife.com/wp-content/uploads/2019/02/hong-kong-milk-tea.jpg",
            quantity: 50,
        }
    ];

    return (
        <ListProductsContainer>
            <ListProductsTitle>List Products</ListProductsTitle>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} lg={6} md={6} sm={12}>
                        <ProductItem product={product} addToCart={props.addToCart} />
                    </Col>
                ))}
            </Row>
        </ListProductsContainer>
    );
}

export default ListProducts;