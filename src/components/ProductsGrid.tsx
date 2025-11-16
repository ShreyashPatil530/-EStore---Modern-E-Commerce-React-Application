import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductsGridProps {
  products: Product[];
  selectedCategory: string;
  favorites: number[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (id: number) => void;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  selectedCategory,
  favorites,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        {selectedCategory === 'All' ? 'All Products' : selectedCategory}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
