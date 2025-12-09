import React from 'react';
import { Zap, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { IMAGES, BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="featured" className="relative bg-slate-900 overflow-hidden text-white pt-12 pb-20 md:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Launching {BUSINESS_INFO.launchDate}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              The Last Cable <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                You'll Ever Need.
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Experience the future of charging with the LMC Labs 240W USB-C Cable. 
              Designed for speed, built for durability. Available in 1m & 2m.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-3xl font-bold">$10.00</span>
                <span className="text-sm text-slate-400">Launch Price</span>
              </div>
              <div className="h-8 w-px bg-slate-700 hidden sm:block"></div>
              <button disabled className="cursor-not-allowed opacity-80 px-8 py-3 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2 hover:bg-slate-100 transition-all">
                Coming Soon
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-4 text-center md:text-left border-t border-slate-800 mt-8">
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-400">
                  <Zap size={20} />
                  <span className="font-bold">240W</span>
                </div>
                <p className="text-xs text-slate-400">PD 3.1 Fast Charging</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400">
                  <ShieldCheck size={20} />
                  <span className="font-bold">Durable</span>
                </div>
                <p className="text-xs text-slate-400">Braided Nylon</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-purple-400">
                  <Clock size={20} />
                  <span className="font-bold">Jan 2026</span>
                </div>
                <p className="text-xs text-slate-400">Availability</p>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex-1 w-full max-w-md md:max-w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl rotate-3 opacity-30 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl aspect-square flex items-center justify-center">
                 {/* 
                    NOTE FOR USER: 
                    Replace the src below with your uploaded cable image. 
                    If you have the image in your public folder, use src="/path/to/image.jpg"
                 */}
                 <img 
                  src="/240wcable.png"
                  alt="240W USB C Cable" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <p className="text-xs font-mono text-indigo-300">MODEL: LMC-240-PRO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;