import { motion } from 'motion/react';
import { Gem, MapPin } from 'lucide-react';

interface Product {
  name: string;
  category: string;
  carat: string;
  origin: string;
  image: string;
  price: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 tracking-wide"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Featured Gemstones
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            Handpicked treasures from the earth's finest mines, certified for authenticity and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="text-xs sm:text-sm text-amber-600 tracking-wider uppercase"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                  >
                    {product.category}
                  </span>
                  <Gem className="h-4 w-4 text-amber-600" />
                </div>
                
                <h3 
                  className="text-xl sm:text-2xl text-gray-900 mb-3 tracking-wide"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {product.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Gem className="h-3.5 w-3.5 mr-2 text-gray-400 flex-shrink-0" />
                    {product.carat}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <MapPin className="h-3.5 w-3.5 mr-2 text-gray-400 flex-shrink-0" />
                    {product.origin}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span 
                    className="text-lg sm:text-xl text-gray-900"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {product.price}
                  </span>
                  <button 
                    className="px-3 sm:px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-300 text-xs sm:text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}