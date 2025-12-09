import React, { useState } from 'react';
import { Zap, Battery, Wind, Clock, ExternalLink, X, Bell, CheckCircle, Loader2 } from 'lucide-react';
import { UPCOMING_PRODUCTS, BUSINESS_INFO } from '../constants';
import { Category, UpcomingProduct } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const categoryFilters = [
  { label: 'All Products', value: 'all' },
  { label: 'Cables & Charging', value: Category.CABLES },
  { label: 'Portable Power', value: Category.PORTABLE },
];

const getCategoryIcon = (category: Category) => {
  switch (category) {
    case Category.CABLES:
      return <Zap size={16} />;
    case Category.PORTABLE:
      return <Battery size={16} />;
    default:
      return <Wind size={16} />;
  }
};

// Notify Modal Component
interface NotifyModalProps {
  product: UpcomingProduct | null;
  onClose: () => void;
}

const NotifyModal: React.FC<NotifyModalProps> = ({ product, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/notify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          productId: product.id,
          productName: product.title
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to subscribe');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          // Success State
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">You're on the list!</h3>
            <p className="text-slate-600 mb-6">
              We'll email you when <span className="font-medium">{product.title}</span> is available.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          // Form State
          <>
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Bell size={20} />
                </div>
                <span className="text-sm font-medium text-slate-300">Get Notified</span>
              </div>
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-slate-400 text-sm mt-1">Launching {product.launchDate}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  'Notify Me'
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                We'll only email you about this product. No spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// Product Card Component
interface ProductCardProps {
  product: UpcomingProduct;
  onNotify: (product: UpcomingProduct) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onNotify }) => (
  <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative aspect-square bg-slate-100 overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
          <Clock size={12} />
          {product.status === 'coming-soon' ? 'Coming Soon' : 'Pre-Order'}
        </span>
      </div>
      {product.launchDate && (
        <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full">
          {product.launchDate}
        </div>
      )}
    </div>
    
    <div className="p-5 space-y-4">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
          {getCategoryIcon(product.category)}
          {product.category}
        </span>
      </div>
      
      <h3 className="font-bold text-slate-900 text-lg leading-tight">{product.title}</h3>
      <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
      
      <div className="flex flex-wrap gap-1.5">
        {product.features.slice(0, 3).map((feature, idx) => (
          <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {feature}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <div>
          <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
          <span className="text-sm text-slate-500 ml-1">AUD</span>
        </div>
        <button 
          onClick={() => onNotify(product)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-1.5"
        >
          <Bell size={14} />
          Notify Me
        </button>
      </div>
    </div>
  </div>
);

const UpcomingProducts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<UpcomingProduct | null>(null);

  const filteredProducts = activeFilter === 'all' 
    ? UPCOMING_PRODUCTS 
    : UPCOMING_PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <>
      <section id="upcoming" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              New Product Line
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              LMC Labs Branded Products
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're expanding beyond reselling with our own line of premium tech accessories. 
              Quality products at competitive prices, designed for everyday use.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categoryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onNotify={setSelectedProduct}
              />
            ))}
          </div>

          {/* eBay Store CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Shop Our Current Inventory</h3>
              <p className="text-slate-300 max-w-xl mx-auto mb-6">
                Browse our full range of mobile products, SIM cards, gaming gear, and collectables on eBay. 
                100% positive feedback with fast Australian shipping.
              </p>
              <a
                href={BUSINESS_INFO.ebayStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                <span>Visit eBay Store</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Notify Modal */}
      {selectedProduct && (
        <NotifyModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
};

export default UpcomingProducts;
