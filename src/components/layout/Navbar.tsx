
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Menu', to: '/menu' },
    { text: 'Contact', to: '/contact' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-serif font-bold tracking-tight hover:text-primary transition-colors"
        >
          Shory
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.to}
              className="relative font-medium text-foreground hover:text-primary transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <Link 
          to="/contact" 
          className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Book a Table
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center md:hidden transition-all duration-300',
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto top-0' 
            : 'opacity-0 pointer-events-none top-[-100%]'
        )}
      >
        <div className="flex flex-col items-center space-y-6 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.to}
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Table
          </Link>
        </div>
      </div>
    </nav>
  );
}
