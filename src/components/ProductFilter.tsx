
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
import { Star } from "lucide-react";


interface Category{
    id:number,
    name:string,
    description: string
}

interface ProductFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
  prescriptionFilter: string;
  onPrescriptionFilterChange: (filter: string) => void;
  ratingFilter: number[];
  onRatingFilterChange: (ratings: number[]) => void;
}

const ProductFilter = ({
  categories,
  selectedCategories,
  onCategoriesChange,
  priceRange,
  onPriceRangeChange,
  prescriptionFilter,
  onPrescriptionFilterChange,
  ratingFilter,
  onRatingFilterChange
}: ProductFilterProps) => {
  
  const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
    if (isChecked) {
      onCategoriesChange([...selectedCategories, categoryId]);
    } else {
      onCategoriesChange(selectedCategories.filter(id => id !== categoryId));
    }
  };

  const handleRatingChange = (rating: number, isChecked: boolean) => {
    if (isChecked) {
      onRatingFilterChange([...ratingFilter, rating]);
    } else {
      onRatingFilterChange(ratingFilter.filter(r => r !== rating));
    }
  };

  const handlePriceChange = (values: number[]) => {
    onPriceRangeChange(values);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      
      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Checkbox 
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id.toString())}
                onCheckedChange={(checked) => handleCategoryChange(category.id.toString(), checked === true)}
                className="text-primary"
              />
              <Label htmlFor={`category-${category.id}`} className="ml-2 text-gray-600">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Range</h4>
        <div className="px-2">
          <Slider 
            value={priceRange} 
            min={0} 
            max={100} 
            step={5}
            onValueChange={handlePriceChange}
            className="mt-4" 
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      {/* Prescription Required */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Prescription</h4>
        <RadioGroup 
          value={prescriptionFilter} 
          onValueChange={onPrescriptionFilterChange}
          className="space-y-2"
        >
          <div className="flex items-center">
            <RadioGroupItem value="all" id="prescription-all" className="text-primary" />
            <Label htmlFor="prescription-all" className="ml-2 text-gray-600">
              All Products
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="OTC" id="prescription-otc" className="text-primary" />
            <Label htmlFor="prescription-otc" className="ml-2 text-gray-600">
              No Prescription Needed
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="RX" id="prescription-rx" className="text-primary" />
            <Label htmlFor="prescription-rx" className="ml-2 text-gray-600">
              Prescription Required
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      {/* Rating */}
      <div>
        <h4 className="font-medium mb-2">Rating</h4>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <div key={rating} className="flex items-center">
              <Checkbox 
                id={`rating-${rating}`}
                checked={ratingFilter.includes(rating)}
                onCheckedChange={(checked) => handleRatingChange(rating, checked === true)}
                className="text-primary"
              />
              <Label htmlFor={`rating-${rating}`} className="ml-2 flex items-center text-gray-600">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-4 w-4 text-yellow-400" 
                    fill={star <= rating ? "currentColor" : "none"}
                  />
                ))}
                <span className="ml-1">& up</span>
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
