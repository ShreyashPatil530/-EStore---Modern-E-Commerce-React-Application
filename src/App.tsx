// ============================================
// FILE: src/App.tsx
// ============================================

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductsGrid } from './components/ProductsGrid';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { useStore } from './hooks/useStore';
import { ALL_PRODUCTS } from './data/products';

const CATEGORIES = ['All', 'Electronics', 'Fashion', 'Home', 'Sports', 'Photography'];

function App() {
  const { cart, favorites, addToCart, removeFromCart, updateQuantity, toggleFavorite } = useStore();
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cart={cart} onCartClick={() => setCartOpen(true)} />
      <HeroSection onAddToCart={addToCart} />
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductsGrid
        products={filteredProducts}
        selectedCategory={selectedCategory}
        favorites={favorites}
        onAddToCart={addToCart}
        onToggleFavorite={toggleFavorite}
      />
      <FeaturesSection />
      <Footer />

      {cartOpen && (
        <CartModal
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClose={() => setCartOpen(false)}
        />
      )}
    </div>
  );
}

export default App;