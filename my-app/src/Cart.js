import React from 'react';
import './Cart.css';

function Cart({ items, removeFromCart }) {
  const handleProceedToCheckout = async () => {
    if (items.length === 0) {
      alert('Your cart is empty. Add items before proceeding to checkout.');
      return;
    }

    
    const userId = localStorage.getItem('userId'); 
    const downPayment = 500; 

    if (!userId) {
      alert('You must be logged in to proceed to checkout.');
      return;
    }

    // Prepare the request body
    const requestBody = {
      userId: parseInt(userId),
      cartItems: items.map((item) => ({
        id: item.id,
        quantity: 1, // You can add quantity tracking in your cart logic if needed
      })),
      downPayment,
    };

    try {
      const response = await fetch('http://localhost:555/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert('Checkout successful! Redirecting to reservations...');
        window.location.href = '/reservations'; // Navigate to the reservations page
      } else {
        const error = await response.text();
        alert(`Error during checkout: ${error}`);
      }
    } catch (err) {
      console.error('Error during checkout:', err);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo">CarDealer</div>
          <a className="back-button" href="/home">
            ← Back to Home
          </a>
        </nav>
      </header>

      <section className="cart-section">
        <h2>Your Cart</h2>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <img src={item.imageUrl} alt={item.model} />
                  <div>
                    <h3>{item.model}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="checkout-button-container">
              <button
                onClick={handleProceedToCheckout}
                className="checkout-button"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </section>
    </div>
  );
}

export default Cart;
