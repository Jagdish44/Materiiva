import React from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="relative w-32 h-12"> {/* Added div for logo */}
            <Image
              src="/company-logo.jpeg"
              alt="Company Logo"
              fill
              style={{ objectFit: 'contain' }}
              sizes="128px"
              priority
            />
          </div>
          <div className="flex items-center"> {/* Moved menu button here */}
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <FiMenu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 ml-4"> {/* Added spacing */}
              <span className="text-lg font-semibold">Home</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;