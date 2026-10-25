import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

const plants = [
  { id: 'ap1', name: 'Snake Plant', price: 18, category: 'Air-Purifying Plants', description: 'A resilient upright plant that tolerates low light.', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b72?auto=format&fit=crop&w=900&q=80' },
  { id: 'ap2', name: 'Peace Lily', price: 24, category: 'Air-Purifying Plants', description: 'Glossy green leaves with elegant white blooms.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=80' },
  { id: 'ap3', name: 'Spider Plant', price: 14, category: 'Air-Purifying Plants', description: 'An easy-care favorite with arching striped leaves.', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=900&q=80' },
  { id: 'ap4', name: 'Golden Pothos', price: 16, category: 'Air-Purifying Plants', description: 'Trailing vines brighten shelves and hanging planters.', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80' },
  { id: 'ap5', name: 'Rubber Plant', price: 29, category: 'Air-Purifying Plants', description: 'Bold, deep-green leaves make a statement indoors.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80' },
  { id: 'ap6', name: 'Areca Palm', price: 32, category: 'Air-Purifying Plants', description: 'Feathery fronds bring a tropical feel to a room.', image: 'https://images.unsplash.com/photo-1597055181300-bf2c9a5e5bd4?auto=format&fit=crop&w=900&q=80' },
  { id: 'su1', name: 'Echeveria', price: 9, category: 'Succulents & Cacti', description: 'A compact rosette succulent for a sunny sill.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80' },
  { id: 'su2', name: 'Aloe Vera', price: 12, category: 'Succulents & Cacti', description: 'A sculptural succulent with fleshy green leaves.', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d9a6a4?auto=format&fit=crop&w=900&q=80' },
  { id: 'su3', name: 'Golden Barrel Cactus', price: 15, category: 'Succulents & Cacti', description: 'A sunny little cactus with a rounded silhouette.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80' },
  { id: 'su4', name: 'Jade Plant', price: 17, category: 'Succulents & Cacti', description: 'A long-lived succulent with plump oval leaves.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80' },
  { id: 'su5', name: 'Haworthia', price: 11, category: 'Succulents & Cacti', description: 'A small striped succulent that stays neat and tidy.', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=900&q=80' },
  { id: 'su6', name: 'String of Pearls', price: 21, category: 'Succulents & Cacti', description: 'Trailing bead-like foliage for a bright shelf.', image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=900&q=80' },
  { id: 'fl1', name: 'Anthurium', price: 27, category: 'Flowering Houseplants', description: 'Glossy leaves and colorful heart-shaped spathes.', image: 'https://images.unsplash.com/photo-1597055181300-bf2c9a5e5bd4?auto=format&fit=crop&w=900&q=80' },
  { id: 'fl2', name: 'African Violet', price: 13, category: 'Flowering Houseplants', description: 'A cheerful compact plant with violet blooms.', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=900&q=80' },
  { id: 'fl3', name: 'Phalaenopsis Orchid', price: 35, category: 'Flowering Houseplants', description: 'Elegant long-lasting blooms for a bright room.', image: 'https://images.unsplash.com/photo-1566920491755-421fe8a5e5a1?auto=format&fit=crop&w=900&q=80' },
  { id: 'fl4', name: 'Christmas Cactus', price: 19, category: 'Flowering Houseplants', description: 'A festive bloomer with arching segmented stems.', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80' },
  { id: 'fl5', name: 'Kalanchoe', price: 16, category: 'Flowering Houseplants', description: 'A cheerful flowering succulent in bright colors.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80' },
  { id: 'fl6', name: 'Bromeliad', price: 28, category: 'Flowering Houseplants', description: 'A tropical rosette with a vivid central flower spike.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80' },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <main className="page-container">
      <p className="eyebrow">FIND YOUR NEXT FAVORITE</p>
      <h1 className="page-heading">Houseplants for every space</h1>
      <p className="page-subheading">Shop our curated collection of easy-care greenery, succulents, and flowering plants.</p>
      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="plant-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const isAdded = items.some((item) => item.id === plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="plant-bottom">
                      <span className="price">${plant.price.toFixed(2)}</span>
                      <button className="add-button" type="button" disabled={isAdded}
                        onClick={() => dispatch(addItem(plant))}>
                        {isAdded ? 'Added ✓' : 'Add to Cart'}
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
  );
}
