import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "Monday - Saturday, 10 AM - 6 PM EST",
      cta: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      primary: "info@gemstonelegacy.com",
      secondary: "We respond within 24 hours",
      cta: "Send Email"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Showroom",
      primary: "123 Luxury Lane",
      secondary: "New York, NY 10001",
      cta: "Get Directions"
    }
  ];

  const faqs = [
    {
      question: "Do you offer private viewings?",
      answer: "Yes, we offer exclusive private viewings by appointment in our Manhattan showroom."
    },
    {
      question: "What certifications do your gemstones have?",
      answer: "All our gemstones come with certification from GIA, AGS, or other recognized gemological laboratories."
    },
    {
      question: "Can I commission a custom piece?",
      answer: "Absolutely. Our bespoke service allows you to create unique pieces tailored to your vision."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with full insurance and secure, discreet packaging."
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
              <MessageSquare className="h-4 w-4 text-[#c4a962]" />
              <span className="text-sm text-[#c4a962] tracking-wider uppercase font-body font-medium">
                Get in Touch
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl text-[#2d3748] mb-6 tracking-wide leading-tight font-heading font-normal">
              We're Here to Help
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body font-light">
              Connect with our gemstone experts and begin your journey to finding the perfect treasure. 
              We're available for consultations, viewings, and inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#c4a962]/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl flex items-center justify-center text-[#c4a962] mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl text-[#2d3748] mb-3 font-heading font-medium">
                    {method.title}
                  </h3>
                  <p className="text-lg text-[#2d3748] mb-2 font-body font-medium">
                    {method.primary}
                  </p>
                  <p className="text-sm text-gray-500 mb-6 font-body font-light">
                    {method.secondary}
                  </p>
                  <button className="text-[#c4a962] hover:text-[#b39952] transition-colors text-sm font-body font-medium flex items-center gap-2">
                    {method.cta}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl flex items-center justify-center text-[#c4a962]">
                  <Send className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-3xl text-[#2d3748] font-heading font-medium">Send a Message</h2>
                  <p className="text-sm text-gray-500 font-body font-light">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-body font-medium">First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#c4a962] focus:ring-2 focus:ring-[#c4a962]/20 focus:outline-none transition-all font-body bg-gray-50/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-body font-medium">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#c4a962] focus:ring-2 focus:ring-[#c4a962]/20 focus:outline-none transition-all font-body bg-gray-50/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-body font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#c4a962] focus:ring-2 focus:ring-[#c4a962]/20 focus:outline-none transition-all font-body bg-gray-50/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-body font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#c4a962] focus:ring-2 focus:ring-[#c4a962]/20 focus:outline-none transition-all font-body bg-gray-50/50"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-body font-medium">Subject *</label>
                  <select 
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#c4a962] focus:ring-2 focus:ring-[#c4a962]/20 focus:outline-none transition-all font-body bg-gray-50/50"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="viewing">Schedule a Viewing</option>
                    <option value="custom">Custom Commission</option>
                    <option value="purchase">Purchase Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-body font-medium">Message *</label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#c4a962] focus:ring-2 focus:ring-[#c4a962]/20 focus:outline-none transition-all resize-none font-body bg-gray-50/50"
                    placeholder="Tell us about your gemstone needs or questions..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full group px-8 py-4 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 text-base tracking-wide shadow-lg hover:shadow-xl hover:shadow-amber-500/30 font-body font-medium flex items-center justify-center gap-3"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Hours */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl flex items-center justify-center text-[#c4a962]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl text-[#2d3748] font-heading font-medium">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-body">Monday - Friday</span>
                    <span className="text-[#2d3748] font-body font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-body">Saturday</span>
                    <span className="text-[#2d3748] font-body font-medium">11:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-700 font-body">Sunday</span>
                    <span className="text-gray-500 font-body">By Appointment Only</span>
                  </div>
                </div>
              </div>

              {/* Appointments */}
              <div className="bg-gradient-to-br from-[#2d3748] to-[#1a202c] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#c4a962]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#c4a962]">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-heading font-medium">Private Consultations</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed font-body font-light">
                    Schedule a private consultation with our master gemologists to explore our collection 
                    in an exclusive, personalized setting.
                  </p>
                  <button className="group px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full transition-all duration-300 text-sm font-body font-medium flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Book Appointment
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
                <h3 className="text-2xl text-[#2d3748] mb-6 font-heading font-medium">Common Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <h4 className="text-base text-[#2d3748] mb-2 font-body font-medium">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-body font-light">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#2d3748] mb-4 tracking-wide leading-tight font-heading font-normal">
              Visit Our Showroom
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-body font-light">
              Located in the heart of Manhattan, our elegant showroom is designed for intimate, 
              personalized gemstone experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-[#c4a962] mx-auto mb-4" />
                <p className="text-xl text-[#2d3748] font-heading font-medium">123 Luxury Lane</p>
                <p className="text-lg text-gray-600 font-body">New York, NY 10001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
