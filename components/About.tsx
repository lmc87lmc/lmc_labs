import React from 'react';
import { MapPin, ShoppingBag, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              LMC Labs. <span className="text-indigo-600">Based in Sydney.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded by {BUSINESS_INFO.founder}, LMC Labs is a dedicated supplier of high-quality mobile products, SIM cards, and unique collectables. 
              We're expanding with our own branded tech accessories line — including 240W USB-C cables, portable fans, and powerbanks.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Local</h4>
                  <p className="text-sm text-slate-600">Proudly based in Sydney, serving customers Australia-wide and beyond.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Fast Shipping</h4>
                  <p className="text-sm text-slate-600">Quick dispatch on all eBay orders and product launches.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Reliable</h4>
                  <p className="text-sm text-slate-600">Top-rated seller status with 100% positive feedback.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end">
             <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl max-w-sm w-full relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-20"></div>
                
                <h3 className="text-2xl font-bold mb-6">Business Details</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Business Name</span>
                    <span className="font-medium text-white">{BUSINESS_INFO.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>ABN</span>
                    <span className="font-medium text-white font-mono">{BUSINESS_INFO.abn}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Founder</span>
                    <span className="font-medium text-white">{BUSINESS_INFO.founder}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Established</span>
                    <span className="font-medium text-white">2025</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;