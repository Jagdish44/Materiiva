'use client';

import { useState } from 'react';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import CategoryTabs from './components/CategoryTabs';
import ProductCard from './components/ProductCard';
import CartOverlay from './components/cart/CartOverlay';
import { products } from './data/products';
import { useCart } from './context/CartContext';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('cement');
  
  // Filter products by active category
  const filteredProducts = products.filter(product => product.category === activeCategory);
  
  return (
    <div className="relative pb-20 min-h-screen">
      <Header />
      
      <CategoryTabs 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="px-4">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
      
      <CartOverlay />
      <BottomNav />
    </div>
  );
}
