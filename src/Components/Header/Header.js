import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="text-4xl font-bold">
        <span className="text-purple-500">Half</span>Art
      </div>

      {/* Navigation Links for Desktop */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li className="hover:text-purple-400 cursor-pointer">Marketplace</li>
        <li className="hover:text-purple-400 cursor-pointer">Collection</li>
        <li className="hover:text-purple-400 cursor-pointer">Community</li>
        <li className="hover:text-purple-400 cursor-pointer">Create</li>
      </ul>

      {/* Connect Wallet Button */}
      <button className="hidden md:block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-lg">
        Connect Wallet
      </button>

      {/* Toggle Button for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black text-white z-50">
          <ul className="flex flex-col space-y-4 p-4">
            <li className="hover:text-purple-400 cursor-pointer">Marketplace</li>
            <li className="hover:text-purple-400 cursor-pointer">Collection</li>
            <li className="hover:text-purple-400 cursor-pointer">Community</li>
            <li className="hover:text-purple-400 cursor-pointer">Create</li>
            <li>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-lg w-full">
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
