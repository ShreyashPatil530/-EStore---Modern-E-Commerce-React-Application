import React from 'react';
import { Cart } from '../components/Cart';

export const CartPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary">Shopping Cart</h1>
      <Cart />
    </div>
  );
};