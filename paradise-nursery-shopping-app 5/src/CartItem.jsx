import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice.jsx';

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formatMoney = (amount) => `$${amount.toFixed(2)}`;

  const handleCheckout = () => window.alert('Coming Soon');

  return (
    <main className="page-container">
      <p className="eyebrow">YOUR PLANT SELECTION</p>
      <h1 className="page-heading">Shopping Cart</h1>
      <p className="page-subheading">Review your plants and adjust quantities before checkout.</p>

      {items.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is ready for some greenery.</h2>
          <p>You have not added any plants yet.</p>
          <Link className="primary-button" to="/plants">Continue Shopping</Link>
        </section>
      ) : (
        <>
          <section className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product">
                  <h3>{item.name}</h3>
                  <p>Unit price: {formatMoney(item.price)}</p>
                  <button className="delete-button" type="button"
                    onClick={() => dispatch(removeItem(item.id))}>Delete item</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button className="quantity-button" type="button" aria-label="Decrease quantity"
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <strong>{item.quantity}</strong>
                  <button className="quantity-button" type="button" aria-label="Increase quantity"
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <div className="line-total">{formatMoney(item.price * item.quantity)}</div>
              </article>
            ))}
          </section>
          <section className="cart-summary">
            <div>
              <p className="eyebrow">ORDER TOTAL</p>
              <h2>{formatMoney(total)}</h2>
            </div>
            <div className="cart-actions">
              <Link className="secondary-button" to="/plants">Continue Shopping</Link>
              <button className="primary-button" type="button" onClick={handleCheckout}>Checkout</button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
