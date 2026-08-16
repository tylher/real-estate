// data/site.js
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

export const site = {
  name: "Modern Homes",
  tagline: "Premium homes across Lagos, handled personally.",
  phone: "+234 803 555 0142",
  email: "hello@modernhomes.ng",
  address: "12 Admiralty Way, Lekki Phase 1, Lagos",
  nav: [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
  ],
  social: [
    {
      label: "Instagram",
      href: "https://instagram.com/modernhomes",
      icon: LuInstagram,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/modernhomes",
      icon: LuFacebook,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/modernhomes",
      icon: LuTwitter,
    },
  ],
};
