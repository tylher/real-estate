// data/site.js
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";

export const site = {
  name: "Modern Homes",
  tagline: "Premium homes across Lagos, handled personally.",
  phone: "+234 805 787 2464",
  email: "info@barakhel.com",
  address: "97, Kujore Street, Off Ogudu Road, Ojota, Lagos.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
  ],
  social: [
    {
      label: "Instagram",
      href: "https://barakhel.com",
      icon: LuInstagram,
    },
    {
      label: "Facebook",
      href: "https://barakhel.com",
      icon: LuFacebook,
    },
    {
      label: "X",
      href: "https://barakhel.com",
      icon: FaXTwitter,
    },
  ],
};
