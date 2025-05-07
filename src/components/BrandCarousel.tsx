
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    brand: "Bodycare",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2400",
    description: "Premium intimate wear and essentials"
  },
  {
    id: 2,
    brand: "Lyra",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2400",
    description: "Contemporary women's fashion"
  },
  {
    id: 3,
    brand: "Supersox",
    image: "public/images/KARTIK_ARYAN_MAIN_PAGE_BANNER.png",
    description: "Stylish and comfortable socks"
  },
  {
    id: 4,
    brand: "Zeel",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=2400",
    description: "Modern athleisure and activewear"
  },
  {
    id: 5,
    brand: "Pinklush",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=2400",
    description: "Feminine and elegant clothing"
  },
  {
    id: 6,
    brand: "Zoom",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=2400",
    description: "Trendy casual streetwear"
  },
  {
    id: 7,
    brand: "Mitushi",
    image: "public/images/real mitushi.png",
    description: "Ethnic and traditional designs"
  },
  {
    id: 8,
    brand: "Niomoda",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2400",
    description: "Luxury fashion and accessories"
  },
  {
    id: 9,
    brand: "Citizen",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=2400",
    description: "Classic and timeless designs"
  },
  {
    id: 10,
    brand: "Tag Hills",
    image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&q=80&w=2400",
    description: "Outdoor and adventure apparel"
  }
];

const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-5xl md:text-7xl font-serif font-bold mb-4">{slide.brand}</h3>
            <p className="text-xl md:text-2xl max-w-md text-center">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white transition-all"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white transition-all"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default BrandCarousel;
