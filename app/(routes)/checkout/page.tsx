'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'credit-card'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process payment here
    console.log('Order submitted:', { formData, cart });
    setOrderComplete(true);
    clearCart();
  };

  // If no items in cart and order not complete, redirect to products
  if (cart.items.length === 0 && !orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Add some products to your cart before checking out.</p>
        <Link 
          href="/products" 
          className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // Order success screen
  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="mb-6 flex justify-center">
            <div className="bg-green-100 rounded-full p-3">
              <FiCheck className="text-green-600 w-12 h-12" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Thank you for your order!</h1>
          <p className="text-gray-600 mb-8">
            Your order has been placed and is being processed. You will receive an email confirmation shortly.
          </p>
          <p className="font-medium mb-1">Order Number: {Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</p>
          <p className="text-gray-600 mb-8">Please save this for your reference.</p>
          <Link 
            href="/products" 
            className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State / Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <input
                    type="radio"
                    id="credit-card"
                    name="paymentMethod"
                    value="credit-card"
                    checked={formData.paymentMethod === 'credit-card'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="credit-card" className="text-sm font-medium text-gray-700">
                    Credit Card
                  </label>
                </div>
                
                <div className="flex items-center mb-3">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="paypal" className="text-sm font-medium text-gray-700">
                    PayPal
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
        
        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="divide-y divide-gray-200">
              {cart.items.map((item) => (
                <div key={item.product.id} className="py-4 flex">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={item.product.featuredImage}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <h3 className="text-sm font-medium">{item.product.name}</h3>
                    <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                    <p className="text-sm mt-1">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span>{cart.total > 50 ? 'Free' : '$4.99'}</span>
              </div>
              
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span>${(cart.total * 0.1).toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                <span>Total</span>
                <span>
                  ${(cart.total + (cart.total > 50 ? 0 : 4.99) + (cart.total * 0.1)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 