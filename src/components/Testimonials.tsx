import { Star } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    type: string;
    rating: number;
    comment: string;
}

const TestimonialCard = ({ name, type, rating, comment }: TestimonialCardProps) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex text-yellow-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className="h-5 w-5"
                        fill={i < rating ? "currentColor" : "none"}
                    />
                ))}
            </div>
            <p className="italic text-gray-600 mb-4">"{comment}"</p>
            <div className="flex items-center">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">{name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                    <h4 className="font-medium">{name}</h4>
                    <p className="text-sm text-gray-500">{type}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {

    return (
        <section className="py-12 bg-neutral">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        // Fallback testimonials if API returns empty
                        [
                            {
                                name: "John Doe",
                                type: "Loyal Customer",
                                rating: 5,
                                comment: "The consultation service was incredibly helpful. The pharmacist answered all my questions about my medications and potential interactions. Highly recommend!"
                            },
                            {
                                name: "Jane Smith",
                                type: "Regular Customer",
                                rating: 5,
                                comment: "Fast delivery and great prices! I receive my monthly prescription medications right on time, every time. The app makes refills super easy."
                            },
                            {
                                name: "Robert Johnson",
                                type: "New Customer",
                                rating: 4,
                                comment: "The detailed medication information helped me understand my treatment better. I appreciate how they include potential side effects and proper usage instructions."
                            }
                        ].map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                type={testimonial.type}
                                rating={testimonial.rating}
                                comment={testimonial.comment}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
