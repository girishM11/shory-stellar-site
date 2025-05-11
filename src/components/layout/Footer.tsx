
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium">Shory</h3>
            <p className="max-w-xs text-muted-foreground">
              Experience the perfect blend of extraordinary flavors and elegant ambiance at Shory.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-background transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>123 Gourmet Street, Foodville, FL 98765</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={20} className="shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={20} className="shrink-0" />
                <span>info@shoryrestaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Clock size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Mon - Fri</p>
                  <p>8:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Clock size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Sat - Sun</p>
                  <p>9:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shory Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
