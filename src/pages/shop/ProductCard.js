import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Shop.css';

const ProductCard = ({ product }) => {
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = () => {
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 3000);

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                thumbnail: product.thumbnail,
                title: product.title,
                price: product.price,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className="productCard card" key={product.id}>
            <div className="product-image">
                <Link to={`/shop/${product.id}`}>
                    <img src={product.thumbnail} className="card-img" alt={product.title} />
                </Link>
                {/* Uklonili smo Link oko naziva */}
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <div className="button-container">
                    <p className="product-price"><strong>{product.price.toFixed(2)} EUR</strong></p>
                    <button onClick={addToCart} className="btn btn-success cart-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                </div>
                {addedToCart && (
                    <div className="cart-notification">
                        ✅ Proizvod je dodan u košaricu! <Link to="/checkout">Pogledaj košaricu</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
