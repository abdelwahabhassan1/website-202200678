import React, { useState } from 'react';
import './CheckoutPage.css';

function CheckoutPage({ selectedCar }) {
  const [downPayment, setDownPayment] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!downPayment || isNaN(downPayment) || Number(downPayment) <= 0) {
      setError('Please enter a valid down payment amount');
      return;
    }

    try {
      const response = await fetch('http://localhost:555/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carId: selectedCar.id,
          downPayment: Number(downPayment),
        }),
      });

      if (response.ok) {
        setSuccessMessage(`Reservation successful for ${selectedCar.model}.`);
        setError('');
      } else {
        const message = await response.text();
        setError(message);
      }
    } catch (err) {
      setError('An error occurred during checkout.');
      console.error(err);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="car-details">
        <h3>{selectedCar.model}</h3>
        <p>Price: ${selectedCar.price}</p>
        <p>{selectedCar.description}</p>
      </div>
      <form onSubmit={handleCheckout}>
        <div className="input-group">
          <label htmlFor="downPayment">Down Payment</label>
          <input
            type="number"
            id="downPayment"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="Enter down payment amount"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button type="submit" className="checkout-btn">Reserve Now</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
