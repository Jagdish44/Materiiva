
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import CategoryTabs from './components/CategoryTabs';
import ProductCard from './components/ProductCard';
import CartOverlay from './components/cart/CartOverlay';
import { products } from './data/products';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
      return;
    }
  }, [router]);

  return (
    <div className="relative pb-20 min-h-screen">
      <Header />
      <CategoryTabs activeCategory="cement" onCategoryChange={() => {}} />
      <div className="px-4">
        {products
          .filter(product => product.category === 'cement')
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <CartOverlay />
      <BottomNav />
    </div>
  );
}
