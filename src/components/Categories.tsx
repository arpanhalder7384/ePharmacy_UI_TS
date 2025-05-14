import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import {
    ChevronRight,
    RefreshCw,
    ShoppingBag,
    AlertTriangle,
} from "lucide-react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs";

interface Category {
    id: number,
    name: string,
    description: string,
    createdAt: Date
}

interface Product {
    id: number,
    image: string,
    name: string,
    // category:Category,
    prescriptionRequired: string,
    price: string,
    createdAt: Date,
    description: string,
    categoryId: number,
    usage: string,
    dosage: string
    sideEffects: string,
    featured: boolean,
    inStock: boolean
}

const MOCK_CATEGORIES: Category[] = [
    {
        id: 1,
        name: "Pain Relief",
        description: "Medications for various types of pain including headaches, muscle pain, and joint pain.",
        createdAt: new Date()
    },
    {
        id: 2,
        name: "Cold & Flu",
        description: "Treatments for cold and flu symptoms including cough, congestion, and fever.",
        createdAt: new Date()
    },
    {
        id: 3,
        name: "Allergies",
        description: "Medications to treat allergic reactions and relieve allergy symptoms.",
        createdAt: new Date()
    },
    {
        id: 4,
        name: "Vitamins & Supplements",
        description: "Nutritional supplements to support overall health and wellness.",
        createdAt: new Date()
    },
    {
        id: 5,
        name: "First Aid",
        description: "Supplies and medications for treating minor injuries and wounds.",
        createdAt: new Date()
    },
    {
        id: 6,
        name: "Digestive Health",
        description: "Products for digestive problems, heartburn, and stomach discomfort.",
        createdAt: new Date()
    }
];

const MOCK_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Advanced Pain Relief Tablets",
        description: "Fast-acting pain relief tablets for headaches, muscle pain, and minor arthritis. These tablets provide up to 8 hours of relief with a single dose.",
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=300&h=192",
        price: "12.99",
        categoryId: 1,
        prescriptionRequired: "OTC",
        usage: "Take 1-2 tablets every 8 hours as needed for pain. Do not exceed 6 tablets in 24 hours.",
        dosage: "Adults and children 12 years and over: 1-2 tablets every 8 hours. Children under 12: consult a doctor.",
        sideEffects: "May cause drowsiness, upset stomach, or dizziness. Avoid alcohol while taking this medication.",
        featured: true,
        inStock: true,
        createdAt: new Date()
    },
    {
        id: 2,
        name: "Vitamin C 1000mg Tablets",
        description: "High-strength vitamin C tablets to support immune system health and general wellbeing. Each tablet provides 1000mg of vitamin C with added citrus bioflavonoids.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=300&h=192",
        price: "9.49",
        categoryId: 4,
        prescriptionRequired: "OTC",
        usage: "Take one tablet daily with food to support immune system function and overall health.",
        dosage: "Adults: One tablet daily with a meal. Children under 12: consult a doctor first.",
        sideEffects: "May cause mild digestive discomfort in sensitive individuals.",
        featured: true,
        inStock: true,
        createdAt: new Date()
    },
    {
        id: 3,
        name: "Anti-Allergy Prescription",
        description: "Prescription-strength allergy relief medication that provides 24-hour relief from severe allergy symptoms including itching, sneezing, and congestion.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&h=192",
        price: "24.99",
        categoryId: 3,
        prescriptionRequired: "RX",
        usage: "Take one tablet daily for continuous relief from allergy symptoms.",
        dosage: "Adults and children 12 years and over: one tablet daily. Not recommended for children under 12.",
        sideEffects: "May cause drowsiness, dry mouth, and headache. Avoid driving or operating machinery until you know how this medication affects you.",
        featured: true,
        inStock: true,
        createdAt: new Date()
    },
    {
        id: 4,
        name: "Night-Time Cold & Flu Relief",
        description: "Comprehensive cold and flu relief formula designed specifically for nighttime use. Helps relieve congestion, cough, and fever while promoting restful sleep.",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=300&h=192",
        price: "14.79",
        categoryId: 2,
        prescriptionRequired: "OTC",
        usage: "Take at bedtime to relieve cold and flu symptoms overnight.",
        dosage: "Adults and children 12 years and over: 30ml before bedtime. Children under 12: consult a doctor.",
        sideEffects: "May cause drowsiness. Do not drive, operate machinery, or consume alcohol after taking this medication.",
        featured: true,
        inStock: true,
        createdAt: new Date()
    },
    {
        id: 5,
        name: "Prescription Allergy Nasal Spray",
        description: "Prescription-strength nasal spray for severe allergic rhinitis. Provides 24-hour relief from nasal congestion, sneezing, and runny nose.",
        image: "https://images.unsplash.com/photo-1549321495-305eb13f8aa9?auto=format&fit=crop&w=300&h=192",
        price: "29.99",
        categoryId: 3,
        prescriptionRequired: "RX",
        usage: "Use daily during allergy season or year-round for perennial allergies.",
        dosage: "Adults and children 12 years and over: 2 sprays in each nostril once daily.",
        sideEffects: "May cause nasal irritation, headache, or nosebleeds. Contact doctor if symptoms worsen.",
        featured: false,
        inStock: true,
        createdAt: new Date()
    }
];



const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const [allProducts, setAllProducts]= useState<Product[]>([]);
    const [categories, setCategories]= useState<Category[]>([]);

    useEffect(()=>{
        setAllProducts(MOCK_PRODUCTS);
        setCategories(MOCK_CATEGORIES);
    },[])

    const filteredProducts = selectedCategory && allProducts
        ? allProducts.filter(product => product.categoryId === selectedCategory.id)
        : [];

    useEffect(() => {
        if (categories && categories.length > 0 && !selectedCategory) {
            setSelectedCategory(categories[0]);
        }
    }, [categories, selectedCategory]);

    const hasErrors = false;
    const isLoading = false;

    const handleRetry = () => {
        // refetchCategories();
        // refetchProducts();
    };

    const formatPrice = (price: string): string => {
        try {
            if (typeof price === "string") {
                return parseFloat(price).toFixed(2);
            }
            //  else if (typeof price === "number") {
            //     return price.toFixed(2);
            // }
            return "0.00";
        } catch (e) {
            console.log(e)
            return "0.00";
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
                    Browse by Category
                </h1>
                <p className="text-lg text-gray-600">
                    Explore our wide range of medications and health products by category
                </p>
            </div>

            {hasErrors && (
                <div className="mb-8 p-4 border border-destructive/20 bg-destructive/10 rounded-md">
                    <div className="flex items-center mb-3">
                        <AlertTriangle className="text-destructive h-5 w-5 mr-2" />
                        <h3 className="text-lg font-medium text-destructive">Error Loading Data</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        We're having trouble connecting to our database. Please try again in a moment.
                    </p>
                    <Button onClick={handleRetry} variant="outline" className="flex items-center">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Retry
                    </Button>
                </div>
            )}

            {!hasErrors && (
                <Tabs defaultValue="grid" className="w-full">
                    <div className="flex justify-between items-center mb-6">
                        <TabsList>
                            <TabsTrigger value="grid">Grid View</TabsTrigger>
                            <TabsTrigger value="list">List View</TabsTrigger>
                        </TabsList>

                        { categories && (
                            <div className="md:hidden">
                                <select
                                    className="border border-gray-200 rounded-md p-2 bg-white"
                                    value={selectedCategory?.id || ""}
                                    onChange={(e) => {
                                        const id = parseInt(e.target.value);
                                        const category = categories.find((c) => c.id === id);
                                        if (category) setSelectedCategory(category);
                                    }}
                                >
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Grid View */}
                    <TabsContent value="grid">
                        <div className="grid md:grid-cols-[250px_1fr] gap-8">
                            {/* Categories sidebar */}
                            <div className="hidden md:block space-y-4">
                                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                                {/* {1===1? (
                                    Array(6).fill(0).map((_, i) => (
                                        <Skeleton key={i} className="h-10 w-full rounded-md mb-2" />
                                    ))
                                ) : ( */}
                                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y">
                                        {categories.map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`w-full text-left px-4 py-3 text-md font-medium flex items-center justify-between ${selectedCategory?.id === category.id
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-gray-600 hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span>{category.name}</span>
                                                {selectedCategory?.id === category.id && (
                                                    <ChevronRight className="h-4 w-4" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                {/* )} */}
                            </div>

                            {/* Products */}
                            <div>
                                {selectedCategory && (
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold mb-2">{selectedCategory.name}</h2>
                                        <p className="text-gray-600">{selectedCategory.description}</p>
                                    </div>
                                )}

                                {isLoading ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {Array(6).fill(0).map((_, i) => (
                                            <Card key={i} className="animate-pulse">
                                                <CardContent className="p-0">
                                                    <Skeleton className="h-48 w-full rounded-t-lg" />
                                                </CardContent>
                                                <CardHeader>
                                                    <Skeleton className="h-6 w-3/4 mb-2" />
                                                    <Skeleton className="h-4 w-1/2" />
                                                </CardHeader>
                                                <CardFooter>
                                                    <Skeleton className="h-10 w-full" />
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredProducts.length > 0 ? (
                                            filteredProducts.map((product) => (
                                                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                                                    <div className="relative h-48 overflow-hidden">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                                        />
                                                        {product.prescriptionRequired === "RX" && (
                                                            <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                                                                Prescription Required
                                                            </div>
                                                        )}
                                                    </div>
                                                    <CardHeader>
                                                        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                                                        <CardDescription className="line-clamp-2">
                                                            {product.description.substring(0, 100)}...
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-lg font-bold text-primary">
                                                                ${formatPrice(product.price)}
                                                            </span>
                                                            {product.inStock ? (
                                                                <span className="text-sm font-medium text-green-600">In Stock</span>
                                                            ) : (
                                                                <span className="text-sm font-medium text-destructive">Out of Stock</span>
                                                            )}
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter className="flex gap-2">
                                                        <Link to={`/products/${product.id}`} className="flex-1">
                                                            <Button variant="default" className="w-full">View Details</Button>
                                                        </Link>
                                                        <Button variant="outline" size="icon" className="flex-shrink-0">
                                                            <ShoppingBag className="h-4 w-4" />
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            ))
                                        ) : (
                                            <div className="col-span-full text-center py-12">
                                                <div className="max-w-md mx-auto">
                                                    <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                                                    <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
                                                    <p className="text-gray-500">
                                                        {selectedCategory
                                                            ? `There are no products available in the ${selectedCategory.name} category.`
                                                            : "Please select a category to view products."}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </TabsContent>

                    {/* You can copy and reuse the same list view from your original code if needed */}
                </Tabs>
            )}
        </div>
    );
};

export default Categories;
