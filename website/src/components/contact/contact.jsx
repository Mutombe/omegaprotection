import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
    ArrowRight,
    BookOpen,
    FileText,
    Search,
    Users,
    PhoneCall,
    Briefcase,
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  Shield, 
  Send, 
  CheckCircle,
  AlertCircle,
  User,
  Menu,
  X,
  Home,
  HelpCircle,
  Calendar
} from 'lucide-react';

// Simulating a Leaflet map since actual Leaflet can't be imported directly
const Map = () => {
  // Location is Mt Pleasant, Harare (approximated coordinates)
  return (
    <div className="relative w-full h-full min-h-[300px] bg-gray-200 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gray-300 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full p-3 shadow-lg">
        <MapPin size={24} className="text-white" />
      </div>
      <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md text-xs">
        <p className="font-bold">Omega Protection Services</p>
        <p>1123 Pearl Street, Mt Pleasant</p>
      </div>
      <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-md">
        <div className="flex space-x-2">
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">+</button>
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">-</button>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
    }, 1500);
  };
  
  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'armed-reaction', label: 'Armed Reaction' },
    { value: 'guarding', label: 'Guarding Services' },
    { value: 'estate-security', label: 'Estate Security' },
    { value: 'school-security', label: 'School Security' },
    { value: 'event-security', label: 'Event Security' },
    { value: 'technical-services', label: 'Technical Services' },
    { value: 'risk-assessment', label: 'Risk Assessment' },
    { value: 'close-protection', label: 'Close Protection' },
    { value: 'technology-solutions', label: 'Technology Solutions' },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Send us a message</h3>
      
      {formStatus === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
          <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-medium text-green-800">Message sent successfully</h4>
            <p className="text-green-700 mt-1">Thank you for contacting Omega Protection Services. We'll get back to you shortly.</p>
            <button 
              onClick={() => {
                setFormStatus(null);
                setFormState({
                  name: '',
                  email: '',
                  phone: '',
                  service: '',
                  message: '',
                });
              }}
              className="mt-2 text-green-700 underline text-sm"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 py-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 py-2.5"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone size={16} className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 py-2.5"
                  placeholder="+263 XXXXXXXXX"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 py-2.5 pr-10 appearance-none"
                  required
                >
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows="4"
              className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 py-2.5"
              placeholder="Please describe your security needs and any specific requirements..."
              required
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacy"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded focus:ring-yellow-500 text-yellow-600"
                required
              />
            </div>
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
              I consent to Omega Protection Services collecting my data through this form and contacting me regarding my inquiry.
            </label>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 h-full">
      <div className="flex items-center">
        <Shield className="text-yellow-500 mr-2" size={24} />
        <h3 className="text-xl font-bold">Get in Touch</h3>
      </div>
      
      <p className="mt-4 text-gray-300">
        Contact our team for personalized security solutions that meet your specific needs. We're available 24/7 to assist you.
      </p>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-start">
          <div className="bg-gray-800 p-2 rounded-lg mr-4 mt-1">
            <MapPin size={20} className="text-yellow-500" />
          </div>
          <div>
            <h4 className="font-medium">Head Office</h4>
            <p className="text-gray-300 text-sm mt-1">1123 Pearl Street, Mt Pleasant, Harare</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-gray-800 p-2 rounded-lg mr-4 mt-1">
            <Phone size={20} className="text-yellow-500" />
          </div>
          <div>
            <h4 className="font-medium">Phone Numbers</h4>
            <p className="text-gray-300 text-sm mt-1">+263 772 754 460</p>
            <p className="text-gray-300 text-sm">+263 784 173 770</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-gray-800 p-2 rounded-lg mr-4 mt-1">
            <Mail size={20} className="text-yellow-500" />
          </div>
          <div>
            <h4 className="font-medium">Email Address</h4>
            <p className="text-gray-300 text-sm mt-1">admin@omegaprotection.co.zw</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-gray-800 p-2 rounded-lg mr-4 mt-1">
            <Clock size={20} className="text-yellow-500" />
          </div>
          <div>
            <h4 className="font-medium">Operating Hours</h4>
            <p className="text-gray-300 text-sm mt-1">24/7 Emergency Response</p>
            <p className="text-gray-300 text-sm">Office Hours: Mon-Fri, 8am-5pm</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-700">
        <h4 className="font-medium mb-2">Banking Details</h4>
        <p className="text-gray-300 text-sm">ACC NAME: OMEGA PROTECTION SERVICES</p>
        <p className="text-gray-300 text-sm">FBC ACC: 6870383030103</p>
      </div>
    </div>
  );
};

const EmergencyCard = () => {
  return (
    <div className="bg-red-600 text-white rounded-lg shadow-lg p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500 rounded-full -mt-8 -mr-8 z-0"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <AlertCircle size={24} className="mr-2" />
          <h3 className="text-xl font-bold">Emergency Response</h3>
        </div>
        
        <p className="mb-4">
          Our emergency response team is available 24/7 to respond to security threats and incidents.
        </p>
        
        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center">
            <div className="bg-white text-red-600 p-2 rounded-full mr-3">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm opacity-80">Emergency Hotline</p>
              <p className="text-xl font-bold">+263 772 754 460</p>
            </div>
          </div>
        </div>
        
        <button className="mt-4 bg-white text-red-600 hover:bg-red-50 font-medium py-2 px-4 rounded-lg transition-colors w-full flex items-center justify-center">
          Request Emergency Assistance
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const RequestCallbackCard = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold mb-3">Request a Callback</h3>
      
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <h4 className="font-medium text-green-800">Callback Requested</h4>
          </div>
          <p className="text-green-700 text-sm mt-1">
            Thank you! Our team will call you back shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="callback-name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="callback-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 py-2"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="callback-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="callback-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 py-2"
              placeholder="+263 XXXXXXXXX"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Request Callback
          </button>
        </form>
      )}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-yellow-600 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What areas do your armed response teams cover?",
      answer: "Our extensive fleet of armed response vehicles covers all major residential and commercial areas in Harare. We're continuously expanding our coverage to additional areas. Please contact us to check if your specific location is covered."
    },
    {
      question: "How quickly can you implement a security solution for my business?",
      answer: "Implementation timelines vary based on the complexity of your security needs. For standard guarding services, we can often deploy within 24-48 hours. For more complex integrated security solutions involving technology and specialized services, we typically require 3-7 days after the initial assessment."
    },
    {
      question: "Do you offer security consultations for home security?",
      answer: "Yes, we provide comprehensive security assessments for residential properties. Our risk assessment specialists will visit your home, evaluate current security measures, identify vulnerabilities, and provide customized recommendations to enhance your home security."
    },
    {
      question: "What training do your security officers receive?",
      answer: "All our security officers undergo comprehensive training at our Omega Security Services Training Academy, which is fully accredited. Training includes induction training, specialized crime prevention programs specific to different environments, tactical training, and customer interaction skills."
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
      
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
    </div>
  );
};

const ServicesQuickLinks = () => {
  const services = [
    { name: "Armed Reaction", icon: Shield },
    { name: "Guarding Services", icon: Users },
    { name: "Estate Security", icon: Home },
    { name: "School Security", icon: BookOpen },
    { name: "Technical Services", icon: FileText },
    { name: "Risk Assessment", icon: Search }
  ];
  
  return (
    <div>
      <h3 className="text-lg font-bold mb-3">Our Services</h3>
      
      <div className="grid grid-cols-2 gap-2">
        {services.map((service, index) => (
          <div key={index} className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-50 transition-colors border border-gray-200 cursor-pointer">
            <div className="p-2 bg-yellow-100 rounded-md text-yellow-600 mr-2">
              <service.icon size={16} />
            </div>
            <span className="text-sm font-medium">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileNav = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: Shield },
    { name: 'Services', icon: Briefcase },
    { name: 'Contact', icon: Phone },
    { name: 'FAQ', icon: HelpCircle },
  ];
  
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="text-yellow-600 mr-2" size={24} />
            <span className="font-bold text-lg">Omega</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2">
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <item.icon size={18} className="mr-3 text-yellow-600" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Emergency Contact
          </button>
        </div>
      </div>
    </div>
  );
};

const PageHeader = ({ setMobileNavOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield className={`mr-2 ${isScrolled ? 'text-yellow-600' : 'text-white'}`} size={28} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Omega Protection
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>Home</a>
            <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>About</a>
            <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500 transition-colors`}>Services</a>
            <a href="#" className={`${isScrolled ? 'text-yellow-600 font-medium' : 'text-white font-medium'}`}>Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <button className={`${
              isScrolled 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
                : 'bg-white hover:bg-gray-100 text-yellow-600'
            } font-medium py-2 px-4 rounded-lg transition-colors`}>
              Emergency Contact
            </button>
          </div>
          
          <button 
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden p-2"
          >
            <Menu className={`${isScrolled ? 'text-gray-900' : 'text-white'}`} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

const ContactHero = () => {
  return (
    <div className="relative bg-gray-900 pt-16 h-80">
      <div className="absolute inset-0">
        <img 
          src="/about.png" 
          alt="Security team" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70"></div>
      </div>
      
      <div className="relative container mx-auto px-4 flex flex-col h-full justify-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
          Get in touch with our security experts for personalized solutions to protect what matters most.
        </p>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">


      
      <ContactHero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Our security experts are ready to assist you with personalized security solutions. Fill out the form below or use our contact details to reach us.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-3">
                    <Phone className="text-yellow-600" size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">+263 24 2002737</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-3">
                    <Mail className="text-yellow-600" size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">admin@omegaprotection.co.zw</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-3">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Office Address</h3>
                  <p className="text-gray-600 text-sm">1123 Pearl Street, Mt Pleasant</p>
                    <p className="text-gray-600 text-sm">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
            <ContactForm />
            <FAQSection />
            </div>
    
                <ContactInfo />
                <EmergencyCard />
                <RequestCallbackCard />
                
                <Map />
                <ServicesQuickLinks />
        </div>
        </div>
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm">&copy; 2024 Omega Protection Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </div>
    );
}
export default ContactPage;