import { useEffect } from "react";
import HeroBanner from "./HeroBanner";
import ServiceCards from "./ServiceCards";
import FeaturedProducts from "./FeaturedProducts";
import PharmacistConsultation from "./PharmacistConsultation";
import Testimonials from "./Testimonials";
import CtaSection from "./CtaSection";

const Home = () => {
  // Scroll to products section if URL has hash
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main>
      <HeroBanner />
      <ServiceCards />
      <FeaturedProducts />
      <PharmacistConsultation />
      <Testimonials />
      <CtaSection />
    </main>
  );
};

export default Home;
