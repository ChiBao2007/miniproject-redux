import React from "react";
import ProductItem from "./ProductItem";
import "../css/ListProducts.css";

function ListProducts(props) {
    const products = [
        {
            id: 1,
            name: "Pizza",
            title: "Delicious Pizza",
            price: 10,
            image: "https://vnvinaphone.vn/wp-content/uploads/2021/11/Veggie-mania.jpg",
            quantity: 10,
        },
        {
            id: 2,
            name: "Hamburger",
            title: "Juicy Hamburger",
            price: 20,
            image: "https://xebanhmithonhiky.vn/wp-content/uploads/2020/11/C%C3%A1ch-l%C3%A0m-v%E1%BB%8F-b%C3%A1nh-m%C3%AC-humberger.jpg",
            quantity: 20,
        },
        {
            id: 3,
            name: "Bread",
            title: "Fresh Bread",
            price: 30,
            image: "https://image.baophapluat.vn/1200x630/Uploaded/2023/bcivvowk/2021_07_13/184777263-111751194426558-1223235248964044224-n-2537.jpg",
            quantity: 30,
        },
        {
            id: 4,
            name: "Cake",
            title: "Sweet Cake",
            price: 30,
            image: "https://www.southernliving.com/thmb/6jANEFrMvwSWlRlxCDCzulxXQZY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2641101_Funfetti_Cake_702-2000-a2d8f835fd8f4a928fa17222e71241c3.jpg",
            quantity: 40,
        },
    ];

    return (
        <div className="list-products-container">
            <h2>List Products</h2>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    addToCart={props.addToCart}
                    className="product-item"
                />
            ))}
        </div>
    );
}

export default ListProducts;