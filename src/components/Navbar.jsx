import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    setIsSearchOpen(false); // ปิด popup หลังจากการค้นหา
  };

  return (
    <nav className="bg-white p-2 px-20 outline outline-1 outline-gray-100">
      <div className="container mx-auto flex justify-between items-center">
       <div className="md:hidden flex items-center">
        <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          </div>
        <Link to="/" className="text-black text-xl font-bold">PRIMEPROUD</Link>

        <div className="container mx-auto flex justify-center items-center">
        <Link to="/" className="text-black  hover:text-pink-500 text-m p-4">Tulip</Link>
        <Link to="/" className="text-black  hover:text-blue-500 text-m p-4">Lily</Link>
        <Link to="/" className="text-black  hover:text-red-500 text-m p-4">Rose</Link>
        <Link to="/" className="text-black  hover:text-yellow-500 text-m p-4">Carnation</Link>
        <Link to="/" className="text-black  hover:text-green-500 text-m p-4">Cactus</Link>
          </div>
        <div className="hidden md:flex space-x-4 items-center">
          <form onSubmit={handleSearchSubmit}  className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-full py-1 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Search..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
          <Link to="/cart"><IoCart className="text-2xl text-black" /></Link>
          <div> | </div>
          <Link to="/signin" className="text-black hover:text-gray-500">SignIn</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            type="button" 
            className="px-3"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
         
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link to="/" className="block px-2 py-1 text-black hover:text-yellow-500">Home</Link>
        <Link to="/signin" className="block px-2 py-1 text-black hover:text-yellow-500">Cart</Link>
      </div>

      {/* Popup สำหรับการค้นหา */}
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsSearchOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64"
                placeholder="Search..."
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
