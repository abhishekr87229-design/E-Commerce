import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title" title={product.title}>{product.title}</h3>
        <div className="product-rating">
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
          <span className="rating-number">{product.rating}</span>
        </div>
        <div className="product-price">
          <span className="currency">$</span>
          <span className="amount">{Math.floor(product.price)}</span>
          <span className="cents">
            {((product.price % 1) * 100).toFixed(0).padStart(2, '0')}
          </span>
        </div>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
