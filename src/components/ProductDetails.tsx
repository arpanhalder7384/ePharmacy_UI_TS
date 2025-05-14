import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ChevronLeft, ShoppingCart} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import { Skeleton } from "./ui/skeleton";
import { Badge } from "./ui/badge";
import { useCart } from "./CartContext";
import ProductGrid from "./ProductGrid";


interface Category {
    id: number,
    name: string,
    description: string,
    createdAt: string
}

interface Product {
    id: number,
    image: string,
    name: string,
    category: Category,
    prescriptionRequired: string,
    price: string,
    createdAt: string,
    description: string,
    categoryId: number,
    usage: string,
    dosage: string
    sideEffects: string,
    featured: boolean,
    inStock: boolean
}

const products: Product[] = [
    {
        "id": 8,
        "name": "Advanced Wound Care Kit",
        "description": "Comprehensive first aid kit with advanced wound care supplies. Includes antiseptic wipes, bandages, gauze, medical tape, and antibiotic ointment.",
        "image": "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=300&h=192",
        "price": "22.95",
        "categoryId": 5,
        "prescriptionRequired": "OTC",
        "usage": "For treating minor cuts, scrapes, burns, and wounds. Always clean wound thoroughly before applying dressings.",
        "dosage": "Not applicable. Follow first aid instructions included in kit.",
        "sideEffects": "None when used as directed. Seek medical attention for serious injuries.",
        "featured": true,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 5,
            "name": "First Aid",
            "description": "Supplies and medications for treating minor injuries and wounds.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 2,
        "name": "Vitamin C 1000mg Tablets",
        "description": "High-strength vitamin C tablets to support immune system health and general wellbeing. Each tablet provides 1000mg of vitamin C with added citrus bioflavonoids.",
        "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=300&h=192",
        "price": "9.49",
        "categoryId": 4,
        "prescriptionRequired": "OTC",
        "usage": "Take one tablet daily with food to support immune system function and overall health.",
        "dosage": "Adults: One tablet daily with a meal. Children under 12: consult a doctor first.",
        "sideEffects": "May cause mild digestive discomfort in sensitive individuals.",
        "featured": true,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 4,
            "name": "Vitamins & Supplements",
            "description": "Nutritional supplements to support overall health and wellness.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 3,
        "name": "Anti-Allergy Prescription",
        "description": "Prescription-strength allergy relief medication that provides 24-hour relief from severe allergy symptoms including itching, sneezing, and congestion.",
        "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&h=192",
        "price": "24.99",
        "categoryId": 3,
        "prescriptionRequired": "RX",
        "usage": "Take one tablet daily for continuous relief from allergy symptoms.",
        "dosage": "Adults and children 12 years and over: one tablet daily. Not recommended for children under 12.",
        "sideEffects": "May cause drowsiness, dry mouth, and headache. Avoid driving or operating machinery until you know how this medication affects you.",
        "featured": true,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 3,
            "name": "Allergies",
            "description": "Medications to treat allergic reactions and relieve allergy symptoms.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 4,
        "name": "Night-Time Cold & Flu Relief",
        "description": "Comprehensive cold and flu relief formula designed specifically for nighttime use. Helps relieve congestion, cough, and fever while promoting restful sleep.",
        "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=300&h=192",
        "price": "14.79",
        "categoryId": 2,
        "prescriptionRequired": "OTC",
        "usage": "Take at bedtime to relieve cold and flu symptoms overnight.",
        "dosage": "Adults and children 12 years and over: 30ml before bedtime. Children under 12: consult a doctor.",
        "sideEffects": "May cause drowsiness. Do not drive, operate machinery, or consume alcohol after taking this medication.",
        "featured": true,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 2,
            "name": "Cold & Flu",
            "description": "Treatments for cold and flu symptoms including cough, congestion, and fever.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 1,
        "name": "Advanced Pain Relief Tablets",
        "description": "Fast-acting pain relief tablets for headaches, muscle pain, and minor arthritis. These tablets provide up to 8 hours of relief with a single dose.",
        "image": "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=300&h=192",
        "price": "12.99",
        "categoryId": 1,
        "prescriptionRequired": "OTC",
        "usage": "Take 1-2 tablets every 8 hours as needed for pain. Do not exceed 6 tablets in 24 hours.",
        "dosage": "Adults and children 12 years and over: 1-2 tablets every 8 hours. Children under 12: consult a doctor.",
        "sideEffects": "May cause drowsiness, upset stomach, or dizziness. Avoid alcohol while taking this medication.",
        "featured": true,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 1,
            "name": "Pain Relief",
            "description": "Medications for various types of pain including headaches, muscle pain, and joint pain.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 10,
        "name": "Prescription Allergy Nasal Spray",
        "description": "Prescription-strength nasal spray for severe allergic rhinitis. Provides 24-hour relief from nasal congestion, sneezing, and runny nose.",
        "image": "https://images.unsplash.com/photo-1549321495-305eb13f8aa9?auto=format&fit=crop&w=300&h=192",
        "price": "29.99",
        "categoryId": 3,
        "prescriptionRequired": "RX",
        "usage": "Use daily during allergy season or year-round for perennial allergies.",
        "dosage": "Adults and children 12 years and over: 2 sprays in each nostril once daily.",
        "sideEffects": "May cause nasal irritation, headache, or nosebleeds. Contact doctor if symptoms worsen.",
        "featured": false,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 3,
            "name": "Allergies",
            "description": "Medications to treat allergic reactions and relieve allergy symptoms.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 11,
        "name": "Multivitamin Complete",
        "description": "Comprehensive multivitamin and mineral supplement with 23 essential nutrients. Supports overall health, immunity, and energy levels.",
        "image": "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=300&h=192",
        "price": "15.99",
        "categoryId": 4,
        "prescriptionRequired": "OTC",
        "usage": "Take daily as a dietary supplement to fill nutritional gaps.",
        "dosage": "Adults: One tablet daily with food. Not intended for children under 12.",
        "sideEffects": "Best absorbed with food. May cause mild stomach upset if taken on empty stomach.",
        "featured": false,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 4,
            "name": "Vitamins & Supplements",
            "description": "Nutritional supplements to support overall health and wellness.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 12,
        "name": "Heartburn Relief Tablets",
        "description": "Fast-acting tablets that neutralize stomach acid to provide quick relief from heartburn, acid indigestion, and upset stomach.",
        "image": "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=300&h=192",
        "price": "11.49",
        "categoryId": 6,
        "prescriptionRequired": "OTC",
        "usage": "Take as needed for relief of heartburn, acid indigestion, or sour stomach.",
        "dosage": "Adults: Chew 2-4 tablets as symptoms occur. Do not exceed 10 tablets in 24 hours.",
        "sideEffects": "May cause constipation or diarrhea in some individuals.",
        "featured": false,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 6,
            "name": "Digestive Health",
            "description": "Products for digestive problems, heartburn, and stomach discomfort.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 5,
        "name": "Daytime Cold & Flu Capsules",
        "description": "Non-drowsy formula that provides effective relief from cold and flu symptoms during the day. Relieves congestion, sore throat, and reduces fever.",
        "image": "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?auto=format&fit=crop&w=300&h=192",
        "price": "13.49",
        "categoryId": 2,
        "prescriptionRequired": "OTC",
        "usage": "Take during the day to relieve cold and flu symptoms without causing drowsiness.",
        "dosage": "Adults and children 16 years and over: 2 capsules every 4-6 hours. Do not exceed 8 capsules in 24 hours.",
        "sideEffects": "Rarely causes mild stimulant effects including increased heart rate.",
        "featured": false,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 2,
            "name": "Cold & Flu",
            "description": "Treatments for cold and flu symptoms including cough, congestion, and fever.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 6,
        "name": "Extra Strength Migraine Relief",
        "description": "Fast-acting formula specifically designed for migraine headaches. Provides relief from pain, sensitivity to light, and nausea associated with migraines.",
        "image": "https://images.unsplash.com/photo-1626716903254-109b8ad52e2c?auto=format&fit=crop&w=300&h=192",
        "price": "18.99",
        "categoryId": 1,
        "prescriptionRequired": "OTC",
        "usage": "Take at the first sign of migraine for best results.",
        "dosage": "Adults 18 years and over: 2 tablets with water. May repeat after 4 hours if needed. Do not exceed 6 tablets in 24 hours.",
        "sideEffects": "May cause dizziness or drowsiness. Take care when driving or operating machinery.",
        "featured": false,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 1,
            "name": "Pain Relief",
            "description": "Medications for various types of pain including headaches, muscle pain, and joint pain.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 7,
        "name": "Children's Fever Reducer",
        "description": "Gentle fever and pain reducer specially formulated for children. Cherry flavored liquid that's easy to administer.",
        "image": "https://images.unsplash.com/photo-1550572017-a0491cd5a72f?auto=format&fit=crop&w=300&h=192",
        "price": "8.99",
        "categoryId": 1,
        "prescriptionRequired": "OTC",
        "usage": "For reduction of fever and relief of minor aches and pains.",
        "dosage": "Children 2-11 years: Dose by weight according to package directions. Use included measuring device.",
        "sideEffects": "Generally well tolerated. Contact doctor if symptoms persist beyond 3 days.",
        "featured": false,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 1,
            "name": "Pain Relief",
            "description": "Medications for various types of pain including headaches, muscle pain, and joint pain.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    },
    {
        "id": 9,
        "name": "Digestive Health Probiotic",
        "description": "Daily probiotic supplement with 10 billion active cultures to support gut health and improve digestion. Helps maintain healthy intestinal flora.",
        "image": "https://images.unsplash.com/photo-1577460551100-907fc6985074?auto=format&fit=crop&w=300&h=192",
        "price": "19.95",
        "categoryId": 6,
        "prescriptionRequired": "OTC",
        "usage": "Take daily to support digestive health and immune function.",
        "dosage": "Adults: One capsule daily with a meal. Children under 12: consult a doctor.",
        "sideEffects": "Mild digestive discomfort may occur during first few days of use.",
        "featured": false,
        "inStock": true,
        "createdAt": "2025-05-03T15:11:06.667Z",
        "category": {
            "id": 6,
            "name": "Digestive Health",
            "description": "Products for digestive problems, heartburn, and stomach discomfort.",
            "createdAt": "2025-05-03T15:11:06.588Z"
        }
    }
]

const ProductDetail = () => {
    const id = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    const product = products.find(p => p.id === id)
    let relatedProducts
    if (product) {
        relatedProducts = products.filter(p => p.categoryId = product.categoryId)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    //   if (isLoading) {
    //     return (
    //       <div className="container mx-auto px-4 py-8">
    //         <div className="flex flex-col md:flex-row gap-8">
    //           <div className="md:w-1/2">
    //             <Skeleton className="h-[400px] w-full rounded-lg" />
    //           </div>
    //           <div className="md:w-1/2">
    //             <Skeleton className="h-10 w-3/4 mb-4" />
    //             <Skeleton className="h-6 w-1/4 mb-6" />
    //             <Skeleton className="h-6 w-1/2 mb-4" />
    //             <Skeleton className="h-24 w-full mb-6" />
    //             <Skeleton className="h-10 w-full mb-4" />
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   }

    //   if (isError || !product) {
    //     return (
    //       <div className="container mx-auto px-4 py-16 text-center">
    //         <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
    //         <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
    //         <p className="mb-8 text-gray-600">
    //           The product you're looking for doesn't exist or has been removed.
    //         </p>
    //         <Button onClick={() => navigate("/")} variant="default">
    //           <ChevronLeft className="mr-2 h-5 w-5" /> Back to Products
    //         </Button>
    //       </div>
    //     );
    //   }

   
    if(!product){
        return<>No</>
    }
    const handleAddToCart = () => {
        addItem(product, quantity);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Button variant="ghost" className="mb-6" onClick={() => navigate("/")}>
                <ChevronLeft className="mr-2 h-5 w-5" /> Back to Products
            </Button>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="md:w-1/2">
                    <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-sm font-medium">
                            {product.category?.name || ""}
                        </Badge>
                        <Badge
                            className={
                                product.prescriptionRequired === "RX"
                                    ? "bg-destructive"
                                    : "bg-secondary"
                            }
                        >
                            {product.prescriptionRequired === "RX"
                                ? "Prescription Required"
                                : "Over The Counter"}
                        </Badge>
                    </div>

                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5 w-5" fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(128 reviews)</span>
                    </div>

                    <div className="text-2xl font-bold text-primary mb-6">
                        $
                        {typeof product.price === "string"
                            ? parseFloat(product.price).toFixed(2)
                            : Number(product.price).toFixed(2)}
                    </div>

                    <p className="text-gray-700 mb-6">{product.description}</p>

                    <div className="flex items-center space-x-4 mb-8">
                        <div className="flex items-center border rounded-md">
                            <button
                                className="px-3 py-1 text-gray-600 hover:text-primary"
                                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                            >
                                -
                            </button>
                            <span className="px-3 py-1 border-x">{quantity}</span>
                            <button
                                className="px-3 py-1 text-gray-600 hover:text-primary"
                                onClick={() => setQuantity((prev) => prev + 1)}
                            >
                                +
                            </button>
                        </div>

                        <Button className="flex-1" onClick={handleAddToCart}>
                            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                        </Button>
                    </div>

                    <Tabs defaultValue="details">
                        <TabsList className="w-full">
                            <TabsTrigger value="details" className="flex-1">
                                Details
                            </TabsTrigger>
                            <TabsTrigger value="usage" className="flex-1">
                                Usage & Dosage
                            </TabsTrigger>
                            <TabsTrigger value="sideEffects" className="flex-1">
                                Side Effects
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="details" className="p-4 border rounded-md mt-2">
                            <p>{product.description}</p>
                        </TabsContent>
                        <TabsContent value="usage" className="p-4 border rounded-md mt-2">
                            <div>
                                <h3 className="font-bold mb-2">Recommended Usage:</h3>
                                <p>{product.usage || "Information not available"}</p>

                                <h3 className="font-bold mt-4 mb-2">Dosage:</h3>
                                <p>{product.dosage || "Information not available"}</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="sideEffects" className="p-4 border rounded-md mt-2">
                            <p>{product.sideEffects || "Information not available"}</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {relatedProducts && relatedProducts.length > 0 && (
                <Card className="mt-12">
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                        <ProductGrid
                            products={relatedProducts
                                .filter((p: Product) => p.id !== product.id)
                                .slice(0, 4)}
                        />
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default ProductDetail;
