import React from 'react';
import './Cart.css';

function Cart({ items, removeFromCart }) {
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
        ) : (
          <p>Your cart is empty.</p>
        )}
      </section>
    </div>
  );
}

export default Cart;
