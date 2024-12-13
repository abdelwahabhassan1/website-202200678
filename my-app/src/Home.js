import React from 'react';
import './Home.css';

function Home({ addToCart, cartCount }) {
  const featuredCars = [
    {
      id: 1,
      imageUrl: 'https://th.bing.com/th/id/OIP.RJHO_PXmtMAm5BxCWdNwPgHaE8?rs=1&pid=ImgDetMain',
      model: 'Toyota Corolla',
      price: '20,000',
      description: 'Reliable and fuel-efficient compact sedan Automatic/smart 1600cc.',
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/OIP.czZ08Pgd9jMckzPuRM64rgHaEK?rs=1&pid=ImgDetMain',
      model: 'Honda Civic',
      price: '22,000',
      description: 'Stylish and powerful sedan with advanced features.',
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/R.c3c410fbd1711fd251cf6ccd08ee43e8?rik=4MTnvd6FG%2bgp2Q&pid=ImgRaw&r=0',
      model: 'Kia Sportage',
      price: '35,000',
      description: 'Stylish and powerful sedan with advanced features.',
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/R.b69cd7ff22ecabc82046c443321fc2a8?rik=vAIryGHyw9qFhw&pid=ImgRaw&r=0',
      model: 'DS7',
      price: '37,000',
      description: 'Stylish and powerful sedan with advanced features.',
    },
    {
      id: 2,
      imageUrl: 'https://rentalcarsuae.com/wp-content/uploads/2023/08/Rent-Jetour-X70-Plus-2024-in-Dubai-Front-side.jpg',
      model: 'Jetour',
      price: '29,000',
      description: 'Stylish and powerful sedan with advanced features.',
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/OIP.FhqakuXpZadM6Jj_LLV_UQHaEK?rs=1&pid=ImgDetMain',
      model: 'Peugeot 508',
      price: '37,000',
      description: 'Stylish and powerful sedan with advanced features.',
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/OIP.WER28WLNcW03_7D3SOrRMAHaEK?rs=1&pid=ImgDetMain',
      model: 'Opel insignia',
      price: '23,000',
      description: 'Stylish and powerful sedan with advanced features.',
    },
    
  ];

  return (
    <div className="home-page">
      <header>
        <nav>
          <div className="logo">CarDealer</div>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/Login">Login</a></li> 
            <li><a href="/signup">Sign Up</a></li>
            
          </ul>
          <div className="cart-container">
            <a className="cart-button" href="/cart">
              🛒 Cart ({cartCount})
            </a>
          </div>
        </nav>
      </header>

      <section className="featured-cars">
        <h2>Featured Cars</h2>
        <div className="card-container">
          {featuredCars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.imageUrl} alt={car.model} />
              <h3>{car.model}</h3>
              <p>${car.price}</p>
              <p>{car.description}</p>
              <button onClick={() => addToCart(car)}>Shop Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
