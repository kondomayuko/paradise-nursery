import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>
          Welcome To
          <br />
          Paradise Nursery
        </h1>
        <div className="landing-heading-divider" aria-hidden="true" />
        <p className="subtitle">Where Green Meets Serenity</p>
        <Link to="/products">
          <button type="button" className="get-started-btn">Get Started</button>
        </Link>
      </div>
      <div className="about-section">
        <AboutUs />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/paradise-nursery">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;