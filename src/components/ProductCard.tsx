import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart, Star } from "lucide-react";

interface Category{
    id:number,
    name:string,
    description: string,
    createdAt:string
}

interface Product{
    id:number,
    image:string,
    name:string,
    category:Category,
    prescriptionRequired:string,
    price:string,
    createdAt:string,
    description:string,
    categoryId:number,
    usage:string,
    dosage:string
    sideEffects: string,
    featured:boolean,
    inStock:boolean
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
      <Link to={`/products/${product.id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <span className="text-sm font-medium text-gray-500">
              {product.category?.name || ""}
            </span>
            <Badge
              variant={product.prescriptionRequired === 'RX' ? "destructive" : "secondary"}
              className="text-xs"
            >
              {product.prescriptionRequired === 'RX' ? 'Rx' : 'OTC'}
            </Badge>
          </div>
          <h3 className="font-medium text-lg mb-1 line-clamp-2">{product.name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4"
                  fill={star <= 4 ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">(128)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">
              $
              {typeof product.price === 'string'
                ? parseFloat(product.price).toFixed(2)
                : Number(product.price).toFixed(2)}
            </span>
            <Button
              size="sm"
              className="bg-primary text-white hover:bg-primary-dark"
            //   onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
