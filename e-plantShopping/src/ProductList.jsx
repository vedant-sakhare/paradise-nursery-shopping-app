import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

export const plantsArray = [
  { category: 'Air Purifying Plants', plants: [
    { name: 'Snake Plant', price: 18, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b72?auto=format&fit=crop&w=700&q=80', description: 'A resilient upright plant for bright or low-light rooms.' },
    { name: 'Peace Lily', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80', description: 'Glossy leaves and elegant white blooms.' },
    { name: 'Spider Plant', price: 14, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80', description: 'An easy-care favorite with arching striped leaves.' },
    { name: 'Golden Pothos', price: 16, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80', description: 'Trailing green vines that brighten any shelf.' },
    { name: 'Rubber Plant', price: 29, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'Bold, deep-green leaves make a statement.' },
    { name: 'Areca Palm', price: 32, image: 'https://images.unsplash.com/photo-1597055181300-bf2c9a5e5bd4?auto=format&fit=crop&w=700&q=80', description: 'Feathery fronds add a tropical touch.' },
  ]},
  { category: 'Succulents and Cacti', plants: [
    { name: 'Echeveria', price: 9, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80', description: 'Compact rosette succulent for a sunny windowsill.' },
    { name: 'Aloe Vera', price: 12, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d9a6a4?auto=format&fit=crop&w=700&q=80', description: 'Sculptural succulent with fleshy green leaves.' },
    { name: 'Golden Barrel Cactus', price: 15, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80', description: 'A cheerful round cactus for a sunny spot.' },
    { name: 'Jade Plant', price: 17, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80', description: 'A long-lived succulent with plump oval leaves.' },
    { name: 'Haworthia', price: 11, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=700&q=80', description: 'A compact striped succulent that stays tidy.' },
    { name: 'String of Pearls', price: 21, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80', description: 'Trailing bead-like foliage for a bright shelf.' },
  ]},
  { category: 'Flowering Houseplants', plants: [
    { name: 'Anthurium', price: 27, image: 'https://images.unsplash.com/photo-1597055181300-bf2c9a5e5bd4?auto=format&fit=crop&w=700&q=80', description: 'Glossy leaves with colorful heart-shaped flowers.' },
    { name: 'African Violet', price: 13, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=700&q=80', description: 'A cheerful compact plant with violet blooms.' },
    { name: 'Phalaenopsis Orchid', price: 35, image: 'https://images.unsplash.com/photo-1566920491755-421fe8a5e5a1?auto=format&fit=crop&w=700&q=80', description: 'Elegant, long-lasting blooms for a bright room.' },
    { name: 'Christmas Cactus', price: 19, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=80', description: 'A seasonal bloomer with arching segmented stems.' },
    { name: 'Kalanchoe', price: 16, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80', description: 'A colorful flowering succulent that is easy to grow.' },
    { name: 'Bromeliad', price: 28, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80', description: 'A tropical rosette with a vivid central flower spike.' },
  ]}
];

export function Navbar({ onHomeClick, onPlantsClick, onCartClick, totalCartItems }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand" role="button" tabIndex={0} onClick={onHomeClick}
        onKeyDown={(event) => event.key === 'Enter' && onHomeClick()}>
        <span className="brand-mark">✿</span> Paradise Nursery
      </div>
      <div className="nav-links">
        <button type="button" onClick={onHomeClick}>Home</button>
        <button type="button" onClick={onPlantsClick}>Plants</button>
        <button type="button" className="cart-link" onClick={onCartClick}>
          🛒 Cart <span className="cart-count">{totalCartItems}</span>
        </button>
      </div>
    </nav>
  );
}

export default function ProductList({ onHomeClick, onPlantsClick, onCartClick, totalCartItems }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((current) => ({ ...current, [plant.name]: true }));
  };

  return (
    <>
      <Navbar onHomeClick={onHomeClick} onPlantsClick={onPlantsClick}
        onCartClick={onCartClick} totalCartItems={totalCartItems} />
      <main className="page-container">
        <p className="eyebrow">FIND YOUR NEXT FAVORITE</p>
        <h1 className="page-heading">Houseplants for every space</h1>
        <p className="page-subheading">Explore our hand-picked collection of green companions.</p>
        {plantsArray.map((category) => (
          <section className="category-section" key={category.category}>
            <h2 className="category-title">{category.category}</h2>
            <div className="plant-grid">
              {category.plants.map((plant) => {
                const isAdded = Boolean(addedToCart[plant.name]) || cartItems.some((item) => item.name === plant.name);
                return (
                  <article className="plant-card" key={plant.name}>
                    <img src={plant.image} alt={plant.name} loading="lazy" />
                    <div className="plant-info">
                      <h3>{plant.name}</h3><p>{plant.description}</p>
                      <div className="plant-bottom">
                        <span className="price">${plant.price.toFixed(2)}</span>
                        <button className="add-to-cart-button" type="button"
                          disabled={Boolean(addedToCart[plant.name]) || cartItems.some((item) => item.name === plant.name)}
                          onClick={() => handleAddToCart(plant)}>
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
