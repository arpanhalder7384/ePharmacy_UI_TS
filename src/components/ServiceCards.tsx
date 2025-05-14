import { Pill, MessageSquareText, Truck } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-neutral rounded-lg shadow-md p-6 text-center transition duration-300 hover:shadow-lg">
      <div className="bg-primary-light inline-flex p-4 rounded-full text-white mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      icon: <Pill className="h-6 w-6" />,
      title: "Prescription Refills",
      description: "Easily upload your prescription and get medications delivered to your doorstep."
    },
    {
      icon: <MessageSquareText className="h-6 w-6" />,
      title: "Pharmacist Consultation",
      description: "Get professional advice from licensed pharmacists about your medications."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Same-day delivery available for urgent medications within the city."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
