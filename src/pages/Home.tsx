import React, { useState } from 'react';
import { ChevronRight, Filter } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export const Home: React.FC = () => {
  const { products, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(500);

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Photography', 'Sports'];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12 mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to EStore</h1>
        <p className="text-xl mb-6 opacity-90">Discover amazing products at great prices</p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center gap-2">
          Shop Now <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filter */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Filter size={20} /> Filters
            </h3>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="font-bold mb-4 text-primary">Category</h4>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 mr-3"
                    />
                    <span className="text-gray-700 hover:text-primary transition">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h4 className="font-bold mb-4 text-primary">Max Price</h4>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full cursor-pointer accent-secondary"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">$0</span>
                <span className="font-bold text-secondary">${priceRange}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-primary">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-gray-600 mt-2">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category</p>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
          <p className="text-gray-600">On orders over $50</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
          <p className="text-gray-600">100% secure transactions</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <div className="text-4xl mb-4">↩️</div>
          <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
          <p className="text-gray-600">30-day return policy</p>
        </div>
      </div>
    </div>
  );
};
