'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiShoppingCart, FiPackage } from 'react-icons/fi';

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#C3E0DF] py-4 px-6 flex justify-between items-center z-50">
      <Link 
        href="/" 
        className="flex flex-col items-center"
      >
        <FiHome className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </Link>

      <Link 
        href="/cart" 
        className="flex flex-col items-center"
      >
        <FiShoppingCart className="h-6 w-6" />
        <span className="text-xs mt-1">Cart</span>
      </Link>

      <Link 
        href="/orders" 
        className={`flex flex-col items-center ${pathname === '/orders' ? 'text-black' : 'text-gray-500'}`}
      >
        <FiPackage className="h-6 w-6" />
        <span className="text-xs mt-1">Orders</span>
      </Link>
    </div>
  );
};

export default BottomNav;