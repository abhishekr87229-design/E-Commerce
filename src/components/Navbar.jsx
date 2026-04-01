import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount } = useContext(CartContext);
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories } = useContext(ProductContext);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleAuthClick = () => {
    if (currentUser) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="nav-menu-icon"><Menu size={24} /></div>
        <Link to="/" className="nav-logo">
          <h2>AMZClone</h2>
        </Link>
      </div>

      <div className="nav-fill">
        <form className="nav-searchbar" onSubmit={handleSearchSubmit}>
          <select 
            className="nav-search-facade" 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
          <input 
            type="text" 
            className="nav-search-input" 
            placeholder="Search Amazon Clone" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="nav-search-submit">
            <Search size={20} color="#333" />
          </button>
        </form>
      </div>

      <div className="nav-right">
        <div className="nav-item" onClick={handleAuthClick} style={{ cursor: 'pointer' }}>
          <span className="nav-line-1">Hello, {currentUser ? currentUser.name.split(' ')[0] : 'sign in'}</span>
          <span className="nav-line-2">{currentUser ? 'Sign Out' : 'Account & Lists'}</span>
        </div>
        
        <Link to="/checkout" className="nav-item nav-cart">
          <div className="cart-icon-wrapper">
            <span className="cart-count">{getCartCount()}</span>
            <ShoppingCart size={32} />
          </div>
          <span className="nav-line-2 cart-text">Cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
