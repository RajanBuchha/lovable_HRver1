
import React from 'react';

const brands = [
  {
    id: 1,
    name: "Bodycare",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    category: "Intimate Wear"
  },
  {
    id: 2,
    name: "Lyra",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800",
    category: "Women's Fashion"
  },
  {
    id: 3,
    name: "Supersox",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Zeel",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800",
    category: "Activewear"
  },
  {
    id: 5,
    name: "Pinklush",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=800",
    category: "Women's Fashion"
  },
  {
    id: 6,
    name: "Zoom",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    category: "Casual Wear"
  },
  {
    id: 7,
    name: "Mitushi",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800",
    category: "Ethnic Wear"
  },
  {
    id: 8,
    name: "Niomoda",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    category: "Luxury Fashion"
  },
  {
    id: 9,
    name: "Citizen",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800",
    category: "Classic Apparel"
  },
  {
    id: 10,
    name: "Tag Hills",
    image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&q=80&w=800",
    category: "Outdoor Apparel"
  }
];

const BrandGrid = () => {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-10 bg-white" id="brands">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium fashion brands, each offering unique styles and quality craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-card rounded-md overflow-hidden h-64 cursor-pointer group">
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="brand-card-overlay">
                <h3 className="text-xl font-serif font-medium">{brand.name}</h3>
                <p className="text-sm text-gray-200">{brand.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
