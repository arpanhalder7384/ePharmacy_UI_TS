import { Button } from "./ui/button";

const PharmacistConsultation = () => {
  return (
    <section id="consultation" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=400" 
                alt="Pharmacist providing consultation" 
                className="w-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Expert Pharmacist Consultation</h2>
            <p className="text-gray-600 mb-6">Have questions about your medications? Our licensed pharmacists are available to provide expert advice and guidance.</p>
            
            <div className="bg-neutral p-6 rounded-lg shadow-md mb-6">
              <h3 className="font-bold text-lg mb-3">How It Works</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mr-3">1</span>
                  <span>Schedule a consultation time that works for you</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mr-3">2</span>
                  <span>Connect with a pharmacist via video or phone call</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mr-3">3</span>
                  <span>Get professional advice on your medications and health concerns</span>
                </li>
              </ol>
            </div>
            
            <Button className="bg-primary text-white hover:bg-primary-dark" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacistConsultation;
