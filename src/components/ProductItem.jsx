import React from "react";

function ProductItem(props) {
    const { id, name, title, price, image, quantity } = props.product;

    return (
        <div>
            <h3>{name}</h3>
            <p>{title}</p>
            
            <img src={image} alt={name} />
            <p>Price: ${price.toFixed(2)}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => props.addToCart(props.product)}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;