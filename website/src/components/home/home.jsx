import React, { useState, useEffect } from 'react';
import { Shield, Mail, Phone, MapPin, Clock, Menu, X, ChevronRight, Users, Lock, Eye, Target, Award, UserCheck, ListChecks, Headphones, MessageSquare, Send, HelpCircle, Bell, Home, FileText, ShieldCheck, Star, Package, AlertTriangle } from 'lucide-react';

// Layout Components
const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-12 w-12 mr-3">
                <Shield className="h-full w-full text-yellow-600" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">OMEGA</h1>
                <p className="text-xs text-gray-600">Protection Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-3">
                <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
                <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
                <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="font-medium text-gray-700 hover:text-yellow-600 transition-colors">
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a 
    href={href} 
    className="flex items-center justify-between p-2 border-b border-gray-100 text-gray-700 hover:text-yellow-600"
    onClick={onClick}
  >
    <span>{children}</span>
    <ChevronRight size={16} />
  </a>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-yellow-500 mr-2" />
            <div>
              <h3 className="font-bold text-white">OMEGA</h3>
              <p className="text-xs">Protection Services</p>
            </div>
          </div>
          <p className="text-sm mb-4">Providing integrated security solutions by combining manpower with the latest security technology.</p>
          <div className="flex space-x-4">
            <SocialIcon icon="facebook" />
            <SocialIcon icon="twitter" />
            <SocialIcon icon="linkedin" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#services">Our Services</FooterLink>
            <FooterLink href="#contact">Contact Us</FooterLink>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
              <span className="text-sm">1123 Pearl Street, Mt Pleasant, Harare</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm">+263 772 754 460</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm">+263 784 173 770</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm">oprosec@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Omega Protection Services (Pvt) Ltd. All Rights Reserved.</p>
        <p className="mt-2 text-gray-500">
          <a href="#" className="hover:text-yellow-500">Privacy Policy</a> • 
          <a href="#" className="hover:text-yellow-500 mx-2">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-sm hover:text-yellow-500 transition-colors">
      {children}
    </a>
  </li>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 transition-colors">
    <span className="sr-only">{icon}</span>
    {/* Social icons would be imported/implemented here */}
    <div className="h-4 w-4 bg-white/30 rounded-sm"></div>
  </a>
);

// Page Components
const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <FeaturesSection />
      <CTASection />
      <TestimonialsSection />
    </div>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
    {/* Background image would be placed here */}
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Precision and Vigilance, Your Shield
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Omega Protection Services provides integrated security solutions by combining manpower with the latest security technology.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
            Explore Our Services
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-md transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Our Story"
        subtitle="About Omega Protection Services"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-700 mb-4">
            Omega Protection Services is a Zimbabwean African company dedicated to the provision of excellent security services. We are capable of dealing with all your security needs and offer a complete range, planning, system analysis and design as well as executive services.
          </p>
          <p className="text-gray-700 mb-6">
            The company was established in 2024 by a senior Zimbabwean CID boss, who worked as a manager in various organizations and also went onto a freelance career as a specialist consultant in security related projects.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <ValueCard icon={<Target />} title="Precision" />
            <ValueCard icon={<Eye />} title="Vigilance" />
            <ValueCard icon={<Lock />} title="Security" />
            <ValueCard icon={<Users />} title="Experience" />
          </div>
          
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center">
            Learn More About Us
            <ChevronRight size={16} className="ml-2" />
          </button>
        </div>
        
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          {/* Image placeholder */}
          <Shield size={120} className="text-gray-400" />
        </div>
      </div>
    </div>
  </section>
);

const ValueCard = ({ icon, title }) => (
  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center">
    <div className="p-2 bg-yellow-100 rounded-md text-yellow-600 mr-3">
      {icon}
    </div>
    <h3 className="font-medium">{title}</h3>
  </div>
);

const ServicesPreview = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive Security Solutions"
      />
      
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard 
          icon={<Shield />}
          title="Armed Reaction"
          description="Our armed reaction officers undergo stringent tactical training, equipped with bulletproof vests and modern equipment."
        />
        <ServiceCard 
          icon={<UserCheck />}
          title="Guarding Services"
          description="We provide physical guarding services with both armed and unarmed security officers for various sectors."
        />
        <ServiceCard 
          icon={<Target />}
          title="Specialty Services"
          description="From risk assessments to close protection, we offer specialized security services tailored to your needs."
        />
        <ServiceCard 
          icon={<Bell />}
          title="Technology"
          description="Advanced security technology including smart surveillance, emergency response systems, and access control."
        />
        <ServiceCard 
          icon={<Award />}
          title="Training Centre"
          description="Our accredited training academy ensures all personnel are thoroughly prepared for security operations."
        />
        <ServiceCard 
          icon={<HelpCircle />}
          title="Command Centre"
          description="State-of-the-art command center providing advanced security solutions and support."
        />
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center mx-auto">
          View All Services
          <ChevronRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="p-3 bg-yellow-100 rounded-md text-yellow-600 inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a href="#" className="mt-4 inline-flex items-center text-yellow-600 font-medium">
      Learn More
      <ChevronRight size={16} className="ml-1" />
    </a>
  </div>
);

const FeaturesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Why Choose Us"
        subtitle="The Omega Advantage"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon={<Shield />}
          title="Quality"
          description="Our relationship with quality is non-negotiable. We embrace desirable values and constructive change."
        />
        <FeatureCard 
          icon={<UserCheck />}
          title="Integrity"
          description="We are guided by truth, honesty and honor in everything we do. We build trust through responsible actions."
        />
        <FeatureCard 
          icon={<Target />}
          title="Dedication"
          description="Contract compliance at all times and highly committed towards achieving our goals."
        />
        <FeatureCard 
          icon={<Award />}
          title="Training"
          description="We believe in constantly training our guards and employees to always stay updated and produce best outcomes."
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="p-4 bg-yellow-100 rounded-full text-yellow-600 inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CTASection = () => (
  <section className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
        <p className="text-gray-300 mb-8">
          Contact us today to discuss your security needs and how we can help protect what matters most to you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
            Get a Free Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-md transition-colors">
            View Services
          </button>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Client Testimonials"
        subtitle="What Our Clients Say"
      />
      
      <div className="grid md:grid-cols-3 gap-6">
        <TestimonialCard
          name="John Moyo"
          role="Business Owner"
          text="Omega's security personnel are professional, vigilant, and responsive. They've significantly improved the security of my business premises."
        />
        <TestimonialCard
          name="Sarah Mutasa"
          role="Estate Manager"
          text="We've been using Omega for our residential estate security for the past year. Their team is reliable and their technology integration is impressive."
        />
        <TestimonialCard
          name="David Zimuto"
          role="School Principal"
          text="The specialized school security services provided by Omega give us peace of mind. Their officers are well-trained and great with students."
        />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ name, role, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <Star className="text-yellow-500 h-5 w-5" />
      <Star className="text-yellow-500 h-5 w-5" />
      <Star className="text-yellow-500 h-5 w-5" />
      <Star className="text-yellow-500 h-5 w-5" />
      <Star className="text-yellow-500 h-5 w-5" />
    </div>
    <p className="text-gray-700 italic mb-6">"{text}"</p>
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
        <Users className="h-6 w-6 text-gray-400" />
      </div>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

// Services Page
const ServicesPage = () => {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive Security Solutions for Every Need" 
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ServiceCategory
            title="Armed Reaction"
            description="Omega Security Services has an extensive fleet of reaction vehicles covering the residential and commercial areas we serve. Our armed reaction officers undergo stringent tactical training and are equipped with the latest technology."
            services={[
              {
                title: "Armed Escorts",
                description: "Professional armed escorts for valuable goods, cash-in-transit, and VIP transportation."
              },
              {
                title: "Business Lockups",
                description: "Secure business premises during closing and opening hours to prevent unauthorized access."
              },
              {
                title: "Special Operations Teams",
                description: "Highly trained teams that support Armed Reaction and Guarding divisions for specialized security needs."
              },
              {
                title: "VIP Protection",
                description: "Dedicated protection services for executives, dignitaries, and high-profile individuals."
              }
            ]}
          />
          
          <ServiceCategory
            title="Guarding Services"
            description="We provide physical guarding services with both armed and unarmed security officers for the commercial, residential, retail, and educational sectors."
            services={[
              {
                title: "Residential Estate Security",
                description: "Specialized security solutions designed specifically for residential estates and complexes."
              },
              {
                title: "School and Campus Security",
                description: "Tailored security measures for educational institutions with specially trained officers."
              },
              {
                title: "Special Event Guarding",
                description: "Security personnel for events ranging from large sporting events and concerts to ad hoc functions."
              },
              {
                title: "Casual and Ad Hoc Guarding",
                description: "Quality guarding services for short and long-term postings to meet temporary security needs."
              }
            ]}
          />
          
          <ServiceCategory
            title="Specialty Services"
            description="Omega Security Services offers a range of specialized security solutions to address specific security concerns and requirements."
            services={[
              {
                title: "Technical Services",
                description: "Full range of technical installations and services customized for each site's unique requirements."
              },
              {
                title: "Risk Assessments",
                description: "On-site evaluations of current security measures and potential risk factors by trained assessors."
              },
              {
                title: "Close Protection",
                description: "Highly trained specialists for the personal protection of individuals requiring special security."
              },
              {
                title: "Online Intelligence",
                description: "Advanced geographic information systems for tracking and monitoring security operations."
              }
            ]}
          />
          
          <ServiceCategory
            title="Technology Solutions"
            description="Our state-of-the-art security technology enhances traditional security measures and provides additional layers of protection."
            services={[
              {
                title: "Omega ePOD",
                description: "Emergency Personal Ops Device providing immediate access to help when needed most."
              },
              {
                title: "Omega App",
                description: "Mobile application with panic button functionality for quick emergency response."
              },
              {
                title: "Smart Surveillance",
                description: "Advanced AI-powered CCTV monitoring for remote protection of premises and assets."
              },
              {
                title: "AccessTrack",
                description: "Cost-effective license scanning solution for visitor information management."
              }
            ]}
          />
        </div>
      </section>
    </div>
  );
};

const ServiceCategory = ({ title, description, services }) => (
  <div className="mb-16 pb-8 border-b border-gray-100">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p className="text-gray-700 mb-8 max-w-3xl">{description}</p>
    
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <ShieldCheck className="h-5 w-5 text-yellow-600 mr-2" />
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted!');
  };
  
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in Touch with Our Security Experts" 
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our services or need a customized security solution? Fill out the form below and our team will get back to you shortly.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-1">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      <option value="">Select a Service</option>
                      <option value="armed-reaction">Armed Reaction</option>
                      <option value="guarding">Guarding Services</option>
                      <option value="speciality">Specialty Services</option>
                      <option value="technology">Technology Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center">
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                Get in touch with us directly through the following contact details or visit our office during business hours.
              </p>
              
              <div className="space-y-6">
                <ContactInfoCard
                  icon={<MapPin />}
                  title="Our Office"
                  details={["1123 Pearl Street", "Mt Pleasant, Harare", "Zimbabwe"]}
                />
                
                <ContactInfoCard
                  icon={<Phone />}
                  title="Phone Numbers"
                  details={["+263 772 754 460", "+263 784 173 770"]}
                />
                
                <ContactInfoCard
                  icon={<Mail />}
                  title="Email Address"
                  details={["oprosec@gmail.com"]}
                />
                
                <ContactInfoCard
                  icon={<Clock />}
                  title="Business Hours"
                  details={["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"]}
                />
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  Emergency Contact
                </h3>
                <p className="text-gray-600 mb-4">For emergencies and urgent security matters, please call our 24/7 Command Centre.</p>
                <div className="text-xl font-bold text-yellow-600">+263 772 754 460</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, details }) => (
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