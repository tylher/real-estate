import ContactSection from "@/components/listings/ContactSection";
import ListingsHero from "@/components/listings/ListingHero";
import PropertiesSection from "@/components/listings/PropertiesSection";

const ListingsPage = () => {
  return (
    <main>
      <ListingsHero />
      <PropertiesSection />
      <ContactSection />
    </main>
  );
};

export default ListingsPage;
