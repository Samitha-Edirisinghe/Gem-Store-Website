import { motion } from 'motion/react';
import { Sparkles, Palette, Award, Users, Gem, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { api } from '@/app/utils/api';

export default function CustomCollectionPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGems = async () => {
      try {
        const gems = await api.getAllGems('Custom Collection');
        // Transform API data to match the expected format
        const transformedGems = gems.map((gem: any) => ({
          id: gem.id.toString(),
          name: gem.name,
          category: gem.category,
          carat: gem.carat,
          origin: gem.origin,
          price: gem.price,
          image: gem.image_url.startsWith('/uploads') 
            ? `http://localhost:5000${gem.image_url}` 
            : gem.image_url,
          description: gem.description
        }));
        setProducts(transformedGems);
      } catch (error) {
        console.error('Error fetching custom collection:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGems();
  }, []);

  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Personal Design",
      description: "Collaborate with master designers to create your unique vision"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Artisan Craftsmanship",
      description: "Hand-crafted by third-generation jewelers and gemologists"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "White Glove Service",
      description: "Dedicated consultation from concept to completion"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#faf9f7] to-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[#c4a962]" />
              <span className="text-sm text-[#c4a962] tracking-wider uppercase font-body font-medium">
                Custom Collection
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl text-[#2d3748] mb-6 tracking-wide leading-tight font-heading font-normal">
              Bespoke Masterpieces
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body font-light">
              Explore our portfolio of custom-created jewelry — each piece a unique collaboration 
              between our master artisans and discerning clients who demand perfection.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#c4a962]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl flex items-center justify-center text-[#c4a962] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-[#2d3748] mb-2 font-heading font-medium">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-body font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="py-20 text-center">
              <p className="text-gray-600 font-body">Loading custom collection...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-600 font-body">No custom collection pieces available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Certified Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                        <Sparkles className="h-3.5 w-3.5 text-[#c4a962]" />
                        <span className="text-xs text-[#c4a962] font-medium font-body">Certified</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-[#c4a962] tracking-widest uppercase font-body font-bold">
                          {product.category}
                        </span>
                        <Gem className="h-4 w-4 text-[#c4a962]" />
                      </div>

                      <h3 className="text-3xl text-[#2d3748] mb-4 tracking-wide group-hover:text-[#c4a962] transition-colors duration-300 font-heading font-medium">
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
                        <span className="text-2xl text-[#2d3748] font-heading font-bold">
                          {product.price}
                        </span>
                        <Link 
                          to={`/gem/${product.id}`}
                          className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 font-body font-medium"
                        >
                          View Details
                          <span className="ml-1.5">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-[#2d3748] mb-6 tracking-wide font-heading font-normal">
              Begin Your Bespoke Journey
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-body font-light">
              Transform your vision into reality. Our master artisans are ready to collaborate 
              with you on a one-of-a-kind piece that celebrates your unique story.
            </p>
            <button className="group px-10 py-5 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 text-lg tracking-wide shadow-2xl hover:shadow-amber-500/40 hover:scale-105 font-body font-medium">
              Schedule a Consultation
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}