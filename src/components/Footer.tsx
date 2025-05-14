import { Link } from "react-router-dom"; // updated import
import {
  PillBottle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <PillBottle className="h-5 w-5 mr-2" />
              MediShop
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted online pharmacy for all your healthcare needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-150">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#products" className="text-gray-400 hover:text-white transition duration-150">
                  Products
                </a>
              </li>
              <li>
                <Link to="/prescriptions" className="text-gray-400 hover:text-white transition duration-150">
                  Prescriptions
                </Link>
              </li>
              <li>
                <Link to="/health-info" className="text-gray-400 hover:text-white transition duration-150">
                  Health Information
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition duration-150">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-gray-400 hover:text-white transition duration-150">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-gray-400 hover:text-white transition duration-150">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition duration-150">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-primary" />
                <span className="text-gray-400">
                  123 Healthcare Ave, Medical District, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-gray-400">support@medishop.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <span className="text-gray-400">Mon-Sat: 8AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MediShop. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/349/349221.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/349/349228.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/349/349230.png"
                alt="American Express"
                className="h-6"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/349/349230.png"
                alt="PayPal"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
