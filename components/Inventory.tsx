import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Inventory: React.FC = () => {
  return (
    <section id="inventory" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Official eBay Store</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Browse our full range of mobile products, collectables, and tech accessories directly below.
            <br className="hidden md:block" />
            Inventory is updated in real-time.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <a
            href={BUSINESS_INFO.ebayStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            <span>Open eBay Store in New Tab</span>
            <ExternalLink size={18} />
          </a>
        </div>

        {/* 
          Note: Many major platforms (including eBay) set X-Frame-Options headers that prevent 
          their sites from being embedded in iframes for security reasons. 
          If the iframe below does not load, the user can use the button above.
        */}
        <div className="w-full h-[800px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden relative">
           <iframe 
             src={BUSINESS_INFO.ebayStoreUrl}
             title="LMC LABS eBay Store"
             className="w-full h-full border-0"
             loading="lazy"
             sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
           />
           
           {/* Fallback/Loading State Background */}
           <div className="absolute inset-0 -z-10 flex items-center justify-center bg-slate-100">
             <div className="text-slate-400 flex flex-col items-center">
               <span className="loading-spinner mb-2">Loading Store...</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;