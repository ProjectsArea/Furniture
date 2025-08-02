import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ShoppingBag, User } from 'lucide-react';
import { useCart } from './CartContext';

const Navbar = () => {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = {
    'Living Room': ['Sofas', 'Armchairs', 'Coffee Tables', 'TV Units', 'Bookcases'],
    'Bedroom': ['Beds', 'Wardrobes', 'Dressing Tables', 'Nightstands', 'Mirrors'],
    'Dining': ['Dining Tables', 'Dining Chairs', 'Sideboards', 'Bar Stools'],
    'Storage': ['Shelving', 'Chests', 'Cabinets', 'Organizers'],
    'Decor': ['Lighting', 'Rugs', 'Artwork', 'Vases', 'Cushions']
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
  <img 
    src="/490154494_1024945662885722_874130416772345515_n.jpg" 
    alt="Luxe Logo" 
    className="h-20 w-150 rounded-half" 
    style={{ marginLeft: '-10px' }}
  />
</Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
          <Link 
  to="/" 
  className="text-[#FAFA33] hover:text-amber-600 transition-colors duration-300 font-medium"
>
  Home
</Link>

            <Link to="/offers" className="text-[#FAFA33] hover:text-amber-600 transition-colors duration-300 font-medium">
              Offers
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('shop')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/shop" className="flex items-center text-[#FAFA33] hover:text-amber-600 transition-colors duration-300 font-medium">
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              {/* Mega Menu */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-96 bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300 ${
                activeDropdown === 'shop' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
              }`}>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(categories).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item}>
                            <Link 
                              to={`/shop?category=${item.toLowerCase()}`}
                              className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/collections" className="text-[#FAFA33] hover:text-amber-600 transition-colors duration-300 font-medium">
              Collections
            </Link>
            <Link to="/about" className="text-[#FAFA33] hover:text-amber-600 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/blog" className="text-[#FAFA33] hover:text-amber-600 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-[#FAFA33] hover:text-amber-600 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-[#FAFA33] hover:text-amber-600 transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-[#FAFA33] hover:text-amber-600 transition-colors duration-300">
              <User className="h-5 w-5" />
            </button>
            <Link to="/cart" className="p-2 text-[#FAFA33] hover:text-amber-600 transition-colors duration-300 relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <img src="/490154494_1024945662885722_874130416772345515_n.jpg" alt="Luxe Logo" className="h-10 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="space-y-6">
              <Link to="/" className="block text-lg font-medium text-[#FAFA33] hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link to="/shop" className="block text-lg font-medium text-[#FAFA33] hover:text-amber-600 transition-colors">
                Shop
              </Link>
              <Link to="/collections" className="block text-lg font-medium text-[#FAFA33] hover:text-amber-600 transition-colors">
                Collections
              </Link>
              <Link to="/about" className="block text-lg font-medium text-[#FAFA33] hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link to="/blog" className="block text-lg font-medium text-[#FAFA33] hover:text-amber-600 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-lg font-medium text-[#FAFA33] hover:text-amber-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;