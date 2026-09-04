import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Lato, Merriweather, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Headings — property titles, H1-H4
const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

// Body copy — paragraphs, descriptions
const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

// UI layer — buttons, pills, prices, nav, labels
const spaceGrotesk = Space_Grotesk({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Modern Homes",
  description:
    "A sample real estate website by Barakhel service",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${lato.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
