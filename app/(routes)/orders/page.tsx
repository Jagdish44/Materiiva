
'use client';

import React, { useState } from 'react';
import Header from '@/app/components/layout/Header';
import BottomNav from '@/app/components/layout/BottomNav';

const OrdersPage = () => {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch from API
    const mockOrder = localStorage.getItem(`order_${orderId}`);
    if (mockOrder) {
      setOrderDetails(JSON.parse(mockOrder));
    } else {
      alert('Order not found');
    }
  };

  const maskName = (name: string) => {
    return name.charAt(0) + '*'.repeat(name.length - 2) + name.charAt(name.length - 1);
  };

  const maskPhone = (phone: string) => {
    return '***' + phone.slice(-3);
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Track Order</h1>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter Order ID"
              className="flex-1 px-3 py-2 border rounded-md"
            />
            <button type="submit" className="px-4 py-2 bg-[#C3E0DF] rounded-md">
              Search
            </button>
          </div>
        </form>

        {orderDetails && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-medium mb-4">Order Details</h2>
            <p>Name: {maskName(orderDetails.name)}</p>
            <p>Phone: {maskPhone(orderDetails.phone)}</p>
            <div className="mt-4">
              <h3 className="font-medium mb-2">Items:</h3>
              {orderDetails.items.map((item: any, index: number) => (
                <div key={index} className="border-t py-2">
                  <p>{item.product.name}</p>
                  {item.batches.map((batch: any, batchIndex: number) => (
                    <p key={batchIndex} className="text-sm text-gray-600">
                      Batch {batch.number}: {batch.quantity} pieces
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default OrdersPage;
