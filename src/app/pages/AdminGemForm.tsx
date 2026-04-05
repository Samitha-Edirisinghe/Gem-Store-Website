import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Upload, X, Save } from 'lucide-react';
import { api } from '../utils/api';
import { toast } from 'sonner';

export default function AdminGemForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Precious Gems',
    carat: '',
    origin: '',
    clarity: '',
    price: '',
    cut: '',
    treatment: '',
    certification: '',
    description: '',
  });

  const [specifications, setSpecifications] = useState([
    { label: '', value: '' }
  ]);

  const [highlights, setHighlights] = useState(['']);

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }

    if (isEdit && id) {
      fetchGem(id);
    }
  }, [token, isEdit, id, navigate]);

  const fetchGem = async (gemId: string) => {
    try {
      const gem = await api.getGemById(gemId);
      setFormData({
        name: gem.name,
        category: gem.category,
        carat: gem.carat,
        origin: gem.origin,
        clarity: gem.clarity || '',
        price: gem.price,
        cut: gem.cut || '',
        treatment: gem.treatment || '',
        certification: gem.certification || '',
        description: gem.description || '',
      });

      if (gem.specifications && Array.isArray(gem.specifications)) {
        setSpecifications(gem.specifications.length > 0 ? gem.specifications : [{ label: '', value: '' }]);
      }

      if (gem.highlights && Array.isArray(gem.highlights)) {
        setHighlights(gem.highlights.length > 0 ? gem.highlights : ['']);
      }

      if (gem.image_url) {
        const imageUrl = gem.image_url.startsWith('http') 
          ? gem.image_url 
          : `http://localhost:5000${gem.image_url}`;
        setImagePreview(imageUrl);
      }
    } catch (error) {
      toast.error('Failed to fetch gem details');
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addSpecification = () => {
    setSpecifications([...specifications, { label: '', value: '' }]);
  };

  const removeSpecification = (index: number) => {
    setSpecifications(specifications.filter((_, i) => i !== index));
  };

  const updateSpecification = (index: number, field: 'label' | 'value', value: string) => {
    const updated = [...specifications];
    updated[index][field] = value;
    setSpecifications(updated);
  };

  const addHighlight = () => {
    setHighlights([...highlights, '']);
  };

  const removeHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const updateHighlight = (index: number, value: string) => {
    const updated = [...highlights];
    updated[index] = value;
    setHighlights(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      toast.error('Please login first');
      navigate('/admin/login');
      return;
    }

    if (!isEdit && !imageFile) {
      toast.error('Please upload an image');
      return;
    }

    setLoading(true);

    try {
      const submitData = new FormData();

      // Add basic fields
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key as keyof typeof formData]);
      });

      // Add specifications (filter empty ones)
      const validSpecs = specifications.filter(s => s.label && s.value);
      submitData.append('specifications', JSON.stringify(validSpecs));

      // Add highlights (filter empty ones)
      const validHighlights = highlights.filter(h => h.trim());
      submitData.append('highlights', JSON.stringify(validHighlights));

      // Add image if new file selected
      if (imageFile) {
        submitData.append('image', imageFile);
      }

      if (isEdit && id) {
        await api.updateGem(id, submitData, token);
        toast.success('Gem updated successfully!');
      } else {
        await api.createGem(submitData, token);
        toast.success('Gem created successfully!');
      }

      navigate('/admin/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to save gem');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-2xl font-heading text-[#2d3748]">
                {isEdit ? 'Edit Gem' : 'Add New Gem'}
              </h1>
              <p className="text-sm text-gray-600 font-body">
                {isEdit ? 'Update gem information' : 'Add a new gemstone to your collection'}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
                Gem Image *
              </label>
              <div className="flex flex-col items-center gap-4">
                {imagePreview && (
                  <div className="relative w-64 h-64 rounded-xl overflow-hidden border-2 border-gray-200">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview('');
                        setImageFile(null);
                      }}
                      className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                <label className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors font-body">
                  <Upload className="h-5 w-5" />
                  {imagePreview ? 'Change Image' : 'Upload Image'}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Gem Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="e.g., Royal Sapphire"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                >
                  <option value="Precious Gems">Precious Gems</option>
                  <option value="Rare Stones">Rare Stones</option>
                  <option value="Custom Collection">Custom Collection</option>
                </select>
              </div>

              <div>
                <label htmlFor="carat" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Carat *
                </label>
                <input
                  type="text"
                  id="carat"
                  name="carat"
                  value={formData.carat}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="e.g., 5.2 Carats"
                />
              </div>

              <div>
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Origin *
                </label>
                <input
                  type="text"
                  id="origin"
                  name="origin"
                  value={formData.origin}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="e.g., Kashmir, India"
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Price *
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="e.g., $45,000"
                />
              </div>

              <div>
                <label htmlFor="clarity" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Clarity
                </label>
                <input
                  type="text"
                  id="clarity"
                  name="clarity"
                  value={formData.clarity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="e.g., VVS1"
                />
              </div>

              <div>
                <label htmlFor="cut" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Cut
                </label>
                <input
                  type="text"
                  id="cut"
                  name="cut"
                  value={formData.cut}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="e.g., Cushion Cut"
                />
              </div>

              <div>
                <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Treatment
                </label>
                <input
                  type="text"
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="e.g., None (Natural)"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="certification" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Certification
                </label>
                <input
                  type="text"
                  id="certification"
                  name="certification"
                  value={formData.certification}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="e.g., GIA Certified"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                  placeholder="Detailed description of the gemstone..."
                />
              </div>
            </div>

            {/* Specifications */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700 font-body">
                  Specifications
                </label>
                <button
                  type="button"
                  onClick={addSpecification}
                  className="text-sm text-[#c4a962] hover:text-[#b39952] font-body"
                >
                  + Add Specification
                </button>
              </div>
              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Label (e.g., Dimensions)"
                      value={spec.label}
                      onChange={(e) => updateSpecification(index, 'label', e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                    />
                    <input
                      type="text"
                      placeholder="Value (e.g., 11.2 x 9.8 x 7.1 mm)"
                      value={spec.value}
                      onChange={(e) => updateSpecification(index, 'value', e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                    />
                    <button
                      type="button"
                      onClick={() => removeSpecification(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700 font-body">
                  Key Highlights
                </label>
                <button
                  type="button"
                  onClick={addHighlight}
                  className="text-sm text-[#c4a962] hover:text-[#b39952] font-body"
                >
                  + Add Highlight
                </button>
              </div>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      placeholder="e.g., Exceptional color saturation"
                      value={highlight}
                      onChange={(e) => updateHighlight(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                    />
                    <button
                      type="button"
                      onClick={() => removeHighlight(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate('/admin/dashboard')}
                className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-body"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-body"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-5 w-5" />
                    {isEdit ? 'Update Gem' : 'Create Gem'}
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
