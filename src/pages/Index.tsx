
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandCarousel from '@/components/BrandCarousel';
import BrandGrid from '@/components/BrandGrid';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandCarousel />
      <BrandGrid />
      
      {/* About Section */}
      <section className="py-16 md:py-24 px-6 lg:px-10 bg-pastel-blue" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">About H R Apparel</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, H R Apparel has established itself as a premier destination for fashion enthusiasts seeking quality, style, and reliability.
              </p>
              <p className="text-gray-700 mb-4">
                We've partnered with the best fashion brands in the industry to bring you a curated selection of clothing and accessories that represent the pinnacle of design and craftsmanship.
              </p>
              <p className="text-gray-700">
                Our mission is to make high-quality fashion accessible to everyone, providing an exceptional shopping experience both online and in our flagship stores across the country.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800" 
                  alt="Fashion store interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?auto=format&fit=crop&q=80&w=800" 
                  alt="Fashion items" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800" 
                  alt="Designer clothing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800" 
                  alt="Fashion accessories" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
