import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6 border-b pb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 border rounded-lg">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Minus size={18} />
              </button>
              <span className="px-4 font-bold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Total Price */}
            <div className="text-right">
              <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Checkout */}
      <div className="space-y-4">
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span className="text-secondary text-2xl">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-secondary hover:text-primary transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
