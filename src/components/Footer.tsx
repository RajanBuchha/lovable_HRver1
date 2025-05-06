
import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">H R Apparel</h3>
            <p className="text-gray-300 mb-6">
              Your premier destination for fashion from the world's leading brands. We curate the finest collections to bring luxury to your everyday style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#brands" className="text-gray-300 hover:text-white transition-colors">Brands</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Featured Brands */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Featured Brands</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bodycare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lyra</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pinklush</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Niomoda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tag Hills</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-300" />
                <span className="text-gray-300">123 Fashion Avenue<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-300" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-300" />
                <a href="mailto:info@hrapparel.com" className="text-gray-300 hover:text-white transition-colors">info@hrapparel.com</a>
              </li>
            </ul>

            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} H R Apparel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
