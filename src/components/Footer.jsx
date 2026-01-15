
import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Kangra Chess Club</span>
            </div>
            <p className="text-gray-300 mb-4">
              Promoting chess excellence in Kangra region. Join us to learn, compete, and grow in the royal game of chess.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/tournaments" className="text-gray-300 hover:text-white transition-colors">Tournaments</Link>
              <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
              <Link to="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
               <Link to="/admin" className="text-gray-300 hover:text-white transition-colors">Admin</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">Kangra, Himachal Pradesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+91 9882770709,  +91 7018653816</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">ayush988277@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

         <div className="mt-10 pt-4 border-t border-black/10 text-sm text-white-700 text-center">
          © {new Date().getFullYear()} Look in Dharamshala | Built by{' '}
          <a
            href="https://www.synergyayush.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white hover:text-indigo-600 transition-colors"
          >
            SynergyAyush
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
