import HeroSlideshow from '@/app/components/HeroSlideshow';
import Categories from '@/app/components/Categories';
import FeaturedCarousel from '@/app/components/FeaturedCarousel';
import About from '@/app/components/About';
import CTASection from '@/app/components/CTASection';

export default function HomePage() {
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

  const products = [
    {
      id: "royal-sapphire",
      name: "Royal Sapphire",
      category: "Precious Gems",
      carat: "5.2 Carats",
      origin: "Kashmir, India",
      image: "https://images.unsplash.com/photo-1735480165036-3d1d2f41460f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2FwcGhpcmUlMjBnZW1zdG9uZSUyMGNsb3NlfGVufDF8fHx8MTc2OTUwMDU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$45,000"
    },
    {
      id: "emerald-majesty",
      name: "Emerald Majesty",
      category: "Precious Gems",
      carat: "3.8 Carats",
      origin: "Colombia",
      image: "https://images.unsplash.com/photo-1605821628253-8120cd950c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ3JlZW4lMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NTAwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$38,500"
    },
    {
      id: "crimson-ruby",
      name: "Crimson Ruby",
      category: "Precious Gems",
      carat: "4.5 Carats",
      origin: "Myanmar",
      image: "https://images.unsplash.com/photo-1766560359717-c3b0b70e7610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBydWJ5JTIwZ2Vtc3RvbmUlMjBsdXh1cnl8ZW58MXx8fHwxNzY5NTAwNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$52,000"
    },
    {
      id: "diamond-perfection",
      name: "Diamond Perfection",
      category: "Rare Stones",
      carat: "2.1 Carats",
      origin: "South Africa",
      image: "https://images.unsplash.com/photo-1641885503196-3379a1725e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRpYW1vbmQlMjBicmlsbGlhbnQlMjBjdXR8ZW58MXx8fHwxNzY5NTAwNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$65,000"
    },
    {
      id: "exotic-tanzanite",
      name: "Exotic Tanzanite",
      category: "Rare Stones",
      carat: "6.3 Carats",
      origin: "Tanzania",
      image: "https://images.unsplash.com/photo-1595392029854-3e4c3fdf894b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB0YW56YW5pdGUlMjBnZW1zdG9uZXxlbnwxfHx8fDE3Njk1MDA2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$28,000"
    },
    {
      id: "paraiba-tourmaline",
      name: "Paraiba Tourmaline",
      category: "Custom Collection",
      carat: "3.2 Carats",
      origin: "Brazil",
      image: "https://images.unsplash.com/photo-1731342657191-116f97e1bbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VybWFsaW5lJTIwZ2Vtc3RvbmUlMjBibHVlJTIwZ3JlZW58ZW58MXx8fHwxNzY5NTAwNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$42,000"
    }
  ];

  return (
    <>
      <HeroSlideshow />
      <Categories categories={categories} />
      <FeaturedCarousel products={products} />
      <About craftImage="https://images.unsplash.com/photo-1608112169461-48616144c894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFraW5nJTIwY3JhZnRzbWFuc2hpcCUyMGhhbmRzfGVufDF8fHx8MTc2OTUwMDYwMHww&ixlib=rb-4.1.0&q=80&w=1080" />
      <CTASection />
    </>
  );
}