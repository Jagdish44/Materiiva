'use client';

import React from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ username = 'to' }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image 
            src="/user-profile.jpg" 
            alt="User profile" 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-base">Welcome</div>
          <div className="text-[#23B5B5] text-2xl font-medium">materiiva</div>
        </div>
      </div>
      <button className="p-2">
        <FiMenu className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Header; 