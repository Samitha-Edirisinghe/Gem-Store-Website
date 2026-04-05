import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router';
import { Sparkles, Gem, MapPin, Award, Shield, FileCheck, ArrowLeft, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function GemDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Combined all gems data
  const allGems = [
    // Precious Gems
    {
      id: "royal-sapphire",
      name: "Royal Sapphire",
      category: "Precious Gems",
      carat: "5.2 Carats",
      origin: "Kashmir, India",
      clarity: "VVS1",
      price: "$45,000",
      cut: "Cushion Cut",
      treatment: "None (Natural)",
      certification: "GIA Certified",
      image: "https://images.unsplash.com/photo-1735480165036-3d1d2f41460f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2FwcGhpcmUlMjBnZW1zdG9uZSUyMGNsb3NlfGVufDF8fHx8MTc2OTUwMDU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "A magnificent Kashmir sapphire exhibiting the classic 'cornflower blue' hue that has made these stones legendary among collectors. This exceptional specimen displays a velvety appearance with remarkable saturation and tone. Kashmir sapphires are among the world's most coveted gemstones, prized for their unmatched color and rarity. This particular stone comes from the historic Paddar region, known for producing the finest blue sapphires in existence.",
      specifications: [
        { label: "Dimensions", value: "11.2 x 9.8 x 7.1 mm" },
        { label: "Color Grade", value: "Royal Blue" },
        { label: "Fluorescence", value: "None" },
        { label: "Refractive Index", value: "1.762 - 1.770" }
      ],
      highlights: [
        "Exceptional cornflower blue color",
        "Natural, untreated gemstone",
        "GIA certified with full report",
        "Investment-grade provenance",
        "Rare Kashmir origin",
        "Museum-quality clarity"
      ]
    },
    {
      id: "emerald-majesty",
      name: "Emerald Majesty",
      category: "Precious Gems",
      carat: "3.8 Carats",
      origin: "Colombia",
      clarity: "VS1",
      price: "$38,500",
      cut: "Emerald Cut",
      treatment: "Minor Oil (Traditional)",
      certification: "AGS Certified",
      image: "https://images.unsplash.com/photo-1605821628253-8120cd950c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ3JlZW4lMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NTAwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium Colombian emerald with vivid green saturation and exceptional transparency. Sourced from the renowned Muzo mines, this emerald displays the coveted 'jardin' (garden) inclusions that authenticate its Colombian origin. The vibrant green color with subtle blue undertones represents the pinnacle of emerald quality.",
      specifications: [
        { label: "Dimensions", value: "9.8 x 8.2 x 6.4 mm" },
        { label: "Color Grade", value: "Vivid Green" },
        { label: "Fluorescence", value: "Inert" },
        { label: "Refractive Index", value: "1.577 - 1.583" }
      ],
      highlights: [
        "Vivid Colombian green color",
        "Muzo mine provenance",
        "Traditional minor oil treatment",
        "AGS certified",
        "Excellent clarity for emerald",
        "Classic emerald cut"
      ]
    },
    // Rare Stones
    {
      id: "exotic-tanzanite",
      name: "Exotic Tanzanite",
      category: "Rare Stones",
      carat: "6.3 Carats",
      origin: "Tanzania",
      clarity: "VVS2",
      price: "$28,000",
      cut: "Oval Brilliant",
      treatment: "Heat Treated (Standard)",
      certification: "GIA Certified",
      image: "https://images.unsplash.com/photo-1595392029854-3e4c3fdf894b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0YW56YW5pdGUlMjBnZW1zdG9uZXxlbnwxfHx8fDE3Njk1MDA2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Vivid violet-blue tanzanite with exceptional pleochroism, displaying remarkable color shifts from blue to violet depending on viewing angle. Found exclusively in the Merelani Hills of Tanzania, this rare gemstone exhibits superior saturation and brilliance. Tanzanite is 1000 times rarer than diamonds.",
      specifications: [
        { label: "Dimensions", value: "12.4 x 10.1 x 7.8 mm" },
        { label: "Color Grade", value: "AAA Vivid Blue-Violet" },
        { label: "Fluorescence", value: "None" },
        { label: "Refractive Index", value: "1.691 - 1.700" }
      ],
      highlights: [
        "Exceptional color saturation",
        "Strong pleochroism",
        "Single-source gemstone (Tanzania only)",
        "Investment-grade size",
        "GIA certified",
        "Superior clarity"
      ]
    },
    {
      id: "paraiba-tourmaline",
      name: "Paraiba Tourmaline",
      category: "Rare Stones",
      carat: "3.2 Carats",
      origin: "Brazil",
      clarity: "VVS1",
      price: "$42,000",
      cut: "Cushion Cut",
      treatment: "None (Natural)",
      certification: "GIA Certified",
      image: "https://images.unsplash.com/photo-1731342657191-116f97e1bbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VybWFsaW5lJTIwZ2Vtc3RvbmUlMjBibHVlJTIwZ3JlZW58ZW58MXx8fHwxNzY5NTAwNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Electric blue Paraiba tourmaline with neon-like glow and brilliance. This extraordinary gemstone from Brazil's Paraiba state exhibits the signature copper-induced electric blue color that has captivated collectors worldwide. Among the rarest and most valuable colored gemstones in the world.",
      specifications: [
        { label: "Dimensions", value: "9.1 x 8.3 x 6.2 mm" },
        { label: "Color Grade", value: "Neon Blue" },
        { label: "Fluorescence", value: "Weak" },
        { label: "Refractive Index", value: "1.620 - 1.640" }
      ],
      highlights: [
        "Brazilian Paraiba origin",
        "Untreated natural color",
        "Electric neon glow",
        "Exceptional clarity",
        "World-class rarity",
        "GIA certified with origin report"
      ]
    },
    // Custom Collection
    {
      id: "bespoke-engagement-ring",
      name: "Bespoke Engagement Ring",
      category: "Custom Collection",
      carat: "4.2 Carats",
      origin: "Ceylon Sapphire",
      clarity: "IF",
      price: "$48,000",
      cut: "Round Brilliant",
      treatment: "None (Natural)",
      certification: "GIA Certified",
      image: "https://images.unsplash.com/photo-1736154577794-65871df026ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBqZXdlbHJ5JTIwd2VkZGluZyUyMHJpbmdzJTIwbHV4dXJ5JTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzI5ODkwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Exquisite blue Ceylon sapphire surrounded by a halo of VS1 diamonds set in platinum. This bespoke engagement ring was custom designed for a client seeking the perfect balance of classic elegance and modern sophistication. The center stone displays exceptional color and clarity.",
      specifications: [
        { label: "Dimensions", value: "10.2 x 10.2 x 6.8 mm" },
        { label: "Color Grade", value: "Royal Blue" },
        { label: "Setting", value: "Platinum Pavé Band" },
        { label: "Accent Stones", value: "0.85ct Diamond Halo" }
      ],
      highlights: [
        "Custom designed setting",
        "Internally flawless clarity",
        "Natural, untreated sapphire",
        "Platinum construction",
        "Diamond halo accent",
        "Certificate of authenticity"
      ]
    }
  ];

  const gem = allGems.find(g => g.id === id);

  if (!gem) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-[#2d3748] mb-4 font-heading">Gemstone Not Found</h2>
          <Link to="/" className="text-[#c4a962] hover:underline font-body">Return to Homepage</Link>
        </div>
      </div>
    );
  }

  const images = [gem.image, gem.image];

  const relatedGems = allGems.filter(g => g.category === gem.category && g.id !== gem.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50/30 py-6 sm:py-8 md:py-12 mt-[80px] sm:mt-[96px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#c4a962] transition-colors font-body text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Main Image */}
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white mb-6 relative">
                  <img 
                    src={images[selectedImage]}
                    alt={gem.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Certified Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Sparkles className="h-4 w-4 text-[#c4a962]" />
                    <span className="text-sm text-[#c4a962] font-medium font-body">Certified</span>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronLeft className="h-6 w-6 text-[#2d3748]" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronRight className="h-6 w-6 text-[#2d3748]" />
                  </button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-4">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-[#c4a962] shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img 
                        src={img}
                        alt={`${gem.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#c4a962] tracking-widest uppercase font-body font-bold">
                  {gem.category}
                </span>
                <Gem className="h-5 w-5 text-[#c4a962]" />
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl text-[#2d3748] mb-4 tracking-wide font-heading font-normal">
                {gem.name}
              </h1>

              {/* Price */}
              <div className="text-4xl text-[#c4a962] mb-8 font-heading font-bold">
                {gem.price}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Gem className="h-5 w-5 text-[#c4a962]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-body">Weight</div>
                    <div className="text-sm text-[#2d3748] font-body font-bold">{gem.carat}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#c4a962]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-body">Origin</div>
                    <div className="text-sm text-[#2d3748] font-body font-bold">{gem.origin}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl text-[#2d3748] mb-3 font-heading font-medium">Description</h3>
                <p className="text-base text-gray-600 leading-relaxed font-body font-light">
                  {gem.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-xl text-[#2d3748] mb-4 font-heading font-medium">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-body">Cut</span>
                    <span className="text-[#2d3748] font-body font-medium">{gem.cut}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-body">Clarity</span>
                    <span className="text-[#2d3748] font-body font-medium">{gem.clarity}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-body">Treatment</span>
                    <span className="text-[#2d3748] font-body font-medium">{gem.treatment}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600 font-body">Certification</span>
                    <span className="text-[#2d3748] font-body font-medium">{gem.certification}</span>
                  </div>
                  {gem.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-body">{spec.label}</span>
                      <span className="text-[#2d3748] font-body font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-xl text-[#2d3748] mb-4 font-heading font-medium">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {gem.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#c4a962] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 font-body">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-8 py-4 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-full transition-all duration-300 text-base tracking-wide shadow-lg hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 font-body font-medium">
                  Schedule Viewing
                </button>
                <button className="flex-1 px-8 py-4 bg-white hover:bg-gray-50 text-[#2d3748] border-2 border-gray-200 hover:border-[#c4a962] rounded-full transition-all duration-300 text-base tracking-wide font-body font-medium">
                  Request Information
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-[#c4a962]" />
                  </div>
                  <p className="text-xs text-gray-600 font-body">Authenticity Guaranteed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-6 w-6 text-[#c4a962]" />
                  </div>
                  <p className="text-xs text-gray-600 font-body">Certified Quality</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileCheck className="h-6 w-6 text-[#c4a962]" />
                  </div>
                  <p className="text-xs text-gray-600 font-body">Full Documentation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Gems */}
      {relatedGems.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-white to-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-4xl text-[#2d3748] mb-12 text-center font-heading font-normal">
              Similar Gemstones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedGems.map((relatedGem, index) => (
                <motion.div
                  key={relatedGem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/gem/${relatedGem.id}`} className="group block">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={relatedGem.image}
                          alt={relatedGem.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl text-[#2d3748] mb-2 font-heading font-medium group-hover:text-[#c4a962] transition-colors">
                          {relatedGem.name}
                        </h3>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xl text-[#c4a962] font-heading font-bold">
                            {relatedGem.price}
                          </span>
                          <span className="text-sm text-gray-600 font-body">
                            {relatedGem.carat}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}