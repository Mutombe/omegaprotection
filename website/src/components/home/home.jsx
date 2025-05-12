import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Eye, Lock, Users, Target, UserCheck, 
  Bell, Award, HelpCircle, ChevronRight,
  Phone, Mail, MapPin, Clock
} from 'lucide-react';
import { Button, SectionHeader, ServiceCard, FeatureCard, ValueCard, TestimonialCard, ContactInfoCard } from '../ui/ui';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <FeaturesSection />
      <CTASection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  // Carousel images - desktop and mobile versions
  const carouselImages = [
    {
      desktop: "/home1.jpg", // Replace with actual image path for production
      mobile: "/home2m.jpg",
      alt: "Security guards patrolling"
    },
    {
      desktop: "/home2.jpg", // Replace with actual image path for production
      mobile: "/home2m.jpg",
      alt: "Command center operations"
    },
    {
      desktop: "/home3.jpg", // Replace with actual image path for production
      mobile: "/home3m.jpg",
      alt: "Security technology"
    },
  ];
  
  React.useEffect(() => {
    // Auto-rotate carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Carousel Background Images */}
      {carouselImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 
                     ${index === currentSlide ? 'opacity-50' : 'opacity-0'}`}
        >
          {/* Desktop Image (hidden on small screens) */}
          <img 
            src={image.desktop}
            alt={image.alt}
            className="hidden md:block object-cover w-full h-full"
          />
          
          {/* Mobile Image (visible only on small screens) */}
          <img 
            src={image.mobile}
            alt={image.alt}
            className="md:hidden object-cover w-full h-full"
          />
        </div>
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-yellow-600 text-white text-sm px-3 py-1 rounded mb-4 font-medium">
            Professional Security Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Precision and Vigilance, Your Trusted Shield
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Omega Protection Services provides integrated security solutions by combining expert manpower with the latest security technology.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/services">
              <Button variant="primary" icon={<ChevronRight size={16} />}>
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">
                Contact Us
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center gap-6 text-white">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center mr-3">
                <Shield size={18} />
              </div>
              <div>
                <span className="block text-sm text-gray-300">Protection</span>
                <span className="font-medium">24/7 Security</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center mr-3">
                <Users size={18} />
              </div>
              <div>
                <span className="block text-sm text-gray-300">Experience</span>
                <span className="font-medium">Trained Professionals</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center mr-3">
                <Target size={18} />
              </div>
              <div>
                <span className="block text-sm text-gray-300">Response</span>
                <span className="font-medium">Fast & Efficient</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-600' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const Hero2 = () => (
  <section id="home" className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
    {/* Background image would be placed here */}
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <span className="inline-block bg-yellow-600 text-white text-sm px-3 py-1 rounded mb-4 font-medium">
          Professional Security Services
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Precision and Vigilance, Your Trusted Shield
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Omega Protection Services provides integrated security solutions by combining expert manpower with the latest security technology.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/services">
            <Button variant="primary" icon={<ChevronRight size={16} />}>
              Explore Our Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">
              Contact Us
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 flex flex-wrap items-center gap-6 text-white">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center mr-3">
              <Shield size={18} />
            </div>
            <div>
              <span className="block text-sm text-gray-300">Protection</span>
              <span className="font-medium">24/7 Security</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center mr-3">
              <Users size={18} />
            </div>
            <div>
              <span className="block text-sm text-gray-300">Experience</span>
              <span className="font-medium">Trained Professionals</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-yellow-600 flex items-center justify-center mr-3">
              <Target size={18} />
            </div>
            <div>
              <span className="block text-sm text-gray-300">Response</span>
              <span className="font-medium">Fast & Efficient</span>
            </div>
          </div>
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
          <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium mb-4">
            Established in 2024
          </div>
          <p className="text-gray-700 mb-4">
            Omega Protection Services is a Zimbabwean African company dedicated to the provision of excellent security services. We are capable of dealing with all your security needs and offer a complete range, planning, system analysis and design as well as executive services.
          </p>
          <p className="text-gray-700 mb-6">
            The company was established in 2024 by a Zimbabwean Former Senior CID Officer, who worked as a manager in various organizations and also went onto a freelance career as a specialist consultant in security related projects.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <ValueCard icon={<Target />} title="Precision" />
            <ValueCard icon={<Eye />} title="Vigilance" />
            <ValueCard icon={<Lock />} title="Security" />
            <ValueCard icon={<Users />} title="Experience" />
          </div>
          
          <Link to="/about">
            <Button 
              variant="primary" 
              icon={<ChevronRight size={16} />}
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
        
        <div className="relative">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center relative z-10">
            {/* Image placeholder */}
            <img 
              src="/home1.jpg" // Replace with actual image path for production
              alt="About Omega Protection Services"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="absolute w-full h-full top-4 right-4 rounded-lg border-2 border-yellow-500 -z-0"></div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section id="services-preview" className="py-20 bg-gray-50">
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
        <Link to="/services">
          <Button 
            variant="primary" 
            icon={<ChevronRight size={16} />}
            className="mx-auto"
          >
            View All Services
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Why Choose Us"
        subtitle="The Omega Advantage"
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Shield size={24} />}
          title="Professional Team"
          description="Our security personnel have extensive military or police backgrounds with specialized training in various security operations."
        />
        <FeatureCard
          icon={<Target size={24} />}
          title="Quick Response"
          description="Equipped with state-of-the-art technology, our reaction teams provide fast and efficient response to security threats."
        />
        <FeatureCard
          icon={<Lock size={24} />}
          title="Tailored Solutions"
          description="We create customized security plans based on thorough risk assessments to meet your specific needs."
        />
        <FeatureCard
          icon={<Bell size={24} />}
          title="Advanced Technology"
          description="Our security services incorporate the latest technology including AI surveillance systems and emergency response tools."
        />
        <FeatureCard
          icon={<Users size={24} />}
          title="Special Operations"
          description="Our Special Operations Teams provide tactical intervention and support in complex security situations."
        />
        <FeatureCard
          icon={<Award size={24} />}
          title="Accredited Standards"
          description="Our training and operations meet the highest industry standards and compliance requirements."
        />
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Need a Security Consultation?</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Our team of experts is ready to assess your security needs and provide tailored solutions for your home or business.
      </p>
      <Link to="/contact">
        <Button variant="primary" className="mx-auto">
          Request a Free Consultation
        </Button>
      </Link>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Client Testimonials"
        subtitle="What Our Clients Say About Us"
      />
      
      <div className="grid md:grid-cols-3 gap-6">
        <TestimonialCard
          name="Sarah Johnson"
          role="Property Manager, Sunridge Estates"
          text="Omega Protection Services has transformed the security of our residential estate. Their guards are professional, well-trained, and always vigilant. Our residents feel safer than ever."
        />
        <TestimonialCard
          name="David Moyo"
          role="CEO, Harare Commercial Center"
          text="Their integrated security approach combining guards and technology has significantly reduced security incidents at our commercial property. Their response time is impressive."
        />
        <TestimonialCard
          name="Grace Mutasa"
          role="Principal, St. Mary's School"
          text="As a school, the safety of our students is paramount. Omega's specialized school security division has implemented excellent protocols that give parents peace of mind."
        />
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeader
        title="Contact Us"
        subtitle="Get in Touch with Our Team"
      />
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <ContactInfoCard
            icon={<MapPin size={24} />}
            title="Our Location"
            details={["1123 Pearl Street", "Mt Pleasant, Harare"]}
          />
          <ContactInfoCard
            icon={<Phone size={24} />}
            title="Phone"
            details={["+263 772 754 460", "+263 784 173 770"]}
          />
          <ContactInfoCard
            icon={<Mail size={24} />}
            title="Email"
            details={["oprosec@gmail.com"]}
          />
          <ContactInfoCard
            icon={<Clock size={24} />}
            title="Working Hours"
            details={["Monday - Friday: 8:00 AM - 5:00 PM", "24/7 Emergency Response"]}
          />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;