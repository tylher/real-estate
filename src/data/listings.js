// data/listingsHero.js

export const listingsHero = {
  eyebrow: "Explore a wide range of properties",
  headlineMain: "Discover the best properties",
  headlineAccent: "Worldwide.",
  cta: { label: "Browse Listings", href: "#properties" },
  image: "/images/listing-hero.jpg",
};

export const SAMPLE_PROPERTIES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$485,000",
    title: "Maple Street Cottage",
    location: "Portland, OR",
    beds: 3,
    baths: 2,
    sqft: 1850,
    description:
      "Charming craftsman with updated kitchen, hardwood floors, and a private backyard garden.",
    amenities: ["Fireplace", "Garage", "Hardwood Floors", "Deck"],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    tag: "For Rent",
    tagVariant: "clay",
    price: "$2,400/mo",
    title: "Modern Loft on 5th",
    location: "Austin, TX",
    beds: 1,
    baths: 1,
    sqft: 950,
    description:
      "Industrial-chic loft with exposed brick, high ceilings, and a rooftop pool.",
    amenities: ["Pool", "Gym", "Rooftop", "In-unit Laundry"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1668438712649-ffd85f756de5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$625,000",
    title: "Sunset Hills Ranch",
    location: "Boise, ID",
    beds: 4,
    baths: 3,
    sqft: 2450,
    description:
      "Sprawling ranch with open floor plan, granite countertops, and a three-car garage.",
    amenities: [
      "Granite Counters",
      "Walk-in Closet",
      "Smart Home",
      "Mountain Views",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    ],
  },
  {
    id: 4, // new property – you can keep as number or change to string
    tag: "For Rent",
    tagVariant: "clay",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", // replaced with a working downtown apartment photo
    price: "$3,100/mo",
    title: "Downtown Executive Suite",
    location: "Seattle, WA",
    beds: 2,
    baths: 2,
    sqft: 1100,
    description:
      "Penthouse suite with floor-to-ceiling windows, concierge, and waterfront views.",
    amenities: ["Concierge", "Fitness Center", "Valet", "Water View"],
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$315,000",
    title: "Cozy Bungalow",
    location: "Nashville, TN",
    beds: 2,
    baths: 1,
    sqft: 1100,
    description:
      "Perfect starter home with a large front porch and mature shade trees.",
    amenities: ["Porch", "Updated Bath", "New Roof", "Fenced Yard"],
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$890,000",
    title: "Lakefront Retreat",
    location: "Lake Tahoe, CA",
    beds: 5,
    baths: 4,
    sqft: 3200,
    description:
      "Stunning lake views, private dock, and a great room with a stone fireplace.",
    amenities: ["Dock", "Hot Tub", "Wine Cellar", "Heated Floors"],
    gallery: [
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    ],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    tag: "For Rent",
    tagVariant: "clay",
    price: "$4,200/mo",
    title: "Urban Townhouse",
    location: "Denver, CO",
    beds: 3,
    baths: 2.5,
    sqft: 1900,
    description:
      "Sleek townhouse with rooftop terrace, modern finishes, and a two-car garage.",
    amenities: ["Rooftop", "Garage", "Stainless Appliances", "Open Floorplan"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$745,000",
    title: "Victorian Manor",
    location: "Savannah, GA",
    beds: 4,
    baths: 3.5,
    sqft: 2800,
    description:
      "Restored Victorian with original woodwork, wraparound porch, and chef's kitchen.",
    amenities: [
      "Wraparound Porch",
      "Chef's Kitchen",
      "Original Hardwood",
      "Butler's Pantry",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    ],
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", // replaced with a bright interior
    tag: "For Rent",
    tagVariant: "clay",
    price: "$1,850/mo",
    title: "Artist's Studio Flat",
    location: "Santa Fe, NM",
    beds: 0,
    baths: 1,
    sqft: 550,
    description:
      "Bright studio with kiva fireplace, vigas ceilings, and mountain views. Walk to galleries.",
    amenities: [
      "Kiva Fireplace",
      "Covered Patio",
      "Laundry on Site",
      "Adobe Construction",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18f6b0052?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b50619c6d?w=800&q=80",
    ],
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$1,100,000",
    title: "Hilltop Contemporary",
    location: "Los Angeles, CA",
    beds: 4,
    baths: 3,
    sqft: 2600,
    description:
      "Mid-century modern with walls of glass, infinity pool, and panoramic city views.",
    amenities: [
      "Infinity Pool",
      "Smart Home",
      "Open Floor Plan",
      "City Lights View",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", // garden house with greenery
    tag: "For Rent",
    tagVariant: "clay",
    price: "$2,900/mo",
    title: "Garden Apartment",
    location: "Charleston, SC",
    beds: 2,
    baths: 1,
    sqft: 1000,
    description:
      "Ground‑floor unit with private garden patio, exposed brick, and original pine floors.",
    amenities: [
      "Private Garden",
      "Exposed Brick",
      "Storage Unit",
      "Walk to King St.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600047509358-9dc7f2cfc7eb?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", // modern prairie-style exterior
    tag: "For Sale",
    tagVariant: "olive",
    price: "$555,000",
    title: "Prairie School Gem",
    location: "Oak Park, IL",
    beds: 3,
    baths: 2,
    sqft: 1950,
    description:
      "Frank Lloyd Wright‑inspired home with art glass windows and a stunning hearth.",
    amenities: [
      "Art Glass Windows",
      "Butler's Pantry",
      "Original Built‑ins",
      "Detached Garage",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605146769289-449113f80f72?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    tag: "For Rent",
    tagVariant: "clay",
    price: "$3,500/mo",
    title: "Harborview Loft",
    location: "Baltimore, MD",
    beds: 2,
    baths: 2,
    sqft: 1200,
    description:
      "Converted warehouse with 14‑ft ceilings, exposed ductwork, and harbor views.",
    amenities: [
      "Exposed Ductwork",
      "Concrete Floors",
      "Roof Deck",
      "Bike Storage",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", // colonial brick exterior
    tag: "For Sale",
    tagVariant: "olive",
    price: "$995,000",
    title: "Colonial Revival Estate",
    location: "Greenwich, CT",
    beds: 5,
    baths: 4.5,
    sqft: 4000,
    description:
      "Elegant brick colonial with formal gardens, library, and a gourmet eat‑in kitchen.",
    amenities: ["Formal Gardens", "Library", "Wine Cellar", "Three Fireplaces"],
    gallery: [
      "https://images.unsplash.com/photo-1600573472562-0f6e0a2e4d60?w=800&q=80",
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", // modern studio with city views
    tag: "For Rent",
    tagVariant: "clay",
    price: "$2,150/mo",
    title: "Midtown Studio",
    location: "Atlanta, GA",
    beds: 0,
    baths: 1,
    sqft: 600,
    description:
      "Sleek studio in a high‑rise with skyline views, modern finishes, and a 24‑hour gym.",
    amenities: ["Gym", "Doorman", "Rooftop Lounge", "Walk to MARTA"],
    gallery: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32786?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b50619c6d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$425,000",
    title: "Desert Oasis",
    location: "Tucson, AZ",
    beds: 3,
    baths: 2,
    sqft: 1700,
    description:
      "Territorial‑style home with a cactus garden, saltillo tile, and mountain backdrop.",
    amenities: [
      "Cactus Garden",
      "Saltillo Tile",
      "Covered Patio",
      "RV Parking",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    ],
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    tag: "For Rent",
    tagVariant: "clay",
    price: "$5,000/mo",
    title: "Craftsman Bungalow",
    location: "Pasadena, CA",
    beds: 3,
    baths: 2,
    sqft: 1800,
    description:
      "Fully furnished craftsman with wood‑beamed ceilings, chef's kitchen, and a spa‑like bath.",
    amenities: ["Furnished", "Spa Bath", "Chef's Kitchen", "Outdoor Fireplace"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b50619c6d?w=800&q=80",
    ],
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$275,000",
    title: "Cabin in the Woods",
    location: "Asheville, NC",
    beds: 2,
    baths: 1,
    sqft: 900,
    description:
      "Secluded log cabin with a wood‑burning stove, deck, and year‑round stream.",
    amenities: ["Wood Stove", "Stream", "Wrap‑Around Deck", "Hiking Trails"],
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
  },
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
    tag: "For Rent",
    tagVariant: "clay",
    price: "$2,800/mo",
    title: "East Village Walk‑Up",
    location: "New York, NY",
    beds: 1,
    baths: 1,
    sqft: 650,
    description:
      "Charming pre‑war walk‑up with exposed brick, high ceilings, and a rooftop terrace.",
    amenities: [
      "Exposed Brick",
      "Rooftop Terrace",
      "Laundry in Building",
      "Pet Friendly",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", // modern ranch with pool
    tag: "For Sale",
    tagVariant: "olive",
    price: "$610,000",
    title: "Mid‑Century Ranch",
    location: "Palm Springs, CA",
    beds: 3,
    baths: 2,
    sqft: 1700,
    description:
      "Classic mid‑century with a butterfly roof, pool, and desert landscaping.",
    amenities: ["Pool", "Butterfly Roof", "Mountain Views", "Carport"],
    gallery: [
      "https://images.unsplash.com/photo-1605146769289-449113f80f72?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: 21,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", // colorful casita exterior
    tag: "For Rent",
    tagVariant: "clay",
    price: "$1,950/mo",
    title: "Casita Bonita",
    location: "San Antonio, TX",
    beds: 2,
    baths: 1,
    sqft: 850,
    description:
      "Colorful casita with saltillo tile, a courtyard, and a shared pool.",
    amenities: ["Courtyard", "Shared Pool", "Tile Floors", "Walk to Riverwalk"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18f6b0052?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    ],
  },
  {
    id: 22,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$1,250,000",
    title: "Brownstone Beauty",
    location: "Boston, MA",
    beds: 4,
    baths: 3.5,
    sqft: 2900,
    description:
      "Renovated bow‑front brownstone with roof deck, chef's kitchen, and period details.",
    amenities: [
      "Roof Deck",
      "Marble Mantels",
      "Chef's Kitchen",
      "Garden Level",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
    ],
  },
  {
    id: 23,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", // mountain ski lodge
    tag: "For Rent",
    tagVariant: "clay",
    price: "$3,800/mo",
    title: "Ski‑In/Out Condo",
    location: "Park City, UT",
    beds: 2,
    baths: 2,
    sqft: 1100,
    description:
      "Slopeside condo with a hot tub, stone fireplace, and ski locker.",
    amenities: ["Ski‑In/Out", "Hot Tub", "Fireplace", "Underground Parking"],
    gallery: [
      "https://images.unsplash.com/photo-1600047509358-9dc7f2cfc7eb?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    ],
  },
  {
    id: 24,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$365,000",
    title: "Farmhouse Fixer",
    location: "Hudson Valley, NY",
    beds: 3,
    baths: 1.5,
    sqft: 1500,
    description:
      "c.1850 farmhouse on 5 acres with a barn, pond, and endless potential.",
    amenities: ["Barn", "Pond", "5 Acres", "Original Wide‑Plank Floors"],
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
  },
  {
    id: 25,
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    tag: "For Rent",
    tagVariant: "clay",
    price: "$2,200/mo",
    title: "River District Flat",
    location: "Richmond, VA",
    beds: 1,
    baths: 1,
    sqft: 750,
    description:
      "Converted tobacco warehouse with industrial windows, brick walls, and river views.",
    amenities: [
      "Industrial Windows",
      "Exposed Brick",
      "Community Courtyard",
      "Bike Storage",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b50619c6d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
  },
  {
    id: 26,
    image:
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$780,000",
    title: "Spanish Revival",
    location: "Santa Barbara, CA",
    beds: 3,
    baths: 2,
    sqft: 2000,
    description:
      "White stucco with red tile roof, courtyard fountain, and ocean breezes.",
    amenities: [
      "Courtyard Fountain",
      "Red Tile Roof",
      "Arched Doorways",
      "Ocean Breeze",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    ],
  },
  {
    id: 27,
    image:
      "https://images.unsplash.com/photo-1702014862053-946a122b920d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "For Rent",
    tagVariant: "clay",
    price: "$1,750/mo",
    title: "Pioneer Square Studio",
    location: "Portland, OR",
    beds: 0,
    baths: 1,
    sqft: 500,
    description:
      "Micro‑studio in a historic building with high ceilings, a murphy bed, and bike room.",
    amenities: ["Murphy Bed", "High Ceilings", "Bike Room", "Walk Score 98"],
    gallery: [
      "https://images.unsplash.com/photo-1702014862053-946a122b920d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1665153515938-97aac6893f2c?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    ],
  },
  {
    id: 28,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$1,050,000",
    title: "Golf Course Villa",
    location: "Scottsdale, AZ",
    beds: 4,
    baths: 3,
    sqft: 2800,
    description:
      "Mediterranean villa on the 14th fairway with a casita, pool, and mountain views.",
    amenities: ["Pool", "Casita", "Golf Course Frontage", "Outdoor Kitchen"],
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    ],
  },
  {
    id: 29,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    tag: "For Rent",
    tagVariant: "clay",
    price: "$2,600/mo",
    title: "Georgetown Rowhouse",
    location: "Washington, DC",
    beds: 2,
    baths: 1.5,
    sqft: 1100,
    description:
      "Federal‑style rowhouse with a private patio, exposed brick, and walk to metro.",
    amenities: [
      "Private Patio",
      "Exposed Brick",
      "Hardwood Floors",
      "Metro Access",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    id: 30,
    image:
      "https://images.unsplash.com/photo-1640885378359-a1e11694554f?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "For Sale",
    tagVariant: "olive",
    price: "$445,000",
    title: "Cottage by the Sea",
    location: "Bar Harbor, ME",
    beds: 2,
    baths: 1,
    sqft: 950,
    description:
      "Classic Maine cottage with a screened porch, ocean views, and a path to the shore.",
    amenities: ["Screened Porch", "Ocean View", "Wood Stove", "Shore Access"],
    gallery: [
      "https://images.unsplash.com/photo-1640885378359-a1e11694554f?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1771531988839-6efe84a4470a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    ],
  },
];
