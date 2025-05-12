import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, Mail, Phone, MapPin, Clock, Menu, X, ChevronRight,
  Facebook, Twitter, Linkedin, Instagram,
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Footer from './footer/footer';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if nav link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Top Info Bar - Desktop */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 text-sm">
              <span className="flex items-center">
                <Phone size={14} className="mr-1" />
                +263 24 2002737
              </span>
              <span className="flex items-center">
                <Mail size={14} className="mr-1" />
                oprosec@gmail.com
              </span>
            </div>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61571199239629&mibextid=ZbWKwL" className="hover:text-yellow-400 transition-colors">
                <Facebook size={14} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://wa.me/263772754460" className="hover:text-yellow-400 transition-colors">
                <FaWhatsapp size={14} />
                <span className="sr-only">Whatsapp</span>
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Linkedin size={14} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Instagram size={14} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Top Info Bar */}
      <div className="bg-gray-900 text-white py-2 block md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between items-center">
              <span className="flex items-center text-xs">
                <Phone size={12} className="mr-1" />
                +263 24 2002737
              </span>
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/profile.php?id=61571199239629&mibextid=ZbWKwL" className="hover:text-yellow-400 transition-colors">
                  <Facebook size={12} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://wa.me/263772754460" className="hover:text-yellow-400 transition-colors">
                  <FaWhatsapp size={12} />
                  <span className="sr-only">Whatsapp</span>
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  <Linkedin size={12} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  <Instagram size={12} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            <span className="flex items-center text-xs">
              <Mail size={12} className="mr-1" />
              oprosec@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 
          ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="h-12 w-12 mr-3 relative">
                <Shield className="h-full w-full text-yellow-600 group-hover:text-yellow-700 transition-colors" />
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">OMEGA</h1>
                <p className="text-xs text-gray-600">Protection Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              <NavLink to="/" active={isActive('/')}>Home</NavLink>
              <NavLink to="/about" active={isActive('/about')}>About</NavLink>
              <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
              <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
              <a href='tel:+263242002737'>
              <button className="ml-4 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                <Phone size={16} className="inline-block mr-1" />
                Emergency Call
              </button></a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <MobileNavLink to="/">Home</MobileNavLink>
                <MobileNavLink to="/about">About</MobileNavLink>
                <MobileNavLink to="/services">Services</MobileNavLink>
                <MobileNavLink to="/contact">Contact</MobileNavLink>
                
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm mb-3">
                    Emergency Call
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
};

const NavLink = ({ to, active, children }) => (
  <Link 
    to={to} 
    className={`font-medium px-4 py-2 rounded-md transition-colors ${
      active 
        ? 'text-yellow-600 bg-yellow-50' 
        : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link 
    to={to}
    className="flex items-center justify-between p-2 border-b border-gray-100 text-gray-700 hover:text-yellow-600"
  >
    <span>{children}</span>
    <ChevronRight size={16} />
  </Link>
);

export default Layout;