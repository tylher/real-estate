// data/heroSlides.js
//
// Each slide is a pair of images (sky + building) plus the copy that
// animates in with it. Swap `sky` / `building` for real photography —
// the building image should have some breathing room at the top edge
// (open sky, roofline not touching the very top) since the headline
// text visually tucks in behind it there.
import {
  HiOutlineBuildingLibrary, // Landmark
  HiOutlineMapPin, // MapPin
  HiOutlineShieldCheck, // ShieldCheck
  HiOutlineSparkles, // Sparkles
} from "react-icons/hi2";

export const heroSlides = [
  {
    id: "serene-01",
    sky: "/images/slide-1-sky.png",
    building: "/images/slide-1-building.png",
    tags: ["Minimal", "Private", "Sunlit"],
    headline: "SERENE",
    headlineAccent: "living",
    subheading:
      "A quiet house on the edge of the water, built to slow you down.",
    meta: "Lekki, Lagos — 2025",
    top: "25%",
    headlineTop: "20%",
    sectionHeight: "130vh",
    // mobile-only:
    sectionHeightMobile: "60dvh",
    skyHeightMobile: "50%",
    
  },
  {
    id: "horizon-03",
    sky: "/images/slide-3-sky.png",
    building: "/images/slide-3-building.png",
    tags: ["Panoramic", "Airy", "Modern"],
    headline: "HORIZON",
    headlineAccent: "line",
    subheading:
      "Floor-to-ceiling glass, framed around a view worth waking up to.",
    meta: "Victoria Island, Lagos — 2025",
    top: "8%",
    headlineTop: "43%",
    sectionHeight: "110vh",
    // mobile-only:
    sectionHeightMobile: "100dvh",
    skyHeightMobile: "45%",
    headlineTopMobile: "16%",
  },
  {
    id: "refuge-04",
    sky: "/images/slide-4-sky.png",
    building: "/images/slide-4-building.png",
    tags: ["Secluded", "Textured", "Calm"],
    headline: "REFUGE",
    headlineAccent: "found",
    subheading: "Tucked into the landscape, away from the noise of the city.",
    meta: "Chevron, Lekki — 2024",
    top: "20%",
    headlineTop: "20%",
    sectionHeight: "160vh",
    // mobile-only:
    sectionHeightMobile: "50dvh",
    skyHeightMobile: "55%",
    headlineBottomMobile: "0%",
  },
];
// data/values.js
//
// Icon must be one of the keys mapped in ValueCard.jsx (lucide-react icons).
// Image should be a photo with enough negative space at the bottom for the
// gradient + text to sit on — same treatment as the hero building images.

export const values = [
  {
    id: "trusted-expertise",
    number: "01",
    icon: HiOutlineShieldCheck,
    title: "Trusted Expertise",
    description:
      "Over a decade guiding buyers and sellers through the Lagos property market — no surprises, no guesswork.",
    image: "/images/trusted-expertise.jpg",
  },
  {
    id: "prime-locations",
    number: "02",
    icon: HiOutlineMapPin,
    title: "Prime Locations",
    description:
      "From Lekki to Ikoyi, we only list homes in neighborhoods we'd be comfortable calling our own.",
    image: "/images/prime-locations.jpg",
  },
  {
    id: "financing-support",
    number: "03",
    icon: HiOutlineBuildingLibrary,
    title: "Financing Made Simple",
    description:
      "We connect you with vetted mortgage partners and walk you through every document, every step of the way.",
    image: "/images/easy-financing.jpg",
  },
  {
    id: "white-glove-service",
    number: "04",
    icon: HiOutlineSparkles,
    title: "White-Glove Service",
    description:
      "From first viewing to closing day, one dedicated agent stays with you — not a rotating call center.",
    image: "/images/white-glove-service.jpg",
  },
];

// data/properties.js
// Sample data for the Featured Listings section. Swap `image` for real photo
// URLs (or a CMS/API response) later — the shape is what components rely on.

export const properties = [
  {
    id: "prop-1",
    tag: "New Listing",
    tagVariant: "clay",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center&auto=format",
    price: "$185,000",
    title: "Sunlit Garden Duplex",
    location: "Oniru Estate, Lekki Phase 1, Lagos",
    beds: 4,
    baths: 3,
    sqft: 2400,
  },
  {
    id: "prop-2",
    tag: "Prime Pick",
    tagVariant: "olive",
    image:
      "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=800&h=600&fit=crop&crop=center&auto=format",
    price: "$620,000",
    title: "Waterfront Villa",
    location: "Banana Island, Ikoyi, Lagos",
    beds: 5,
    baths: 5,
    sqft: 4200,
  },
  {
    id: "prop-3",
    tag: "For Rent",
    tagVariant: "clay",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center&auto=format",
    price: "$1,450",
    title: "Modern Loft Apartment",
    location: "Victoria Island, Lagos",
    beds: 2,
    baths: 2,
    sqft: 1150,
  },
  {
    id: "prop-4",
    tag: "Just Reduced",
    tagVariant: "olive",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center&auto=format",
    price: "$275,000",
    title: "Contemporary Family Home",
    location: "Ikeja GRA, Lagos",
    beds: 4,
    baths: 4,
    sqft: 2800,
  },
  {
    id: "prop-5",
    tag: "Verified",
    tagVariant: "clay",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center&auto=format",
    price: "$95,000",
    title: "Cozy Courtyard Bungalow",
    location: "Magodo Phase 2, Lagos",
    beds: 3,
    baths: 2,
    sqft: 1600,
  },
  {
    id: "prop-6",
    tag: "New Listing",
    tagVariant: "olive",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&crop=center&auto=format",
    price: "$410,000",
    title: "Skyline Penthouse",
    location: "Maitama, Abuja",
    beds: 3,
    baths: 3,
    sqft: 2100,
  },
];


export const COMPANY = {
  image: "/images/home-1.jpg",
  imageAlt: "Modern office interior where the team meets with clients",
  eyebrow: "Who We Are",
  description:
    "For over a decade we've paired deep local market knowledge with a boutique, client-first approach. Every transaction is treated like the only one that matters — because to the person on the other side of the table, it is.",
  stats: [
    { value: "15+", label: "Years Founded" },
    { value: "1.2K", label: "Homes Sold" },
    { value: "98%", label: "Client Satisfaction" },
  ],
  badge: {
    value: "15+ Years",
    label: "In the Industry",
  },
  ctaLabel: "Meet the Team",
  ctaHref: "#agents",
};

export const AGENTS = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Principal Agent",
    phone: "+1 (415) 555-0142",
    email: "sarah@yourbrand.com",
    bio: "Specializes in luxury waterfront listings across the North Shore, with 12 years guiding buyers to the right home.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "marcus-webb",
    name: "Marcus Webb",
    title: "Senior Agent",
    phone: "+1 (415) 555-0198",
    email: "marcus@yourbrand.com",
    bio: "A negotiator at heart — Marcus has closed over $180M in residential sales across the metro area.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "elena-cruz",
    name: "Elena Cruz",
    title: "Listings Director",
    phone: "+1 (415) 555-0173",
    email: "elena@yourbrand.com",
    bio: "Elena's eye for staging and pricing strategy consistently gets sellers above-asking offers.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "daniel-ortiz",
    name: "Daniel Ortiz",
    title: "Buyer Specialist",
    phone: "+1 (415) 555-0156",
    email: "daniel@yourbrand.com",
    bio: "First-time buyers trust Daniel's patient, no-pressure approach to finding the right fit.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "priya-nathan",
    name: "Priya Nathan",
    title: "Relocation Specialist",
    phone: "+1 (415) 555-0187",
    email: "priya@yourbrand.com",
    bio: "Priya helps out-of-state and international clients settle in with zero-stress moves.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
];
