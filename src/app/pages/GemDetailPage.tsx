import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router';
import { Sparkles, Gem, MapPin, Award, Shield, FileCheck, ArrowLeft, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { api } from '@/app/utils/api';

export default function GemDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [gem, setGem] = useState<any>(null);
  const [relatedGems, setRelatedGems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGemData = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Fetch the specific gem
        const gemData = await api.getGemById(id);
        
        // Transform the gem data
        const transformedGem = {
          ...gemData,
          image: gemData.image_url.startsWith('/uploads') 
            ? `http://localhost:5000${gemData.image_url}` 
            : gemData.image_url,
          specifications: Array.isArray(gemData.specifications) ? gemData.specifications : [],
          highlights: Array.isArray(gemData.highlights) ? gemData.highlights : []
        };
        
        setGem(transformedGem);

        // Fetch related gems from the same category
        if (gemData.category) {
          const allGemsInCategory = await api.getAllGems(gemData.category);
          const related = allGemsInCategory
            .filter((g: any) => g.id.toString() !== id)
            .slice(0, 3)
            .map((g: any) => ({
              ...g,
              image: g.image_url.startsWith('/uploads') 
                ? `http://localhost:5000${g.image_url}` 
                : g.image_url
            }));
          setRelatedGems(related);
        }
      } catch (error) {
        console.error('Error fetching gem:', error);
        setError('Failed to load gemstone details');
      } finally {
        setLoading(false);
      }
    };

    fetchGemData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 font-body">Loading gemstone details...</p>
        </div>
      </div>
    );
  }

  if (error || !gem) {
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