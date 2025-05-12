import React from 'react';
import { ChevronRight } from 'lucide-react';

export const PageHeader = ({ title, subtitle, image }) => (
  <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
    {image && (
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{backgroundImage: `url(${image})`}}
      ></div>
    )}
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
      <p className="text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </section>
);

export const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

export const Button = ({ children, variant = "primary", className = "", onClick, icon }) => {
  const baseClasses = "font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-yellow-600 hover:bg-yellow-700 text-white",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white/10",
    outline: "bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50",
    dark: "bg-gray-800 hover:bg-gray-900 text-white",
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="p-3 bg-yellow-100 rounded-md text-yellow-600 inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a href="/services" className="mt-4 inline-flex items-center text-yellow-600 font-medium">
      Learn More
      <ChevronRight size={16} className="ml-1" />
    </a>
  </div>
);

export const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="p-4 bg-yellow-100 rounded-full text-yellow-600 inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const ValueCard = ({ icon, title }) => (
  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center">
    <div className="p-2 bg-yellow-100 rounded-md text-yellow-600 mr-3">
      {icon}
    </div>
    <h3 className="font-medium">{title}</h3>
  </div>
);

export const TestimonialCard = ({ name, role, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
    <p className="text-gray-700 italic mb-6">"{text}"</p>
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
        <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

export const ContactInfoCard = ({ icon, title, details }) => (
  <div className="flex">
    <div className="p-3 bg-yellow-100 rounded-md text-yellow-600 h-fit">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="mt-1 space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  </div>
);