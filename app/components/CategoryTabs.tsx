'use client';

import React from 'react';
import { categories } from '../data/products';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex justify-between rounded-full overflow-hidden bg-[#C3E0DF] mx-4 mb-4">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`flex-1 py-3 px-2 text-center ${
            activeCategory === category.id 
              ? 'rounded-full' 
              : 'bg-transparent'
          }`}
          style={{
            backgroundColor: activeCategory === category.id ? '#C3E0DF' : 'transparent',
            boxShadow: activeCategory === category.id ? 'none' : 'none'
          }}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs; 