import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

interface Slide {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  tagline: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1762505464446-c0760d740aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwZ2Vtc3RvbmUlMjBqZXdlbHJ5JTIwY2xvc2UtdXB8ZW58MXx8fHwxNzY5NTA3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Luxury diamond gemstone jewelry with pristine clarity",
    tagline: "THE ESSENCE OF PERFECTION",
    title: "Brilliant Diamond Collection",
    subtitle: "Experience the unparalleled brilliance of ethically sourced diamonds"
  },
  {
    image: "https://images.unsplash.com/photo-1766560359717-c3b0b70e7610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcnVieSUyMGdlbXN0b25lJTIwZWxlZ2FudCUyMGRpc3BsYXl8ZW58MXx8fHwxNzY5NTA3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Premium ruby gemstone in elegant display",
    tagline: "TIMELESS PASSION",
    title: "Crimson Ruby Treasures",
    subtitle: "Rare rubies of exceptional color and unmatched fire from Myanmar"
  },
  {
    image: "https://images.unsplash.com/photo-1767921804162-9c55a278768d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXBwaGlyZSUyMGJsdWUlMjBnZW1zdG9uZSUyMGx1eHVyeSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NTA3NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Luxury blue sapphire gemstone jewelry",
    tagline: "REGAL ELEGANCE",
    title: "Royal Sapphire Masterpieces",
    subtitle: "Mesmerizing sapphires with the finest Kashmir blue hue"
  },
  {
    image: "https://images.unsplash.com/photo-1764591576264-ad2e0e4e793c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaW91cyUyMGVtZXJhbGQlMjBnZW1zdG9uZSUyMGx1eHVyeXxlbnwxfHx8fDE3Njk1MDc1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Precious emerald gemstone luxury collection",
    tagline: "NATURE'S MAJESTY",
    title: "Emerald Garden Collection",
    subtitle: "Exquisite Colombian emeralds with vivid green crystalline beauty"
  }
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const duration = 6000;
      const interval = 50;
      let elapsed = 0;

      const progressInterval = setInterval(() => {
        elapsed += interval;
        setProgress((elapsed / duration) * 100);

        if (elapsed >= duration) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          elapsed = 0;
          setProgress(0);
        }
      }, interval);

      return () => clearInterval(progressInterval);
    }
  }, [isPaused, currentIndex]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const navigate = useNavigate();

  return (
    <section 
      id="home" 
      className="relative h-[70vh] sm:h-[80vh] md:h-screen flex items-center justify-center overflow-hidden mt-[80px] sm:mt-[96px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <img 
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-slate-900/50 to-gray-900/60"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Tagline */}
            <p className="text-xs md:text-sm tracking-[0.2em] text-gray-300 mb-4 uppercase font-body font-light">
              {slides[currentIndex].tagline}
            </p>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide leading-tight font-heading font-light"
            >
              {slides[currentIndex].title}
            </h1>
            <p 
              className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-body font-light"
            >
              {slides[currentIndex].subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA - Solid Orange */}
              <button 
                className="group inline-flex items-center px-8 py-3.5 bg-[#d97706] hover:bg-[#b45309] text-white text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-700/40 hover:scale-105 font-body"
                onClick={() => navigate('/collections')}
              >
                Explore Collections
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              {/* Secondary CTA - Outlined */}
              <button 
                className="group inline-flex items-center px-8 py-3.5 bg-transparent border border-white/60 text-white hover:bg-white/10 hover:border-white text-sm tracking-wider uppercase transition-all duration-300 font-body"
                onClick={() => navigate('/masterpieces')}
              >
                View Masterpieces
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical Progress Indicator - Left Side */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0);
            }}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-0.5 h-12 transition-all duration-500 ${
              index === currentIndex 
                ? 'bg-[#d97706]' 
                : 'bg-white/30 hover:bg-white/50'
            }`}>
              {index === currentIndex && (
                <motion.div 
                  className="absolute inset-0 bg-[#d97706]"
                  initial={{ height: '0%' }}
                  animate={{ height: `${progress}%` }}
                  transition={{ duration: 0.05, ease: 'linear' }}
                  style={{ transformOrigin: 'top' }}
                />
              )}
            </div>
          </button>
        ))}
      </motion.div>

      {/* Slide Counter and Navigation - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-20 flex items-center gap-4"
      >
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>
        
        {/* Slide Counter */}
        <div className="text-white font-body text-sm md:text-base">
          <span className="font-medium">{currentIndex + 1}</span>
          <span className="mx-2 text-white/60">/</span>
          <span className="text-white/60">{slides.length}</span>
        </div>
        
        {/* Next Button */}
        <button
          onClick={goToNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </motion.div>
    </section>
  );
}