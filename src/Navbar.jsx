import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-logo" aria-hidden="true">
          🌿
        </span>
        <span className="navbar-brand-text">
          <span className="navbar-title">Paradise Nursery</span>
          <span className="navbar-tagline">Where Green Meets Serenity</span>
        </span>
      </Link>
      <Link to="/products" className="navbar-plants">
        Plants
      </Link>
      <Link to="/cart" className="navbar-cart-link">
        <span className="navbar-cart-icon" aria-hidden="true">🛒</span>
        <span className="cart-count">{totalQuantity}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
