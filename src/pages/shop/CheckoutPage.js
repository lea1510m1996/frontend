import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";

const CheckoutPage = () => {
    const [cart, setCart] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        country: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(localCart);
    }, []);

    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleQuantityChange = (id, quantity) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => 
                item.id === id ? { ...item, quantity: quantity } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const handleRemoveItem = (id) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order placed:", formData, cart);
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        setCart([]);
    };

    return (
        <div className="checkout container py-5">
            <h1 className="mb-5">Checkout</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="row checkout">
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                {cart.map((item) => (
                                    <div className="row cart-item mb-3" key={item.id}>
                                        <div className="col-md-3">
                                            <img src={item.thumbnail} alt={item.title} className="img-fluid rounded" />
                                        </div>
                                        <div className="col-md-5">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="text-muted">{item.category}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="input-group">
                                                <button 
                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)} 
                                                    className="btn btn-outline-secondary btn-sm"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                    className="form-control form-control-sm text-center"
                                                />
                                                <button 
                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)} 
                                                    className="btn btn-outline-secondary btn-sm"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-end">
                                            <p className="fw-bold">{(item.price * item.quantity).toFixed(2)} EUR</p>
                                            <button 
                                                onClick={() => handleRemoveItem(item.id)} 
                                                className="btn btn-danger"
                                            >
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <hr />
                            </div>
                        </div>

                        <div className="text-start mb-4">
                            <a href="/shop" className="btn btn-outline-primary">
                                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />Continue Shopping
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card cart-summary">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Order Summary</h5>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Subtotal</span>
                                    <span>{(totalPrice() - (totalPrice() * 0.25)).toFixed(2)} EUR</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Shipping</span>
                                    <span>$0 EUR</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Tax</span>
                                    <span>{(totalPrice() * 0.25).toFixed(2)} EUR</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-4">
                                    <strong>Total</strong>
                                    <strong>{totalPrice()} EUR</strong>
                                </div>
                                <form onSubmit={handleSubmit} className="checkout-form">
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="country"
                                            placeholder="Country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            placeholder="Card Number"
                                            value={formData.cardNumber}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            placeholder="MM/YY"
                                            value={formData.expiryDate}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="cvv"
                                            placeholder="CVV"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success w-100">Place Order</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
