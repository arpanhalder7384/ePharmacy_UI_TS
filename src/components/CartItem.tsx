import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import { CartItem as CartItemType } from "./CartContext";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  const price = typeof product.price === "string" 
    ? parseFloat(product.price) 
    : Number(product.price);

  const incrementQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    removeItem(product.id);
  };

  return (
    <div className="py-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sm:w-1/4 md:w-1/5">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded"
            />
          </Link>
        </div>
        <div className="sm:w-3/4 md:w-4/5">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-2/3">
              <Link 
                to={`/products/${product.id}`} 
                className="font-medium text-lg hover:text-primary"
              >
                {product.name}
              </Link>
              <div className="flex items-center mt-1 mb-2">
                <span className="text-sm text-gray-600 mr-2">
                  {product.category?.name || ""}
                </span>
                {product.prescriptionRequired === "RX" && (
                  <Badge variant="destructive" className="text-xs">
                    Prescription Required
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:w-1/3 md:text-right">
              <div className="font-bold text-lg">
                ${(price * quantity).toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">
                ${price.toFixed(2)} each
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-primary hover:bg-transparent p-1"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <MinusCircle className="h-5 w-5" />
              </Button>
              <span className="mx-2 w-8 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-primary hover:bg-transparent p-1"
                onClick={incrementQuantity}
              >
                <PlusCircle className="h-5 w-5" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-destructive hover:bg-transparent p-1"
              onClick={handleRemove}
            >
              <Trash className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <Separator className="mt-4" />
    </div>
  );
};

export default CartItem;
