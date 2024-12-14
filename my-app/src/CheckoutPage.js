import React, { useState } from 'react';
import './CheckoutPage.css';

function CheckoutPage({ cartItems, clearCart }) {
    const [downPayment, setDownPayment] = useState(0);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleCheckout = async () => {
        if (downPayment <= 0) {
            setError('Please enter a valid down payment.');
            return;
        }

        const userId = localStorage.getItem('userId'); // Get userId from localStorage
        if (!userId) {
            setError('You must be logged in to complete the checkout.');
            return;
        }

        try {
            const response = await fetch('http://localhost:555/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    cartItems,
                    downPayment,
                }),
            });

            if (response.ok) {
                setSuccess('Checkout successful! Thank you for your reservation.');
                clearCart(); // Clear cart on successful checkout

                // Preserve the session if necessary (e.g., userId is still in localStorage)
                setTimeout(() => {
                    window.location.href = '/home'; // Redirect to home after checkout
                }, 2000); // Wait for 2 seconds before redirecting
            } else {
                const message = await response.text();
                setError(message);
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred during checkout.');
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-summary">
                        <h3>Your Items</h3>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                    {item.model} - ${item.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="payment-section">
                        <label>
                            Down Payment:
                            <input
                                type="number"
                                value={downPayment}
                                onChange={(e) => setDownPayment(Number(e.target.value))}
                                placeholder="Enter down payment"
                            />
                        </label>
                        {error && <p className="error-message">{error}</p>}
                        {success && <p className="success-message">{success}</p>}
                        <button onClick={handleCheckout} className="checkout-btn">
                            Complete Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CheckoutPage;
