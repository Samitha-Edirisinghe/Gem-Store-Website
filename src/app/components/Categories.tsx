import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Precious Gems",
      description: "Timeless classics including diamonds, rubies, sapphires, and emeralds",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBydWJ5JTIwZ2Vtc3RvbmV8ZW58MXx8fHwxNzcyOTg3MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-rose-500 to-pink-600",
      route: "/precious-gems"
    },
    {
      title: "Rare Stones",
      description: "Exotic gemstones like alexandrite, paraiba tourmaline, and tanzanite",
      image: "https://images.unsplash.com/photo-1595392029854-3e4c3fdf894b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0YW56YW5pdGUlMjBnZW1zdG9uZXxlbnwxfHx8fDE3Njk1MDA2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-purple-500 to-indigo-600",
      route: "/rare-stones"
    },
    {
      title: "Custom Collection",
      description: "Bespoke gemstones curated to your unique vision and specifications",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBqZXdlbHJ5JTIwZ2VtJTIwZGVzaWdufGVufDF8fHx8MTc2OTUwMDYwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-amber-500 to-yellow-600",
      route: "/custom-collection"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2d3748] mb-4 sm:mb-6 tracking-wide font-heading font-normal">
            Our Collections
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-body font-light px-4">
            Discover our curated selection of the world's most exceptional gemstones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => navigate(category.route)}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748]/95 via-[#2d3748]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated gold border overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 border-2 border-[#c4a962]/50 m-4 rounded-lg"></div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div 
                  className="h-1 bg-gradient-to-r from-[#c4a962] to-[#d4b976] mb-5 rounded-full"
                  initial={{ width: '3rem' }}
                  whileInView={{ width: '5rem' }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
                
                <h3 
                  className="text-4xl text-white mb-3 tracking-wide font-heading font-medium"
                >
                  {category.title}
                </h3>
                
                <p 
                  className="text-gray-200 mb-4 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-body font-light"
                >
                  {category.description}
                </p>
                
                <div className="flex items-center gap-2 text-[#c4a962] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <span className="text-sm tracking-wider uppercase font-body font-medium">
                    Explore Collection
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}