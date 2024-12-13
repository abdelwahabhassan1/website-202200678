import React, { useState, useEffect } from 'react';
import './product.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:555/cars'); 
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-page-container">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.ID}>
            <h2>{product.MAKE} {product.MODEL}</h2>
            <p>Year: {product.YEAR}</p>
            <p>Price: ${product.PRICE}</p>
            <p>Quantity Available: {product.QUANTITY}</p>
            <button
              className="view-details-btn"
              onClick={() => window.location.href = `/product/${product.ID}`}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
