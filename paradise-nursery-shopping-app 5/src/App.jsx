import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';

function Navbar() {
  const itemCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        <span className="brand-mark">✿</span>
        <span>Paradise Nursery</span>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart" aria-label={`Cart with ${itemCount} items`}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{itemCount}</span>
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main className="landing">
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="eyebrow light">MAKE ROOM FOR GREEN</p>
          <h1>Paradise Nursery</h1>
          <p className="landing-tagline">
            A greener home begins with one plant. Discover houseplants chosen to
            bring life, calm, and character to your space.
          </p>
          <Link className="button button-light" to="/plants">Get Started <span>→</span></Link>
        </div>
        <div className="landing-about"><AboutUs /></div>
      </div>
    </main>
  );
}

function PlantsPage() {
  return <><Navbar /><ProductList /></>;
}

function CartPage() {
  return <><Navbar /><CartItem /></>;
}

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
