'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlus, FiMinus, FiCheck } from 'react-icons/fi';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [batches, setBatches] = useState([{ number: 1, quantity: 1 }]);
  const [currentBatch, setCurrentBatch] = useState({ number: 1, quantity: 1 });
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleBuyClick = () => {
    if (showQuantitySelector) {
      setBatches([...batches, currentBatch]);
      setShowOrderForm(true);
    } else {
      setShowQuantitySelector(true);
    }
  };

  const handleOrderSubmit = (formData: { name: string; phone: string; email: string }) => {
    const randomOrderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomOrderId);

    const orderDetails = {
      ...formData,
      items: [{
        product,
        batches
      }]
    };
    localStorage.setItem(`order_${randomOrderId}`, JSON.stringify(orderDetails));

    setShowOrderSummary(true);
    setShowOrderForm(false);
  };

  const handleCloseOrderSummary = () => {
    setShowOrderSummary(false);
    setShowQuantitySelector(false);
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (showOrderSummary) {
    return (
      <div className="fixed inset-0 bg-white z-50 p-4 overflow-auto">
        <div className="max-w-md mx-auto">
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
            <div className="flex justify-between py-2">
              <div className="flex items-center">
                <span className="text-sm font-medium mr-2">{quantity} ×</span>
                <span>{product.name}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleCloseOrderSummary}
            className="w-full py-3 bg-[#C3E0DF] text-black text-center rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (showOrderForm) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md mx-4">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="text-xl">Complete your profile</h3>
            <p className="text-sm opacity-80">Profile Status: 0% Complete</p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleOrderSubmit(formData);
          }} className="p-4">
            <div className="space-y-4">
              <div>
                <label className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">•</span>
                  Add your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">•</span>
                  Add your Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">•</span>
                  Add your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="mt-6 flex space-x-3">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowOrderForm(false)}
                className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-white rounded-lg overflow-hidden mb-4 shadow-sm">
      <div className="w-1/3 p-3 flex items-center justify-center">
        <div className="relative h-24 w-24">
          <Image
            src={product.featuredImage}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-2/3 p-3 flex flex-col justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-medium">{product.name}</h3>

          {product.details?.grade && (
            <p className="text-sm text-gray-700">
              Grade: {product.details.grade}
            </p>
          )}

          {product.details?.type && (
            <p className="text-sm text-gray-700">
              Type: {product.details.type}
            </p>
          )}

          {product.details?.packagingType && (
            <p className="text-sm text-gray-700">
              Packaging Type: {product.details.packagingType}
            </p>
          )}

          {product.details?.packagingSize && (
            <p className="text-sm text-gray-700">
              Packaging Size: {product.details.packagingSize}
            </p>
          )}

          {product.details?.settingTime && (
            <p className="text-sm text-gray-700">
              Setting Time: {product.details.settingTime}
            </p>
          )}

          <p className="text-sm font-medium">In Stock</p>
        </div>

        <div className="flex flex-col items-end mt-2">
          {showQuantitySelector && (
            <div className="space-y-2">
              <div className="flex items-center border rounded">
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  min="1"
                  value={quantity}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value) || 1;
                    setQuantity(Math.max(1, newValue));
                  }}
                  onBlur={(e) => {
                    const newValue = parseInt(e.target.value) || 1;
                    if (window.confirm(`Confirm Quantity: ${newValue}?`)) {
                      setQuantity(newValue);
                    } else {
                      setQuantity(1);
                    }
                  }}
                  className="w-16 text-center focus:outline-none px-3 text-sm"
                />
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm text-gray-600">
                Total: ${((product.price ?? 0) * quantity).toFixed(2)}
              </div>
            </div>
          )}

          <button
            onClick={handleBuyClick}
            className="self-end bg-[#C3E0DF] text-black px-4 py-2 rounded-md"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;