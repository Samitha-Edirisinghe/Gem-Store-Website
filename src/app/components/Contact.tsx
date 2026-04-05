import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-[#faf9f7] to-white">
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
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-body font-light px-4">
            Have questions about our gemstones? Our experts are here to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 
                className="text-3xl text-gray-900 mb-6 tracking-wide"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Visit Our Showroom
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 
                      className="text-lg text-gray-900 mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Address
                    </h4>
                    <p 
                      className="text-gray-600"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      123 Diamond Street<br />
                      Beverly Hills, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 
                      className="text-lg text-gray-900 mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Phone
                    </h4>
                    <p 
                      className="text-gray-600"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      +1 (555) 123-4567<br />
                      Mon - Sat: 10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 
                      className="text-lg text-gray-900 mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Email
                    </h4>
                    <p 
                      className="text-gray-600"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      info@gemstonelegacy.com<br />
                      support@gemstonelegacy.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <MapPin className="h-12 w-12" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <h3 
              className="text-3xl text-gray-900 mb-6 tracking-wide"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-600/50 flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}