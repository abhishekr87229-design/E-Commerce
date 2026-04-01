import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, getCartCount, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order Placed Successfully!");
    clearCart();
    navigate('/');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-left">
        <h2>Shopping Cart</h2>
        <hr />
        
        {cartItems.length === 0 ? (
          <p>Your Amazon Clone Cart is empty.</p>
        ) : (
          <div className="cart-list">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="separator">|</span>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="checkout-right">
        <div className="order-summary">
          <h3>Subtotal ({getCartCount()} items): <strong>${getCartTotal().toFixed(2)}</strong></h3>
          
          <form onSubmit={handlePlaceOrder} className="checkout-form">
            <div className="form-group">
              <label>Shipping Address</label>
              <input type="text" placeholder="123 Main St" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Zip Code" required />
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select required>
                <option value="card">Credit Card ending in xxxx</option>
                <option value="paypal">PayPal</option>
                <option value="amazon">Amazon Store Card</option>
              </select>
            </div>

            <button type="submit" className="place-order-btn">
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
