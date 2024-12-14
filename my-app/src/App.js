import React, { useState, useEffect } from 'react';
import LoginPage from './loginpage';
import Home from './Home';
import SignUpPage from './Signup';
import Cart from './Cart';
import AboutUs from './AboutUs';
import Reservations from './Reservation';

function App() {
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  
  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  
  const renderPage = () => {
    switch (window.location.pathname) {
      case '/login':
        return <LoginPage />;
      case '/home':
        return <Home addToCart={addToCart} cartCount={cartItems.length} />;
      case '/signup':
        return <SignUpPage />;
      case '/cart':
        return <Cart items={cartItems} removeFromCart={removeFromCart} />;
      case '/about': 
        return <AboutUs />;
      default:
        return <LoginPage />;
        case '/reservation':
          const userId = localStorage.getItem('userId'); // Assuming you store `userId` in localStorage
          return <Reservations userId={userId} />  
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
