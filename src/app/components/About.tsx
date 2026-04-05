import { motion } from 'motion/react';
import { Award, Shield, Gem, Users, CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Authenticity",
      description: "Every gemstone certified by international gemological institutes"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Ethical Sourcing",
      description: "Sustainably sourced from responsible mines worldwide"
    }
  ];

  const craftImage = "https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeSUyMG1ha2luZyUyMGhhbmRzJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc3Mjk4NzM3MXww&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-[#faf9f7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
              <img 
                src={craftImage}
                alt="Gemstone craftsmanship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Elegant overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748]/40 to-transparent opacity-60"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#c4a962]/20 to-amber-100/20 rounded-2xl -z-10 blur-2xl"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-br from-amber-100/30 to-[#c4a962]/10 rounded-full -z-10 blur-3xl"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
              <CheckCircle2 className="h-4 w-4 text-[#c4a962]" />
              <span className="text-sm text-[#c4a962] tracking-wider uppercase font-body font-medium">
                Since 1952
              </span>
            </div>

            <h2 
              className="text-5xl md:text-6xl text-[#2d3748] mb-6 tracking-wide leading-tight font-heading font-normal"
            >
              Our Legacy of Excellence
            </h2>
            
            <p 
              className="text-lg text-gray-600 mb-6 leading-relaxed font-body font-light"
            >
              Since 1952, Gemstone Legacy has been at the forefront of discovering and curating 
              the world's most exceptional natural gemstones. Our journey began in the heart of 
              Sri Lanka's gem mines, where our founder's passion for these natural wonders 
              transformed into a legacy spanning three generations.
            </p>
            
            <p 
              className="text-lg text-gray-600 mb-10 leading-relaxed font-body font-light"
            >
              Today, we work directly with artisan miners and master cutters across the globe, 
              ensuring every gemstone meets our uncompromising standards of quality, beauty, 
              and ethical sourcing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start space-x-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-[#c4a962]/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl flex items-center justify-center text-[#c4a962] group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 
                        className="text-xl text-[#2d3748] mb-1.5 font-heading font-medium"
                      >
                        {feature.title}
                      </h4>
                      <p 
                        className="text-sm text-gray-600 leading-relaxed font-body font-light"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button 
              className="group px-8 py-4 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 text-base tracking-wide shadow-lg hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 font-body font-medium"
            >
              Learn More About Us
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}