import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingProducts from './components/UpcomingProducts';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <UpcomingProducts />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;