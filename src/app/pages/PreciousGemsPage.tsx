import { motion } from 'motion/react';
import { Sparkles, Shield, Award, Eye, Gem, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export default function PreciousGemsPage() {
  const products = [
    {
      id: "royal-sapphire",
      name: "Royal Sapphire",
      category: "Precious Gems",
      carat: "5.2 Carats",
      origin: "Kashmir, India",
      clarity: "VVS1",
      price: "$45,000",
      image: "https://images.unsplash.com/photo-1735480165036-3d1d2f41460f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2FwcGhpcmUlMjBnZW1zdG9uZSUyMGNsb3NlfGVufDF8fHx8MTc2OTUwMDU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "A magnificent Kashmir sapphire of exceptional cornflower blue hue"
    },
    {
      id: "emerald-majesty",
      name: "Emerald Majesty",
      category: "Precious Gems",
      carat: "3.8 Carats",
      origin: "Colombia",
      clarity: "VS1",
      price: "$38,500",
      image: "https://images.unsplash.com/photo-1605821628253-8120cd950c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ3JlZW4lMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NTAwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium Colombian emerald with vivid green saturation"
    },
    {
      id: "crimson-ruby",
      name: "Crimson Ruby",
      category: "Precious Gems",
      carat: "4.5 Carats",
      origin: "Myanmar",
      clarity: "IF",
      price: "$52,000",
      image: "https://images.unsplash.com/photo-1766560359717-c3b0b70e7610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBydWJ5JTIwZ2Vtc3RvbmUlMjBsdXh1cnl8ZW58MXx8fHwxNzY5NTAwNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Pigeon blood ruby from Mogok mines with unmatched brilliance"
    },
    {
      id: "diamond-perfection",
      name: "Diamond Perfection",
      category: "Precious Gems",
      carat: "2.1 Carats",
      origin: "South Africa",
      clarity: "FL",
      price: "$65,000",
      image: "https://images.unsplash.com/photo-1641885503196-3379a1725e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRpYW1vbmQlMjBicmlsbGlhbnQlMjBjdXR8ZW58MXx8fHwxNzY5NTAwNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Flawless D-color diamond with exceptional brilliance"
    },
    {
      id: "blue-sapphire-elite",
      name: "Blue Sapphire Elite",
      category: "Precious Gems",
      carat: "6.8 Carats",
      origin: "Sri Lanka",
      clarity: "VVS2",
      price: "$42,000",
      image: "https://images.unsplash.com/photo-1767921804162-9c55a278768d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXBwaGlyZSUyMGJsdWUlMjBnZW1zdG9uZSUyMGx1eHVyeSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NTA3NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Ceylon sapphire renowned for its depth and clarity"
    },
    {
      id: "imperial-ruby",
      name: "Imperial Ruby",
      category: "Precious Gems",
      carat: "3.5 Carats",
      origin: "Myanmar",
      clarity: "VVS1",
      price: "$48,500",
      image: "https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaW91cyUyMHJ1YnklMjBzYXBwaGlyZSUyMGVtZXJhbGQlMjBnZW1zdG9uZXN8ZW58MXx8fHwxNzcyOTg3ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Rare Burmese ruby with pigeon blood red coloration"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Authenticity",
      description: "GIA, AGS, and IGI certified with complete documentation"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Investment Grade",
      description: "Museum-quality gemstones with excellent value retention"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Expert Selection",
      description: "Handpicked by master gemologists with decades of experience"
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
                Precious Gems
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl text-[#2d3748] mb-6 tracking-wide leading-tight font-heading font-normal">
              The Four Pillars of Prestige
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body font-light">
              Discover our curated collection of the world's most coveted precious gemstones — 
              diamonds, rubies, sapphires, and emeralds of exceptional quality and provenance.
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
              Discover Your Perfect Gemstone
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-body font-light">
              Our gemstone experts are ready to guide you through our prestigious collection 
              and help you find the perfect stone that resonates with your vision.
            </p>
            <button className="group px-10 py-5 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 text-lg tracking-wide shadow-2xl hover:shadow-amber-500/40 hover:scale-105 font-body font-medium">
              Schedule a Private Viewing
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
