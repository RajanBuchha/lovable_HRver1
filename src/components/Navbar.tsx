
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const brands = [
  "Bodycare", "Lyra", "Supersox", "Zeel", "Pinklush", 
  "Zoom", "Mitushi", "Niomoda", "Citizen", "Tag Hills"
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="py-4 px-6 lg:px-10 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="font-serif font-bold text-2xl">
            <span className="mr-2">H</span>
            <span>R</span>
            <span className="ml-2">APPAREL</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Home
          </a>
          
          {/* Products Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <div className="absolute z-10 left-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-lg hidden group-hover:block animate-fade-in">
              <div className="py-2">
                {brands.map((brand, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-black"
                  >
                    {brand}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <a href="#about" className="text-black hover:text-gray-600 transition-colors">
            About
          </a>
          
          <a href="#contact" className="text-black hover:text-gray-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black p-2"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-white animate-fade-in">
          <a href="#" className="block py-2 px-4 text-black hover:bg-gray-50">
            Home
          </a>
          
          <div>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center w-full py-2 px-4 text-black hover:bg-gray-50"
            >
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {isDropdownOpen && (
              <div className="bg-gray-50 pl-8">
                {brands.map((brand, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="block py-2 px-4 text-gray-700 hover:text-black"
                  >
                    {brand}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a href="#about" className="block py-2 px-4 text-black hover:bg-gray-50">
            About
          </a>
          
          <a href="#contact" className="block py-2 px-4 text-black hover:bg-gray-50">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
