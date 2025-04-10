'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';
import { useCart } from '@/app/context/CartContext';
import { products } from '@/app/data/products';
import Header from '@/app/components/layout/Header';
import BottomNav from '@/app/components/layout/BottomNav';
import CategoryTabs from '@/app/components/CategoryTabs';
import CartOverlay from '@/app/components/cart/CartOverlay';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { addToCart } = useCart();
  
  // Find the product by ID
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const handleBuyNow = () => {
    // Generate a random order ID
    const randomOrderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomOrderId);
    setShowOrderSummary(true);
  };

  const handleCloseOrderSummary = () => {
    setShowOrderSummary(false);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Order summary view
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
  
  return (
    <div className="relative pb-20 min-h-screen">
      <Header />
      
      <CategoryTabs 
        activeCategory={product.category}
        onCategoryChange={() => {}}
      />
      
      <div className="p-4">
        <div className="bg-white rounded-lg overflow-hidden mb-4 shadow-sm p-4">
          <div className="flex justify-center mb-4">
            <div className="relative h-40 w-40">
              <Image
                src={product.featuredImage}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          
          {/* Product details */}
          <div className="mb-6">
            {product.details?.grade && (
              <p className="text-sm mb-1">
                <span className="font-medium">Grade:</span> {product.details.grade}
              </p>
            )}
            
            {product.details?.type && (
              <p className="text-sm mb-1">
                <span className="font-medium">Type:</span> {product.details.type}
              </p>
            )}
            
            {product.details?.packagingType && (
              <p className="text-sm mb-1">
                <span className="font-medium">Packaging Type:</span> {product.details.packagingType}
              </p>
            )}
            
            {product.details?.packagingSize && (
              <p className="text-sm mb-1">
                <span className="font-medium">Packaging Size:</span> {product.details.packagingSize}
              </p>
            )}
            
            {product.details?.settingTime && (
              <p className="text-sm mb-1">
                <span className="font-medium">Setting Time:</span> {product.details.settingTime}
              </p>
            )}
            
            <p className="font-medium mt-2">In Stock</p>
          </div>
          
          {/* Quantity selector */}
          <div className="flex justify-between items-center border rounded p-1 mb-6">
            <button 
              onClick={decreaseQuantity}
              className="px-3 py-1 text-gray-600"
            >
              −
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-12 text-center border-none focus:outline-none"
            />
            <button 
              onClick={increaseQuantity}
              className="px-3 py-1 text-gray-600"
            >
              +
            </button>
          </div>
          
          {/* Add to cart button */}
          <button
            onClick={handleBuyNow}
            className="w-full py-3 bg-[#C3E0DF] text-black text-center rounded-md"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      
      <CartOverlay />
      <BottomNav />
    </div>
  );
} 