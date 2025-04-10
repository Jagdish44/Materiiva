'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import { Product } from '@/app/types';
import { useCart } from '@/app/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // State to track selected quantity

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, quantity);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const imageMap: Record<string, string> = {
    "emami cement": "/products/emami-cement.png",
    "birla uttam": "/products/birla-uttam.jpg",
    "acc suraksha": "/products/acc-suraksha.jpg",
    "tata tiscon": "/products/tata-tiscon.jpg",
    "jindal tmt": "/products/jindal-tmt.jpg",
    "tufcon tmt": "/products/tufcon-tmt.jpg",
    "red soil brick": "/products/red-soil-brick.jpg",
    "fly ash brick": "/products/fly-ash-brick.jpg",
    "clay brick": "/products/clay-brick.jpg",
    "cement brick": "/products/cement-brick.jpg",
    "hollow clay brick": "/products/hollow-clay-brick.jpg",
  };

  const imageUrl = imageMap[product.name.toLowerCase()] || product.featuredImage;

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm transition duration-300 hover:shadow-md">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <div className="flex items-center">
              <FiStar className="h-4 w-4 text-yellow-400 inline mr-1" />
              <span className="text-sm text-gray-600">{product.rating}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-2">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-2">
            <label htmlFor={`quantity-${product.id}`} className="text-sm text-gray-600 mr-2">
              Quantity:
            </label>
            <select
              id={`quantity-${product.id}`}
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded px-2 py-1 text-sm"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Dynamic Price Display */}
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">
              Total: ${((product.price ?? 0) * quantity).toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              aria-label="Add to cart"
              className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              <FiShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;