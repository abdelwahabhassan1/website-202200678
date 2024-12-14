import React from 'react';
import './Home.css';

function Home({ addToCart, cartCount }) {
  const featuredCars = [
    {
      id: 1,
      imageUrl: 'https://th.bing.com/th/id/OIP.RJHO_PXmtMAm5BxCWdNwPgHaE8?rs=1&pid=ImgDetMain',
      model: 'Toyota Corolla',
      price: '20,000 Reservation downpayment=500$',
      description: 'Reliable and fuel-efficient, with a hybrid option available. Updated safety features and a modern infotainment system with Apple CarPlay and Android Auto/Affordable pricing and legendary reliability.',
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/OIP.czZ08Pgd9jMckzPuRM64rgHaEK?rs=1&pid=ImgDetMain',
      model: 'Honda Civic',
      price: '22,000 Reservation downpayment=500$',
      description: ' Sleek design, enhanced handling, advanced driver-assistance features, and a user-friendly infotainment system/Sporty feel and excellent fuel economy.',
      
    },
    {
      id: 3,
      imageUrl: 'https://th.bing.com/th/id/R.c3c410fbd1711fd251cf6ccd08ee43e8?rik=4MTnvd6FG%2bgp2Q&pid=ImgRaw&r=0',
      model: 'Kia Sportage',
      price: '35,000 Reservation downpayment=500$',
      description: ' Striking design, spacious cabin, advanced tech features, and hybrid/electric options/Versatility and excellent value for money.',
    },
    {
      id: 4,
      imageUrl: 'https://th.bing.com/th/id/R.b69cd7ff22ecabc82046c443321fc2a8?rik=vAIryGHyw9qFhw&pid=ImgRaw&r=0',
      model: 'DS7',
      price: '37,000 Reservation downpayment=500$',
      description: ' Premium materials, advanced safety features, and a plug-in hybrid option. Known for its distinctive design and French luxury/Unique styling and luxurious features.',
    },
    {
      id: 5,
      imageUrl: 'https://rentalcarsuae.com/wp-content/uploads/2023/08/Rent-Jetour-X70-Plus-2024-in-Dubai-Front-side.jpg',
      model: 'Jetour',
      price: '29,000 Reservation downpayment=500$',
      description: 'Affordable pricing, modern design, and practical features for families/Competitive pricing and spacious interiors.',
    },
    {
      id: 6,
      imageUrl: 'https://th.bing.com/th/id/OIP.FhqakuXpZadM6Jj_LLV_UQHaEK?rs=1&pid=ImgDetMain',
      model: 'Peugeot 508',
      price: '37,000 Reservation downpayment=500$',
      description: 'Stylish exterior, cutting-edge tech, digital i-Cockpit, and advanced driver-assistance systems/Bold design and innovative interior.',
    },
    {
      id: 7,
      imageUrl: 'https://th.bing.com/th/id/OIP.WER28WLNcW03_7D3SOrRMAHaEK?rs=1&pid=ImgDetMain',
      model: 'Opel insignia',
      price: '23,000 Reservation downpayment=500$',
      description: 'European styling, spacious interior, advanced safety technologies, and a refined ride quality/Premium feel at a competitive price.',
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
