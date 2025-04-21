import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl text-indigo-600">&lt;AnwarCodes/&gt;
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-indigo-600 px-3 py-2 font-medium">Home</a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600 px-3 py-2 font-medium">About</a>
            <a href="#projects" className="text-gray-800 hover:text-indigo-600 px-3 py-2 font-medium">Projects</a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-600 px-3 py-2 font-medium">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-indigo-600">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#home" className="block pl-3 pr-4 py-2 hover:bg-indigo-50 hover:text-indigo-600" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="block pl-3 pr-4 py-2 hover:bg-indigo-50 hover:text-indigo-600" onClick={toggleMobileMenu}>About</a>
            <a href="#projects" className="block pl-3 pr-4 py-2 hover:bg-indigo-50 hover:text-indigo-600" onClick={toggleMobileMenu}>Projects</a>
            <a href="#contact" className="block pl-3 pr-4 py-2 hover:bg-indigo-50 hover:text-indigo-600" onClick={toggleMobileMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;