import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">{BUSINESS_INFO.name}</h3>
            <p className="max-w-xs">
              Bringing you the latest in mobile technology, collectables, and premium accessories.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#featured" className="hover:text-white transition-colors">Featured</a></li>
              <li><a href="#upcoming" className="hover:text-white transition-colors">Products</a></li>
              <li><a href={BUSINESS_INFO.ebayStoreUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">eBay Store</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:contact@lmclabs.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18} />
                <span>Contact via eBay</span>
              </a>
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram size={18} />
                <span>@lmc_labs</span>
              </a>
            </div>
            <div className="pt-4">
               <p className="text-xs text-slate-500">ABN: {BUSINESS_INFO.abn}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed in Sydney.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;