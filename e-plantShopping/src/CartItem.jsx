import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import { Navbar } from './ProductList.jsx';

export default function CartItem({ onContinueShopping, onHomeClick, onCartClick, totalCartItems }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const money = (value) => `$${value.toFixed(2)}`;

  const handleIncrement = (item) => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  const handleDecrement = (item) => {
    if (item.quantity <= 1) dispatch(removeItem(item.name));
    else dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };
  const handleRemove = (item) => dispatch(removeItem(item.name));
  const handleCheckout = () => window.alert('Coming Soon');

  return (
    <>
      <Navbar onHomeClick={onHomeClick} onPlantsClick={onContinueShopping}
        onCartClick={onCartClick} totalCartItems={totalCartItems} />
      <main className="cart-container-inner">
        <p className="eyebrow">YOUR PLANT SELECTION</p>
        <h1 className="page-heading">Shopping Cart</h1>
        <p className="page-subheading">Review your plants and adjust quantities before checkout.</p>
        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty</h2><p>Add a few plants to see them here.</p>
            <button className="primary-button" type="button" onClick={onContinueShopping}>Continue Shopping</button>
          </section>
        ) : (
          <>
            <section className="cart-container">
              {cartItems.map((item) => (
                <article className="cart-row" key={item.name}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-product">
                    <h3>{item.name}</h3><p>Unit price: {money(item.price)}</p>
                    <button className="cart-item-delete" type="button" onClick={() => handleRemove(item)}>Delete</button>
                  </div>
                  <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                    <button className="quantity-button" type="button" aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>-</button>
                    <strong>{item.quantity}</strong>
                    <button className="quantity-button" type="button" aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <div className="line-total">{money(item.price * item.quantity)}</div>
                </article>
              ))}
            </section>
            <section className="cart-summary">
              <div><p className="eyebrow">TOTAL COST</p><h2>{money(totalAmount)}</h2></div>
              <div className="cart-actions">
                <button className="secondary-button" type="button" onClick={onContinueShopping}>Continue Shopping</button>
                <button className="primary-button" type="button" onClick={handleCheckout}>Checkout</button>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
