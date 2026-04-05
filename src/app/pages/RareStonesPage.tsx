import { motion } from 'motion/react';
import { Sparkles, Globe, Star, Gem, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export default function RareStonesPage() {
  const products = [
    {
      id: "exotic-tanzanite",
      name: "Exotic Tanzanite",
      category: "Rare Stones",
      carat: "6.3 Carats",
      origin: "Tanzania",
      rarity: "Extremely Rare",
      price: "$28,000",
      image: "https://images.unsplash.com/photo-1595392029854-3e4c3fdf894b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0YW56YW5pdGUlMjBnZW1zdG9uZXxlbnwxfHx8fDE3Njk1MDA2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Vivid violet-blue tanzanite with exceptional pleochroism"
    },
    {
      id: "paraiba-tourmaline",
      name: "Paraiba Tourmaline",
      category: "Rare Stones",
      carat: "3.2 Carats",
      origin: "Brazil",
      rarity: "World Class",
      price: "$42,000",
      image: "https://images.unsplash.com/photo-1731342657191-116f97e1bbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VybWFsaW5lJTIwZ2Vtc3RvbmUlMjBibHVlJTIwZ3JlZW58ZW58MXx8fHwxNzY5NTAwNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Electric blue Paraiba with neon-like glow and brilliance"
    },
    {
      id: "padparadscha-sapphire",
      name: "Padparadscha Sapphire",
      category: "Rare Stones",
      carat: "4.1 Carats",
      origin: "Sri Lanka",
      rarity: "Museum Quality",
      price: "$55,000",
      image: "https://images.unsplash.com/photo-1584828202032-a0f7ecdf6ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXJlJTIwZXhvdGljJTIwZ2Vtc3RvbmUlMjB0YW56YW5pdGUlMjBvcGFsfGVufDF8fHx8MTc3Mjk4Nzg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Rare sunset-colored sapphire with perfect pink-orange blend"
    },
    {
      id: "black-opal",
      name: "Black Opal",
      category: "Rare Stones",
      carat: "8.5 Carats",
      origin: "Lightning Ridge, Australia",
      rarity: "Collector's Grade",
      price: "$32,000",
      image: "https://images.unsplash.com/photo-1771922654039-93bbda6f1c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZSUyMG1pbmluZyUyMG5hdHVyYWwlMjBjcnlzdGFsJTIwZm9ybWF0aW9ufGVufDF8fHx8MTc3Mjk4Nzg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Premium black opal displaying vibrant play-of-color"
    },
    {
      id: "alexandrite",
      name: "Alexandrite",
      category: "Rare Stones",
      carat: "2.8 Carats",
      origin: "Russia",
      rarity: "Investment Grade",
      price: "$38,500",
      image: "https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwamV3ZWxyeSUyMHByZWNpb3VzJTIwZ2Vtc3RvbmUlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3Mjk4Nzg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Rare color-changing alexandrite with strong shift"
    },
    {
      id: "imperial-topaz",
      name: "Imperial Topaz",
      category: "Rare Stones",
      carat: "12.4 Carats",
      origin: "Ouro Preto, Brazil",
      rarity: "Exceptional",
      price: "$24,000",
      image: "https://images.unsplash.com/photo-1605821628253-8120cd950c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ3JlZW4lMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NTAwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Rich peachy-orange imperial topaz of remarkable size"
    }
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Sourcing",
      description: "Directly from the most exclusive mines across six continents"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "One-of-a-Kind",
      description: "Limited availability pieces that may never be seen again"
    },
    {
      icon: <Gem className="h-6 w-6" />,
      title: "Expert Verification",
      description: "Comprehensive analysis and certification by top gemological labs"
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
                Rare Stones
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl text-[#2d3748] mb-6 tracking-wide leading-tight font-heading font-normal">
              Nature's Rarest Treasures
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body font-light">
              Explore our exclusive collection of the world's most exotic and extraordinary gemstones — 
              each piece a testament to nature's artistry and geological wonder.
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

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-[#2d3748] mb-6 tracking-wide leading-tight font-heading font-normal">
                The Art of Rarity
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-body font-light">
                Rare gemstones represent nature's most extraordinary achievements — formed under unique 
                conditions that may never be replicated. Each stone in our collection has been chosen 
                for its exceptional rarity, beauty, and provenance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-body font-light">
                From the color-changing phenomenon of alexandrite to the electric glow of Paraiba 
                tourmaline, these treasures offer collectors the opportunity to own pieces of 
                geological history that appreciate in value and wonder over time.
              </p>
              <button className="group px-8 py-4 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 text-base tracking-wide shadow-lg hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 font-body font-medium">
                Book a Consultation
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1770281068672-8740824834c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBqZXdlbHJ5JTIwZGVzaWduJTIwYmVzcG9rZSUyMGNyYWZ0c21hbnNoaXB8ZW58MXx8fHwxNzcyOTg3ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rare gemstone expertise"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748]/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#c4a962]/20 to-amber-100/20 rounded-2xl -z-10 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
