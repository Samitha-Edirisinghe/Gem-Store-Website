import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

export default function Header() {
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/98 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex-shrink-0 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl tracking-widest font-heading">
                <span className="text-[#2d3748] font-light">GEMSTONE</span>
                <span className="text-[#c4a962] ml-1 sm:ml-2 font-normal">LEGACY</span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link 
              to="/" 
              className="text-[15px] text-gray-700 hover:text-[#c4a962] transition-all duration-300 tracking-wide relative group font-body" 
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c4a962] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-[15px] text-gray-700 hover:text-[#c4a962] transition-all duration-300 tracking-wide relative group font-body" 
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c4a962] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button 
                className="flex items-center text-[15px] text-gray-700 hover:text-[#c4a962] transition-all duration-300 tracking-wide relative group font-body" 
              >
                Our Collections
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isCollectionsOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c4a962] transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              <AnimatePresence>
                {isCollectionsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100"
                  >
                    <Link 
                      to="/precious-gems" 
                      className="block px-6 py-4 text-[15px] text-gray-700 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-amber-100/30 hover:text-[#c4a962] transition-all duration-300 border-b border-gray-100/50 font-body" 
                    >
                      Precious Gems
                    </Link>
                    <Link 
                      to="/rare-stones" 
                      className="block px-6 py-4 text-[15px] text-gray-700 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-amber-100/30 hover:text-[#c4a962] transition-all duration-300 border-b border-gray-100/50 font-body" 
                    >
                      Rare Stones
                    </Link>
                    <Link 
                      to="/custom-collection" 
                      className="block px-6 py-4 text-[15px] text-gray-700 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-amber-100/30 hover:text-[#c4a962] transition-all duration-300 font-body" 
                    >
                      Custom Collection
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/contact" 
              className="text-[15px] text-gray-700 hover:text-[#c4a962] transition-all duration-300 tracking-wide relative group font-body" 
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c4a962] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-[#c4a962] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden pb-6 border-t border-gray-200/50"
            >
              <nav className="flex flex-col space-y-4 pt-6">
                <Link to="/" className="text-gray-700 hover:text-[#c4a962] transition-colors text-[15px] font-body">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-[#c4a962] transition-colors text-[15px] font-body">
                  About Us
                </Link>
                <div className="pl-4 space-y-3 border-l-2 border-[#c4a962]/30">
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-body">Our Collections</p>
                  <Link to="/precious-gems" className="block text-gray-700 hover:text-[#c4a962] transition-colors text-[15px] font-body">
                    Precious Gems
                  </Link>
                  <Link to="/rare-stones" className="block text-gray-700 hover:text-[#c4a962] transition-colors text-[15px] font-body">
                    Rare Stones
                  </Link>
                  <Link to="/custom-collection" className="block text-gray-700 hover:text-[#c4a962] transition-colors text-[15px] font-body">
                    Custom Collection
                  </Link>
                </div>
                <Link to="/contact" className="text-gray-700 hover:text-[#c4a962] transition-colors text-[15px] font-body">
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}