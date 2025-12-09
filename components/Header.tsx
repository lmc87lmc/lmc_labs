import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         <a href="#" className="flex-shrink-0 flex items-center gap-2">
  <img 
    src="/logo.png"  // <-- use the full GitHub Pages base path
    alt="LMC LABS Logo" 
    className="w-12 h-12 object-contain rounded-lg"
  />
  <span className="font-bold text-xl text-slate-900 tracking-tight hidden sm:block">
    {BUSINESS_INFO.name}
  </span>
</a>


          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#featured" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Featured</a>
            <a href="#upcoming" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Products</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href={BUSINESS_INFO.ebayStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              <ShoppingBag size={18} />
              <span>Visit Store</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-lg">
          <a href="#featured" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium py-2">Featured</a>
          <a href="#upcoming" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium py-2">Products</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-700 font-medium py-2">About Us</a>
          <div className="pt-2">
             <a 
              href={BUSINESS_INFO.ebayStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-medium w-full"
            >
              <ShoppingBag size={18} />
              <span>Visit eBay Store</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;