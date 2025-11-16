import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cart, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold">
            <span className="text-yellow-400">E</span>Store
          </div>
          <nav className="hidden md:flex gap-6 flex-1 ml-12">
            <a href="#" className="hover:text-yellow-400 transition">Home</a>
            <a href="#" className="hover:text-yellow-400 transition">Shop</a>
            <a href="#" className="hover:text-yellow-400 transition">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative hover:text-yellow-400 transition"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};