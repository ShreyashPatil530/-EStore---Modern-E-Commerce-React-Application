import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
  index = 0,
}) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      style={{ animationDelay: `${index * 0.1}s` }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 duration-300 animate-slideUp"
    >
      <div className="relative h-64 bg-gray-200 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold animate-bounce">
            -{discount}%
          </div>
        )}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 left-3 bg-white p-2 rounded-full hover:bg-yellow-400 transition"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-yellow-600">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="text-xs text-gray-600 ml-2">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition disabled:bg-gray-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
