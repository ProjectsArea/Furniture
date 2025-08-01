import React from 'react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {items.length === 0 ? (
        <div className="text-xl">Your cart is empty.</div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6">
            {items.map(item => (
              <li key={item.id} className="flex items-center py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                <div className="flex-1">
                  <div className="font-semibold text-lg">{item.name}</div>
                  <div className="text-gray-600">Qty: {item.quantity}</div>
                  <div className="text-gray-900 font-bold">Rs {item.price.toLocaleString('en-IN')}</div>
                </div>
                <button
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold mb-4">Total: Rs {total.toLocaleString('en-IN')}</div>
          <button
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
