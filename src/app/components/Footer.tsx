import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#1a202c] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div>
            <h3 
              className="text-2xl sm:text-3xl mb-4 sm:mb-5 tracking-widest font-heading"
            >
              <span className="text-white font-light">GEMSTONE</span>
              <span className="block text-[#c4a962] font-normal">LEGACY</span>
            </h3>
            <p 
              className="text-gray-400 mb-6 sm:mb-8 leading-relaxed font-body font-light text-sm sm:text-base"
            >
              Curating the world's finest gemstones since 1952. Where nature's artistry meets timeless elegance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-body font-light">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-[#c4a962] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-body font-light">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-[#c4a962] flex-shrink-0" />
                <span className="break-all">info@gemstonelegacy.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-body font-light">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[#c4a962] flex-shrink-0" />
                <span>New York, NY 10012</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-11 h-11 bg-white/5 hover:bg-gradient-to-r hover:from-[#c4a962] hover:to-[#d4b976] border border-white/10 hover:border-[#c4a962] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/5 hover:bg-gradient-to-r hover:from-[#c4a962] hover:to-[#d4b976] border border-white/10 hover:border-[#c4a962] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/5 hover:bg-gradient-to-r hover:from-[#c4a962] hover:to-[#d4b976] border border-white/10 hover:border-[#c4a962] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 bg-white/5 hover:bg-gradient-to-r hover:from-[#c4a962] hover:to-[#d4b976] border border-white/10 hover:border-[#c4a962] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-xl text-white mb-6 tracking-wide font-heading font-medium"
            >
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link 
                  to="/home" 
                  className="text-gray-400 hover:text-[#c4a962] transition-colors duration-300 text-[15px] flex items-center group font-body font-light"
                >
                  <span className="w-0 h-[1px] bg-[#c4a962] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-[#c4a962] transition-colors duration-300 text-[15px] flex items-center group font-body font-light"
                >
                  <span className="w-0 h-[1px] bg-[#c4a962] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections" 
                  className="text-gray-400 hover:text-[#c4a962] transition-colors duration-300 text-[15px] flex items-center group font-body font-light"
                >
                  <span className="w-0 h-[1px] bg-[#c4a962] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Our Collections
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-[#c4a962] transition-colors duration-300 text-[15px] flex items-center group font-body font-light"
                >
                  <span className="w-0 h-[1px] bg-[#c4a962] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 
              className="text-xl text-white mb-6 tracking-wide font-heading font-medium"
            >
              Collections
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link 
                  to="/precious-gems" 
                  className="text-gray-400 hover:text-[#c4a962] transition-colors duration-300 text-[15px] flex items-center group font-body font-light"
                >
                  <span className="w-0 h-[1px] bg-[#c4a962] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Precious Gems
                </Link>
              </li>
              <li>
                <Link 
                  to="/rare-stones" 
                  className="text-gray-400 hover:text-[#c4a962] transition-colors duration-300 text-[15px] flex items-center group font-body font-light"
                >
                  <span className="w-0 h-[1px] bg-[#c4a962] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Rare Stones
                </Link>
              </li>
              <li>
                <Link 
                  to="/custom-collection"
                  className="text-gray-400 hover:text-[#c4a962] transition-colors duration-300 text-[15px] flex items-center group font-body font-light"
                >
                  <span className="w-0 h-[1px] bg-[#c4a962] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Custom Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 
              className="text-xl text-white mb-6 tracking-wide font-heading font-medium"
            >
              Stay Updated
            </h4>
            <p 
              className="text-gray-400 mb-6 text-[15px] leading-relaxed font-body font-light"
            >
              Subscribe to receive exclusive updates on new arrivals and special offers.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4a962] focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 font-body"
              />
              <button className="w-full px-4 py-3 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] rounded-lg transition-all duration-300 text-white text-[15px] tracking-wide shadow-lg hover:shadow-xl hover:shadow-amber-500/20 flex items-center justify-center gap-2 font-body font-medium">
                <Mail className="h-4 w-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p 
              className="text-gray-400 text-sm font-body font-light"
            >
              © 2026 Gemstone Legacy. All rights reserved.
            </p>
            <div 
                className="mt-3 inline-block px-6 py-2 text-xs text-gray-300"
                style={{ borderRadius: '60px 60px 0 0' }}
              >
                <p>
                  Design By{' '}
                  <a 
                    href="https://www.linkedin.com/in/samitha-randika-edirisinghe-b3a68a2b6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#c4a962] hover:underline transition-colors"
                  >
                    Samitha Randika
                  </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}