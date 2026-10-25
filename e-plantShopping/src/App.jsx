import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };
  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };
  const handlePlantsClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };
  const handleCartClick = () => {
    setShowProductList(false);
    setShowCart(true);
  };
  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  return (
    <div className="app">
      {!showProductList && !showCart && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <div className="landing-divider" />
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick} type="button">Get Started</button>
          </div>
          <AboutUs />
        </div>
      )}
      {showProductList && (
        <div className="product-list-container visible">
          <ProductList onHomeClick={handleHomeClick} onPlantsClick={handlePlantsClick}
            onCartClick={handleCartClick} totalCartItems={totalCartItems} />
        </div>
      )}
      {showCart && (
        <div className="cart-page-visible">
          <CartItem onContinueShopping={handleContinueShopping} onHomeClick={handleHomeClick}
            onCartClick={handleCartClick} totalCartItems={totalCartItems} />
        </div>
      )}
    </div>
  );
}
