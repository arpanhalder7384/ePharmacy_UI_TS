import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useCart } from "@/contexts/CartContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

import {
  ShoppingCart,
  User,
  Menu,
  Search,
  PillBottle,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { itemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <PillBottle className="text-primary h-7 w-7 mr-2" />
              <span className="text-primary text-xl font-serif font-bold">E-Pharmacy</span>
            </Link>
          </div>

          {/* Search - Desktop */}
          {/* <div className="hidden md:flex flex-1 mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="Search medications, health products..."
                className="w-full py-2 px-4 border border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                variant="ghost"
                className="absolute right-0 top-0 bottom-0 px-3 text-primary"
              >
                <Search />
              </Button>
            </form>
          </div> */}

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/categories"
              className={`text-gray-600 hover:text-primary transition duration-150 ${location.pathname === "/" ? "text-primary font-medium" : ""}`}
            >
              Categories
            </Link>
            <Link
              to="/prescriptions"
              className={`text-gray-600 hover:text-primary transition duration-150 ${location.pathname === "/prescriptions" ? "text-primary font-medium" : ""}`}
            >
              Prescriptions
            </Link>
            <Link
              to="/health-info"
              className={`text-gray-600 hover:text-primary transition duration-150 ${location.pathname === "/health-info" ? "text-primary font-medium" : ""}`}
            >
              Health Info
            </Link>
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-primary transition duration-150 ${location.pathname === "/contact" ? "text-primary font-medium" : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* User Menu & Cart */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary transition duration-150">
              <ShoppingCart className="h-6 w-6 ml-10" />
              {/* {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )} */}
            </Link>
            <Button variant="ghost" size="icon" className="p-2 text-gray-600 hover:text-primary transition duration-150">
              <DropdownMenu>
                <DropdownMenuTrigger><User className="h-6 w-6" /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Account Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden p-2 text-gray-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="py-4">
                  <div className="flex items-center mb-6">
                    <PillBottle className="text-primary h-6 w-6 mr-2" />
                    <span className="text-primary text-xl font-serif font-bold">MediShop</span>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <Link to="/" className="text-base font-medium text-gray-600 hover:text-primary">
                      Categories
                    </Link>
                    <Link to="/prescriptions" className="text-base font-medium text-gray-600 hover:text-primary">
                      Prescriptions
                    </Link>
                    <Link to="/health-info" className="text-base font-medium text-gray-600 hover:text-primary">
                      Health Info
                    </Link>
                    <Link to="/contact" className="text-base font-medium text-gray-600 hover:text-primary">
                      Contact
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        <div className=" pb-4">
          <form onSubmit={handleSearch} className="relative w-full">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 border border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="ghost"
              className="absolute right-0 top-0 bottom-0 px-3 text-primary"
            >
              <Search />
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
