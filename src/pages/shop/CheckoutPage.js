import React, { useState, useEffect } from "react";
import "./Shop";

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
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order placed:", formData, cart);
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        setCart([]);
    };

    return (
        <div className="checkout container">
            <h1>Checkout</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                                          <td>
                {/* Dodajemo sliku proizvoda */}
                <img src={item.thumbnail} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                {item.title}
            </td>
                                    <td>
              
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                            className="quantity-input"
                                        />
                                    </td>
                                    <td>{(item.price * item.quantity).toFixed(2)} EUR</td>
                                    <td>
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3 className="total-price">Total: {totalPrice()} EUR</h3>

                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Place Order</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default CheckoutPage;