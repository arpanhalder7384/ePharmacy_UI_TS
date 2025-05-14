
import {  useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import CartItem from "./CartItem";
import { ShoppingCart, ArrowRight, AlertCircle } from "lucide-react";
import { useCart } from "./CartContext";

const Cart = () => {
    const { items, subtotal, itemCount } = useCart();
  const navigate = useNavigate();

  const shippingCost = 5.99;
  const total = subtotal + shippingCost;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

        <Card className="p-8 text-center">
          <div className="flex flex-col items-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button onClick={() => navigate("/")} size="lg">
              Browse Products
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">
        Your Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <Card>
            <CardContent className="p-6">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {items.some((item) => item.product.prescriptionRequired === "RX") && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4 flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                  <div className="text-sm text-yellow-700">
                    Your cart contains prescription medication. You'll need to upload a valid prescription during checkout.
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col space-y-3">
              <Button className="w-full" size="lg" onClick={() => navigate("/checkout")}>
                Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
                Continue Shopping
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
