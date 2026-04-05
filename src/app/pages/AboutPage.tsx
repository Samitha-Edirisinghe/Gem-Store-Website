import { motion } from 'motion/react';
import { Award, Shield, Gem, Users, Sparkles, Globe, Heart, Star, Eye } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="h-7 w-7" />,
      title: "Heritage & Excellence",
      description: "Three generations of expertise in gemstone curation, preserving timeless traditions while embracing modern innovation."
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Authenticity Guaranteed",
      description: "Every gemstone is certified and documented, ensuring complete transparency and peace of mind for our discerning clientele."
    },
    {
      icon: <Gem className="h-7 w-7" />,
      title: "Uncompromising Quality",
      description: "Handpicked from the world's finest mines, each stone undergoes rigorous evaluation to meet our exceptional standards."
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Global Sourcing",
      description: "Direct relationships with artisan miners across six continents, bringing you the rarest treasures from earth's depths."
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Ethical Practice",
      description: "Committed to sustainable and responsible sourcing, ensuring every gem supports communities and protects the environment."
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Personalized Service",
      description: "Bespoke consultations with our master gemologists, tailored to your unique vision and aspirations."
    }
  ];

  const expertise = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Expert Curation",
      stat: "70+ Years",
      description: "of combined gemological expertise"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Selection",
      stat: "< 2%",
      description: "of evaluated stones meet our standards"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Rare Discoveries",
      stat: "500+",
      description: "exceptional gemstones curated annually"
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-[#c4a962]" />
                <span className="text-sm text-[#c4a962] tracking-wider uppercase font-body font-medium">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2d3748] mb-6 tracking-wide leading-tight font-heading font-normal">
                From Sri Lankan Mines to Global Recognition
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed font-body font-light">
                Our journey began in 1952 when master gemologist Rajendra Wickramasinghe first 
                ventured into the legendary gem mines of Ratnapura, Sri Lanka. His eye for quality 
                and passion for natural beauty laid the foundation for what would become a 
                multi-generational legacy.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed font-body font-light">
                Through decades of dedication, we've built enduring relationships with artisan 
                miners, master cutters, and collectors across the globe. Each gemstone we curate 
                tells a story — from its formation deep within the earth to its transformation 
                into a breathtaking masterpiece.
              </p>

              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-body font-light">
                Today, under third-generation leadership, we honor our heritage while embracing 
                modern innovations in gemology, sustainability, and ethical sourcing. Our commitment 
                remains unchanged: to bring you the world's most exceptional natural gemstones.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl flex items-center justify-center text-[#c4a962] mb-3">
                      {item.icon}
                    </div>
                    <div className="text-3xl text-[#c4a962] mb-1 font-heading font-medium">
                      {item.stat}
                    </div>
                    <p className="text-sm text-gray-600 font-body font-light">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeSUyMG1ha2luZyUyMGhhbmRzJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc3Mjk4NzM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Precision craftsmanship"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748]/30 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#c4a962]/20 to-amber-100/20 rounded-2xl -z-10 blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-br from-amber-100/30 to-[#c4a962]/10 rounded-full -z-10 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white to-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
              <Gem className="h-4 w-4 text-[#c4a962]" />
              <span className="text-sm text-[#c4a962] tracking-wider uppercase font-body font-medium">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2d3748] mb-6 tracking-wide leading-tight font-heading font-normal">
              Principles That Guide Us
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body font-light px-4">
              Our commitment to excellence is built upon unwavering values that define every aspect of our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#c4a962]/30 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl flex items-center justify-center text-[#c4a962] mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl text-[#2d3748] mb-4 font-heading font-medium">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed font-body font-light">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="py-32 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1760651913970-98e38bd28f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ2Vtc3RvbmUlMjBtaW5lJTIwbmF0dXJhbCUyMGNyeXN0YWx8ZW58MXx8fHwxNzcyOTg3MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Natural gemstone formation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748]/40 to-transparent"></div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1739664664545-5ea43f486f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyOTg3MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury showroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748]/40 to-transparent"></div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-4xl md:text-5xl text-[#2d3748] mb-6 tracking-wide font-heading font-normal">
              Begin Your Journey with Us
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-body font-light">
              Discover the perfect gemstone that resonates with your vision and values. Our experts are here to guide you.
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