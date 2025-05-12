
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 dark:bg-card/95 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-medium">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Shory
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path}
              className={`text-sm transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary dark:text-primary font-medium' 
                  : 'text-foreground/80 dark:text-foreground/80 hover:text-primary dark:hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-md focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-0.5 w-6 bg-foreground dark:bg-foreground transform transition duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                }`} 
              />
              <span 
                className={`absolute h-0.5 bg-foreground dark:bg-foreground transform transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-6'
                }`} 
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              />
              <span 
                className={`absolute h-0.5 w-6 bg-foreground dark:bg-foreground transform transition duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-4'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-background/95 dark:bg-card/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path}
              className={`py-2 px-3 rounded-md transition-colors ${
                location.pathname === link.path 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
