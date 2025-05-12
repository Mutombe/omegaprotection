import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Mail, Phone, MapPin, Facebook, 
  Twitter, Linkedin, Instagram, Clock
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-yellow-500 mr-2" />
            <div>
              <h3 className="font-bold text-white">OMEGA</h3>
              <p className="text-xs">Protection Services</p>
            </div>
          </div>
          <p className="text-sm mb-4">
            Providing integrated security solutions by combining manpower with 
            the latest security technology since 2024.
          </p>
          <div className="flex space-x-4">
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<FaWhatsapp size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Our Services</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2">
            <FooterLink to="/services#armed-reaction">Armed Reaction</FooterLink>
            <FooterLink to="/services#guarding">Guarding Services</FooterLink>
            <FooterLink to="/services#specialty">Specialty Services</FooterLink>
            <FooterLink to="/services#technology">Technology Solutions</FooterLink>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm">1123 Pearl Street, Mt Pleasant, Harare</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              <span className="text-sm">+263 24 2002737</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              <span className="text-sm">+263 77 275 4460</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              <span className="text-sm">oprosec@gmail.com</span>
            </li>
            <li className="flex items-center">
              <Clock className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              <span className="text-sm">Mon-Fri: 8AM-5PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Omega Protection Services (Pvt) Ltd. All Rights Reserved.</p>
        <p className="mt-2 text-gray-500">
          <Link to="/privacy" className="hover:text-yellow-500">Privacy Policy</Link> • 
          <Link to="/terms" className="hover:text-yellow-500 mx-2">Terms of Service</Link>
        </p>
      </div>
    </div>
  </footer>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-sm hover:text-yellow-500 transition-colors">
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ icon }) => (
  <a 
    href="#" 
    className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 transition-colors"
  >
    <span className="sr-only">Social Media</span>
    {icon}
  </a>
);

export default Footer;