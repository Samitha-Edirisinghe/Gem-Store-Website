import { ArrowRight } from 'lucide-react';
import heroHeaderImage from 'figma:asset/0b2e382da8c7a32d0900e67a8145249d556156d0.png';

interface HeroProps {
  heroImage: string;
}

export default function Hero({ heroImage }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Luxury gemstones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-900/55 to-gray-900/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Timeless Passion Header Image */}
        <div className="mb-4">
          <img 
            src={heroHeaderImage} 
            alt="Crimson Ruby Treasures - Timeless Passion"
            className="mx-auto max-w-full h-auto"
          />
        </div>
        
        <h1 
          className="font-display text-5xl md:text-7xl text-white mb-6 tracking-wide"
        >
          Crimson Ruby Treasures
        </h1>
        <p 
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          Discover the world's finest collection of ethically sourced precious gems, 
          where nature's artistry meets timeless elegance.
        </p>
        <button className="group inline-flex items-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-700/50" style={{ fontFamily: 'Inter, sans-serif' }}>
          Explore Collection
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}