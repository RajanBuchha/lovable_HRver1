
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-white text-center px-4">
      <div className="max-w-5xl mx-auto space-y-3">
        <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl tracking-wider animate-fade-in">
          Welcome to
        </h2>
        
        <h3 className="font-poppins text-3xl sm:text-4xl md:text-5xl tracking-wide animate-fade-in" style={{ animationDelay: '0.3s' }}>
          The Brand Destination
        </h3>
        
        <h1 className="font-poppins text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-fade-in" style={{ animationDelay: '0.6s' }}>
          H R Apparel
        </h1>
        
        <div className="w-24 h-1 bg-black mx-auto my-6 animate-fade-in" style={{ animationDelay: '0.9s' }}></div>
        
        <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '1.2s' }}>
          Curating exclusive collections from premium fashion brands for the modern lifestyle.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
