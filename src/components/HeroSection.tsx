
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 px-4" style={{ backgroundColor: '#E0F7FA' }}>
      <div className="max-w-5xl mx-auto space-y-3 text-center">
        <h2 className="font-sans text-xl sm:text-2xl md:text-3xl tracking-wider animate-fade-in" style={{ color: '#102027' }}>
          Welcome to
        </h2>

        <h3 
          className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide animate-fade-in" 
          style={{ color: '#102027', textDecoration: 'none', animationDelay: '0.3s' }}
        >
          H R Apparel
        </h3>
        
        <div className="w-24 h-1 bg-black mx-auto my-6 animate-fade-in" style={{ animationDelay: '0.9s' }}></div>

        <p className="font-sans text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '1.2s' }}>
          Curating exclusive collections from premium fashion brands for the modern lifestyle.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
