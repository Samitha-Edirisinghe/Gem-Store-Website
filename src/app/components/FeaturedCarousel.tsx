import { useRef } from 'react';
import Slider from 'react-slick';
import { Gem, MapPin, ChevronLeft, ChevronRight, Award, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

interface Product {
  id?: string;
  name: string;
  category: string;
  carat: string;
  origin: string;
  image: string;
  price: string;
}

interface FeaturedCarouselProps {
  products: Product[];
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: (i: number) => (
      <button 
        className="group relative w-12 h-1.5 rounded-full overflow-hidden mt-12 transition-all duration-300"
        aria-label={`Go to slide ${i + 1}`}
      >
        <div className="absolute inset-0 bg-gray-300 group-hover:bg-gray-400 transition-colors duration-300"></div>
      </button>
    ),
    dotsClass: 'slick-dots !flex !gap-3 !justify-center !items-center !bottom-0'
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
            <Award className="h-4 w-4 text-[#c4a962]" />
            <span className="text-sm text-[#c4a962] tracking-wider uppercase font-body font-medium">
              Featured Selection
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl text-[#2d3748] mb-6 tracking-wide font-heading font-normal"
          >
            Exquisite Gemstones
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body font-light"
          >
            A curated selection of our most exceptional and rare natural gemstones,
            each certified and authenticated by world-renowned gemological institutes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Navigation Arrows */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-16 h-16 bg-white/95 hover:bg-gradient-to-br hover:from-[#c4a962] hover:to-[#d4b976] border-2 border-gray-200 hover:border-[#c4a962] text-[#c4a962] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 group hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-16 h-16 bg-white/95 hover:bg-gradient-to-br hover:from-[#c4a962] hover:to-[#d4b976] border-2 border-gray-200 hover:border-[#c4a962] text-[#c4a962] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 group hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Luxury badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Sparkles className="h-3.5 w-3.5 text-[#c4a962]" />
                      <span className="text-xs text-[#c4a962] font-medium font-body">Certified</span>
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        className="text-xs text-[#c4a962] tracking-widest uppercase font-body font-bold"
                      >
                        {product.category}
                      </span>
                      <Gem className="h-4 w-4 text-[#c4a962]" />
                    </div>
                    
                    <h3 
                      className="text-3xl text-[#2d3748] mb-4 tracking-wide group-hover:text-[#c4a962] transition-colors duration-300 font-heading font-medium"
                    >
                      {product.name}
                    </h3>
                    
                    <div className="space-y-2.5 mb-5">
                      <div className="flex items-center text-sm text-gray-600 font-body font-normal">
                        <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                          <Gem className="h-3.5 w-3.5 text-[#c4a962]" />
                        </div>
                        {product.carat}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 font-body font-normal">
                        <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                          <MapPin className="h-3.5 w-3.5 text-[#c4a962]" />
                        </div>
                        {product.origin}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-5 border-t border-gray-200/70">
                      <span 
                        className="text-2xl text-[#2d3748] font-heading font-bold"
                      >
                        {product.price}
                      </span>
                      <Link to={`/gem/${product.id}`} className="group/btn inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 font-body font-medium">
                        View Details
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .slick-dots {
          position: relative !important;
          margin-top: 3rem;
        }
        .slick-dots li {
          margin: 0;
          width: auto;
        }
        .slick-dots li.slick-active button > div {
          background: linear-gradient(to right, #c4a962, #d4b976);
          box-shadow: 0 0 20px rgba(196, 169, 98, 0.4);
        }
        .slick-dots li button {
          padding: 0;
        }
      `}</style>
    </section>
  );
}