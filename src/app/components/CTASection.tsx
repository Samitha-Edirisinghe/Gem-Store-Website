import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#2d3748] via-[#1a202c] to-[#2d3748] relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 169, 98, 0.4) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c4a962]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-[#c4a962]" />
            <span className="text-sm text-[#c4a962] tracking-wider uppercase font-body font-medium">
              Exclusive Offer
            </span>
          </div>

          <h2 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-wide leading-tight font-heading font-normal"
          >
            Discover Gemstones<br />
            <span className="text-[#c4a962]">Crafted by Nature</span>
          </h2>
          
          <p 
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-body font-light"
          >
            Perfected by expertise. Experience the timeless beauty of authentic,
            ethically sourced gemstones from our exclusive collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 text-base tracking-wide font-body font-medium" 
            >
              View Our Collections
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              className="group inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-[#2d3748] hover:border-white rounded-full transition-all duration-300 backdrop-blur-sm hover:shadow-xl text-base tracking-wide font-body font-medium" 
            >
              Schedule Consultation
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c4a962] rounded-full"></div>
              <span className="text-sm font-body font-light">
                Certified Authentic
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c4a962] rounded-full"></div>
              <span className="text-sm font-body font-light">
                Ethically Sourced
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#c4a962] rounded-full"></div>
              <span className="text-sm font-body font-light">
                Lifetime Guarantee
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
