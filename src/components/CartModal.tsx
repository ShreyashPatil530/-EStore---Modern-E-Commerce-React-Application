import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  cart: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  cart,
  onRemove,
  onUpdateQuantity,
  onClose,
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>

        {cart.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2 border rounded">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1">
                      <Minus size={16} />
                    </button>
                    <span className="px-3 font-bold">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1">
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="font-bold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t bg-gray-50 p-4">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-2xl font-bold text-yellow-600">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

