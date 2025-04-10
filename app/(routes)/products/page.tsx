import React from 'react';
import { products } from '@/app/data/products';
import ProductGrid from '@/app/components/product/ProductGrid';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-700 hover:text-black focus:outline-none">
                  All
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-black focus:outline-none">
                  Home Decor
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-black focus:outline-none">
                  Furniture
                </button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-black focus:outline-none">
                  Bedding
                </button>
              </li>
            </ul>

            <h2 className="text-lg font-medium mt-8 mb-4">Price</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="price-1" 
                  className="mr-2"
                />
                <label htmlFor="price-1" className="text-gray-600">
                  Under $50
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="price-2" 
                  className="mr-2"
                />
                <label htmlFor="price-2" className="text-gray-600">
                  $50 - $100
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="price-3" 
                  className="mr-2"
                />
                <label htmlFor="price-3" className="text-gray-600">
                  $100 - $200
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="price-4" 
                  className="mr-2"
                />
                <label htmlFor="price-4" className="text-gray-600">
                  Over $200
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
} 