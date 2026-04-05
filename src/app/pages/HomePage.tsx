import HeroSlideshow from '@/app/components/HeroSlideshow';
import Categories from '@/app/components/Categories';
import FeaturedCarousel from '@/app/components/FeaturedCarousel';
import About from '@/app/components/About';
import CTASection from '@/app/components/CTASection';
import { useState, useEffect } from 'react';
import { api } from '@/app/utils/api';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGems = async () => {
      try {
        const gems = await api.getAllGems();
        // Transform API data to match the expected format
        const transformedGems = gems.map((gem: any) => ({
          id: gem.id.toString(),
          name: gem.name,
          category: gem.category,
          carat: gem.carat,
          origin: gem.origin,
          image: gem.image_url.startsWith('/uploads') 
            ? `http://localhost:5000${gem.image_url}` 
            : gem.image_url,
          price: gem.price
        }));
        setProducts(transformedGems);
      } catch (error) {
        console.error('Error fetching gems:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGems();
  }, []);

  const categories = [
    {
      title: "Precious Gems",
      description: "Diamonds, rubies, sapphires, and emeralds of exceptional quality.",
      image: "https://images.unsplash.com/photo-1583937443325-97becde478a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcHJlY2lvdXMlMjBnZW0lMjBsdXh1cnl8ZW58MXx8fHwxNzY5NTAwNTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-blue-500"
    },
    {
      title: "Rare Stones",
      description: "Unique and exotic gemstones from the far corners of the earth.",
      image: "https://images.unsplash.com/photo-1745192904204-50b8cd486630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXJlJTIwZXhvdGljJTIwZ2Vtc3RvbmUlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2OTUwMDU5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-emerald-500"
    },
    {
      title: "Custom Collection",
      description: "Bespoke gemstones tailored to your vision and preferences.",
      image: "https://images.unsplash.com/photo-1706955008775-c00874bb4d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBqZXdlbHJ5JTIwY3JhZnRzbWFuc2hpcCUyMGFydGlzYW58ZW58MXx8fHwxNzY5NTAwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-red-500"
    }
  ];

  return (
    <>
      <HeroSlideshow />
      <Categories categories={categories} />
      {loading ? (
        <div className="py-20 text-center">
          <p className="text-gray-600">Loading gemstones...</p>
        </div>
      ) : (
        <FeaturedCarousel products={products} />
      )}
      <About craftImage="https://images.unsplash.com/photo-1608112169461-48616144c894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFraW5nJTIwY3JhZnRzbWFuc2hpcCUyMGhhbmRzfGVufDF8fHx8MTc2OTUwMDYwMHww&ixlib=rb-4.1.0&q=80&w=1080" />
      <CTASection />
    </>
  );
}