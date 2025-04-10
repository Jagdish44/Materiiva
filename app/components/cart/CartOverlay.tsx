'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiX, FiPlus, FiMinus, FiCheck } from 'react-icons/fi';
import { useCart } from '@/app/context/CartContext';

const CartOverlay = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    // Generate a random order ID
    const randomOrderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomOrderId);
    setShowOrderSummary(true);
  };

  const handleCloseOrderSummary = () => {
    setShowOrderSummary(false);
    toggleCart();
    clearCart();
  };

  // Order summary view
  if (showOrderSummary) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleCloseOrderSummary}
        />

        <div className="fixed left-4 right-4 bottom-20 top-20 bg-white z-50 rounded-lg overflow-auto">
          <div className="p-4 border-b border-gray-200 sticky top-0 bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Order Summary</h2>
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={handleCloseOrderSummary}
                aria-label="Close order summary"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-3">
                <FiCheck className="text-green-600 w-10 h-10" />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium mb-2">Order Confirmed!</h3>
              <p className="text-gray-600">Your order has been placed successfully.</p>
              <p className="font-medium mt-4">Order ID: {orderId}</p>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <h3 className="font-medium mb-3">Order Details</h3>
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">{item.quantity} ×</span>
                    <span>{item.product.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleCloseOrderSummary}
              className="w-full py-3 bg-[#C3E0DF] text-black text-center rounded-md"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </>
    );
  }

  // Regular cart view
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleCart}
      />

      {/* Cart container */}
      <div className="fixed left-4 right-4 bottom-20 top-20 bg-white z-50 rounded-lg overflow-auto">
        <div className="p-4 border-b border-gray-200 sticky top-0 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Your Cart</h2>
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
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {cart.items.map((item) => (
                <div key={item.product.id} className="p-4 flex">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={item.product.featuredImage}
                      alt={item.product.name}
                      fill
                      className="object-contain"
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
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                    
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
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white">
              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-[#C3E0DF] text-black text-center rounded-md"
              >
                Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartOverlay; 