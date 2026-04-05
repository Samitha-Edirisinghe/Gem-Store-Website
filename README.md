# Luxury Gemstone Website

A premium, modern gemstone e-commerce website built with React, showcasing the beauty and authenticity of natural gemstones with a sophisticated, luxury aesthetic.

## 🚀 Quick Start (Run Locally)

### Prerequisites
- **Node.js** 18.x or higher ([Download here](https://nodejs.org/))
- **npm** or **pnpm** (pnpm recommended for faster installs)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173
   ```

That's it! The website should now be running on your local machine. 🎉

For detailed installation instructions and troubleshooting, see [INSTALLATION.md](./INSTALLATION.md).

## 🎨 Design Philosophy

This website follows high-end jewelry brand standards with:
- **Color Palette**: Soft ivory backgrounds (`#faf9f7`), deep charcoal/navy (`#2d3748`), and muted gold/champagne accents (`#c4a962`)
- **Typography**: 
  - Headings: Cormorant Garamond (serif)
  - Body: Inter (sans-serif)
- **Interactions**: Smooth micro-interactions with gold glow effects
- **Layout**: Generous white space for a calm, trustworthy feel
- **Aesthetic**: Premium, minimal, and modern throughout

## 📁 Project Structure

```
luxury-gemstone-website/
│
├── public/                     # Public static assets
│   └── vite.svg               # Favicon
│
├── src/
│   ├── app/
│   │   ├── components/           # Reusable React components
│   │   │   ├── figma/            # Figma-specific components
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   │
│   │   │   ├── ui/               # Shadcn/UI component library
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── tooltip.tsx
│   │   │   │   └── ... (40+ UI components)
│   │   │   │
│   │   │   ├── About.tsx         # About section component
│   │   │   ├── CTASection.tsx    # Call-to-action section
│   │   │   ├── Categories.tsx    # Category cards component
│   │   │   ├── Contact.tsx       # Contact form component
│   │   │   ├── FeaturedCarousel.tsx  # Featured gems carousel
│   │   │   ├── Footer.tsx        # Site footer
│   │   │   ├── Header.tsx        # Site navigation header
│   │   │   ├── Hero.tsx          # Hero section component
│   │   │   ├── HeroSlideshow.tsx # Full-width hero slideshow
│   │   │   └── ProductGrid.tsx   # Product grid layout
│   │   │
│   │   ├── pages/                # Route page components
│   │   │   ├── Root.tsx          # Root layout with Header/Footer
│   │   │   ├── HomePage.tsx      # Homepage (/)
│   │   │   ├── AboutPage.tsx     # About Us page (/about)
│   │   │   ├── PreciousGemsPage.tsx    # Precious Gems catalog (/precious-gems)
│   │   │   ├── RareStonesPage.tsx      # Rare Stones catalog (/rare-stones)
│   │   │   ├── CustomCollectionPage.tsx # Custom Collection (/custom-collection)
│   │   │   ├── ContactPage.tsx   # Contact page (/contact)
│   │   │   └── GemDetailPage.tsx # Individual gem details (/gem/:id)
│   │   │
│   │   ├── App.tsx               # Main app component with RouterProvider
│   │   └── routes.ts             # React Router configuration
│   │
│   ├── styles/                   # Global styles and CSS
│   │   ├── index.css             # Main CSS entry point
│   │   ├── tailwind.css          # Tailwind CSS imports
│   │   ├── theme.css             # Design tokens and theme variables
│   │   ├── fonts.css             # Font imports (Google Fonts)
│   │   └── slick-custom.css      # Custom carousel styles
│   │
│   ├── imports/                  # Figma imported assets (if any)
│   └── main.tsx                  # Application entry point
│
├── index.html                    # HTML entry point
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.node.json            # TypeScript config for Node files
├── vite.config.ts                # Vite configuration
├── postcss.config.mjs            # PostCSS configuration
├── .gitignore                    # Git ignore rules
├── ATTRIBUTIONS.md               # Asset attributions
├── INSTALLATION.md               # Detailed installation guide
├── QUICKSTART.md                 # Quick start guide
└── README.md                     # This file
```

## 🗂️ Component Breakdown

### **Core Layout Components**

| Component | Location | Purpose |
|-----------|----------|---------|
| `Header` | `/src/app/components/Header.tsx` | Site navigation with logo and menu links |
| `Footer` | `/src/app/components/Footer.tsx` | Footer with company info and links |
| `Root` | `/src/app/pages/Root.tsx` | Layout wrapper containing Header/Footer |

### **Homepage Components**

| Component | Location | Purpose |
|-----------|----------|---------|
| `HeroSlideshow` | `/src/app/components/HeroSlideshow.tsx` | Full-width hero carousel with auto-play |
| `Categories` | `/src/app/components/Categories.tsx` | Three category cards (Precious Gems, Rare Stones, Custom) |
| `FeaturedCarousel` | `/src/app/components/FeaturedCarousel.tsx` | Carousel showcasing featured gemstones |
| `About` | `/src/app/components/About.tsx` | About section with craftsmanship image |
| `CTASection` | `/src/app/components/CTASection.tsx` | Call-to-action section |

### **Page Components**

| Page | Route | File | Description |
|------|-------|------|-------------|
| Home | `/` | `HomePage.tsx` | Homepage with hero, categories, featured gems |
| About Us | `/about` | `AboutPage.tsx` | Company story, values, expertise |
| Precious Gems | `/precious-gems` | `PreciousGemsPage.tsx` | Catalog of precious gemstones |
| Rare Stones | `/rare-stones` | `RareStonesPage.tsx` | Catalog of rare gemstones |
| Custom Collection | `/custom-collection` | `CustomCollectionPage.tsx` | Bespoke jewelry portfolio |
| Contact | `/contact` | `ContactPage.tsx` | Contact form and business info |
| Gem Detail | `/gem/:id` | `GemDetailPage.tsx` | Individual gemstone details |

### **Shared Components**

| Component | Purpose |
|-----------|---------|
| `ProductGrid` | Grid layout for product listings |
| `Contact` | Contact form with email and message fields |

## 🛣️ Routing Structure

```
/ (Root Layout - includes Header & Footer)
│
├── / (HomePage)
├── /about (AboutPage)
├── /precious-gems (PreciousGemsPage)
├── /rare-stones (RareStonesPage)
├── /custom-collection (CustomCollectionPage)
├── /contact (ContactPage)
└── /gem/:id (GemDetailPage)
    └── Dynamic routes for each gemstone:
        - /gem/royal-sapphire
        - /gem/emerald-majesty
        - /gem/exotic-tanzanite
        - /gem/paraiba-tourmaline
        - etc.
```

## 🎨 Design System

### **Color Tokens** (defined in `/src/styles/theme.css`)

```css
--color-ivory: #faf9f7;          /* Background */
--color-charcoal: #2d3748;       /* Dark text */
--color-gold: #c4a962;           /* Accent */
--color-gold-light: #d4b976;     /* Light accent */
--color-gold-dark: #b39952;      /* Dark accent */
```

### **Typography**

- **Headings**: `font-heading` → Cormorant Garamond
- **Body**: `font-body` → Inter

### **Key UI Patterns**

1. **Gem Cards**: Consistent across all catalog pages
   - Square aspect ratio image
   - Category label (uppercase, gold)
   - Certified badge overlay
   - Gem name (large serif heading)
   - Carats with gem icon
   - Origin with map pin icon
   - Price and "View Details" button

2. **Hover Effects**:
   - Image scale on hover (1.1x)
   - Gold glow shadows
   - Smooth transitions (300-700ms)

3. **Buttons**:
   - Primary: Gold gradient (`bg-gradient-to-r from-[#c4a962] to-[#d4b976]`)
   - Hover: Scale + shadow enhancement
   - Rounded full corners

## 🧰 Tech Stack

### **Core**
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### **Routing**
- **React Router v7** - Client-side routing (Data Router mode)

### **Styling**
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing

### **UI Libraries**
- **Shadcn/UI** - Headless component library
- **Lucide React** - Icon library
- **Motion (Framer Motion)** - Animation library
- **React Slick** - Carousel component
- **Slick Carousel** - Carousel base library

### **Forms**
- **React Hook Form** - Form state management

### **Images**
- **Unsplash** - Stock photography source
- **Figma Assets** - Custom imported images

## 🚀 Getting Started

### **Installation**

```bash
# Install dependencies
npm install
# or
pnpm install
```

### **Development**

```bash
# Start development server
npm run dev
# or
pnpm dev
```

Visit `http://localhost:5173` to view the site.

### **Build**

```bash
# Build for production
npm run build
# or
pnpm build
```

### **Preview Production Build**

```bash
# Preview production build locally
npm run preview
# or
pnpm preview
```

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-router": "^7.1.3",
  "motion": "latest",
  "react-slick": "^0.30.2",
  "slick-carousel": "^1.8.1",
  "lucide-react": "latest",
  "react-hook-form": "7.55.0",
  "tailwindcss": "^4.0.0"
}
```

## 🎯 Features

### **Homepage**
- ✅ Premium full-width hero slideshow
- ✅ Category navigation cards
- ✅ Featured gemstone carousel (3 columns)
- ✅ About section with craftsmanship image
- ✅ CTA section

### **About Page**
- ✅ Company story
- ✅ Core values (3 columns)
- ✅ Expertise showcase
- ✅ Team/craftsmanship images
- ⚠️ No hero section (direct content start)
- ⚠️ "Our Journey" timeline section removed

### **Catalog Pages** (Precious Gems, Rare Stones, Custom Collection)
- ✅ Header with category title and description
- ✅ Feature cards (3 columns)
- ✅ Product grid (3 columns)
- ✅ Consistent gem card design
- ✅ Links to individual gem detail pages
- ✅ CTA section

### **Gem Detail Page**
- ✅ Image gallery with thumbnails
- ✅ Navigation arrows and image selection
- ✅ Category, name, and price display
- ✅ Quick info cards (weight, origin)
- ✅ Full description
- ✅ Detailed specifications table
- ✅ Key highlights with checkmarks
- ✅ CTA buttons (Schedule Viewing, Request Info)
- ✅ Trust badges
- ✅ Related gemstones section
- ✅ Back navigation

### **Contact Page**
- ✅ Contact form (name, email, phone, message)
- ✅ Business information
- ✅ Office hours
- ✅ Contact details (phone, email, address)

### **Navigation**
- ✅ Clean minimal header
- ✅ No cart icons
- ✅ No search functionality
- ✅ No "Book Consultation" buttons in nav
- ✅ Responsive mobile menu

## 🎨 Gemstone Data Structure

```typescript
interface Gem {
  id: string;                    // URL-friendly identifier
  name: string;                  // Display name
  category: string;              // "Precious Gems" | "Rare Stones" | "Custom Collection"
  carat: string;                 // Weight (e.g., "5.2 Carats")
  origin: string;                // Location (e.g., "Kashmir, India")
  clarity: string;               // Clarity grade (e.g., "VVS1", "IF")
  price: string;                 // Formatted price (e.g., "$45,000")
  cut: string;                   // Cut style (e.g., "Cushion Cut")
  treatment: string;             // Treatment info
  certification: string;         // Certification body
  image: string;                 // Primary image URL
  description: string;           // Long description
  specifications: Array<{        // Additional specs
    label: string;
    value: string;
  }>;
  highlights: string[];          // Key selling points
}
```

## 🖼️ Image Guidelines

### **Using Unsplash Images**
Images are sourced from Unsplash with search queries optimized for luxury gemstone photography.

### **Using Figma Assets**
Raster images use the `figma:asset` virtual module scheme:
```tsx
import img from "figma:asset/abc123.png"
```

SVG vectors use relative file paths:
```tsx
import svgPaths from "../imports/svg-wg56ef214f"
```

## 🎯 Navigation Improvements

### **Removed Elements** (per design requirements)
- ❌ Cart icons
- ❌ "Book Consultation" buttons in navigation
- ❌ Search functionality

### **Clean Header Features**
- ✅ Logo
- ✅ Main navigation links only
- ✅ Minimal, refined design
- ✅ Sticky positioning

## 📝 Content Pages

### **Homepage Sections**
1. Hero Slideshow (3 slides)
2. Categories (3 cards)
3. Featured Gemstones (6 items, carousel)
4. About Preview
5. CTA

### **About Page Sections**
1. Our Story (text + images)
2. Values (3 columns)
3. Expertise (text + image)
4. ~~Our Journey~~ (REMOVED)

### **Catalog Pages**
1. Header (title + description)
2. Features (3 cards)
3. Product Grid (6+ items)
4. CTA or Info Section

### **Contact Page Sections**
1. Contact Form
2. Business Information
3. Map/Location Info

## 🔧 Customization

### **Adding New Gemstones**

1. Add gem data to the appropriate page array in `PreciousGemsPage.tsx`, `RareStonesPage.tsx`, or `CustomCollectionPage.tsx`
2. Also add to `GemDetailPage.tsx` in the `allGems` array
3. Ensure each gem has a unique `id`

### **Updating Colors**

Edit `/src/styles/theme.css` to update brand colors globally.

### **Changing Fonts**

1. Update font imports in `/src/styles/fonts.css`
2. Update font family tokens in `/src/styles/theme.css`

## 📄 License

This project showcases premium gemstone products with a luxury design aesthetic.

---

**Built with precision and elegance** ✨