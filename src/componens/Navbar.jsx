import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">Primeproud</a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-yellow-500">Home</a>
          <a href="#" className="text-white hover:text-yellow-500">Shop</a>
          <a href="#" className="text-white hover:text-yellow-500">About</a>
          <a href="#" className="text-white hover:text-yellow-500">Contact</a>
          <a href="#" className="text-white hover:text-yellow-500">Cart</a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#" className="block px-2 py-1 text-white hover:text-yellow-500">Home</a>
        <a href="#" className="block px-2 py-1 text-white hover:text-yellow-500">Shop</a>
        <a href="#" className="block px-2 py-1 text-white hover:text-yellow-500">About</a>
        <a href="#" className="block px-2 py-1 text-white hover:text-yellow-500">Contact</a>
        <a href="#" className="block px-2 py-1 text-white hover:text-yellow-500">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
