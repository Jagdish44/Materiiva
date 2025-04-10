import Link from 'next/link';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Materiiva</h3>
            <p className="text-gray-600 text-sm mb-4">
              Premium quality, ethically sourced products for your home and lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-gray-600 hover:text-black">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=featured" className="text-sm text-gray-600 hover:text-black">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/products?category=new" className="text-sm text-gray-600 hover:text-black">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products?category=bestsellers" className="text-sm text-gray-600 hover:text-black">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-gray-600 hover:text-black">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-black">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-black">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-black">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-600 hover:text-black">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-black">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Materiiva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 