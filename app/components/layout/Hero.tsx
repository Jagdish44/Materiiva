'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-gray-100 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Premium Quality Lifestyle Products
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Discover our collection of carefully curated, ethically sourced products designed to elevate your home and lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="/hero-image.jpg"
            alt="Premium lifestyle products arrangement"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero; 