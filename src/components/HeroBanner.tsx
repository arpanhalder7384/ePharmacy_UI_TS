// import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const HeroBanner = () => {
  return (
    <section className="bg-primary text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Your Trusted Online Pharmacy
            </h1>
            <p className="text-lg mb-6">
              Fast delivery, competitive prices, and professional consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-white text-primary hover:bg-neutral transition duration-150"
                size="lg"
              >
                <a href="#products">Shop Now</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition duration-150"
                size="lg"
              >
                <a href="#consultation">Get Consultation</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&h=400"
              alt="Pharmacy storefront"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
