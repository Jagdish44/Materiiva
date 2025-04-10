'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiX, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '@/app/context/CartContext';

const CartSidebar = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleCart}
      />

      {/* Cart sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out overflow-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={toggleCart}
              aria-label="Close cart"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {cart.items.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              onClick={toggleCart}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {cart.items.map((item) => (
                <div key={item.product.id} className="p-4 flex">
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={item.product.featuredImage}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium">{item.product.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-gray-600"
                        aria-label="Remove item"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm">
                      ${item.product.price.toFixed(2)}
                    </p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded">
                        <button
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <FiMinus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <FiPlus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">${cart.total.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Link
                href="/checkout"
                className="block w-full py-3 bg-black text-white text-center rounded-md hover:bg-gray-800 transition"
                onClick={toggleCart}
              >
                Checkout
              </Link>
              <button
                className="block w-full py-3 mt-2 border border-gray-300 text-gray-700 text-center rounded-md hover:bg-gray-50 transition"
                onClick={toggleCart}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar; 