import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  AlertCircle, 
  Users, 
  Eye, 
  Lock, 
  Bell, 
  Camera, 
  FileText, 
  Globe, 
  Clock, 
  Check, 
  Award, 
  TrendingUp, 
  Zap, 
  Smartphone, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  UserCheck, 
  Key, 
  MapPin,
  Star,
  Monitor,
  Shield as ShieldIcon,
  Radio,
  UserPlus,
  Thermometer,
  BookOpen,
  FileBadge,
  Search,
  Heart,
  Home,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

// Component for feature boxes in the highlight section
const FeatureBox = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="p-3 bg-yellow-100 rounded-md text-yellow-600 w-fit mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// PageHeader component
const PageHeader = ({ title, subtitle, image }) => (
  <div className="relative h-64 md:h-80 bg-gray-900 mb-8">
    <img 
      src={image} 
      alt={title}
      className="w-full h-full object-cover opacity-70"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
);

// SectionHeader component
const SectionHeader = ({ title, subtitle, centered = false }) => (
  <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
    {subtitle && (
      <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    )}
  </div>
);

// Button component
const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg px-5 py-2.5 transition-colors";
  
  const variantClasses = {
    primary: "bg-yellow-600 hover:bg-yellow-700 text-white",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "bg-white hover:bg-gray-50 text-gray-800 border border-gray-300",
    text: "bg-transparent hover:bg-gray-50 text-yellow-600"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ServiceCard component
const ServiceCard = ({ service, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-video relative">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-4 text-white">
          <span className="text-xs font-medium px-2 py-1 bg-yellow-600 rounded-full uppercase">
            {service.category}
          </span>
        </div>
      </div>
    </div>
    
    <div className="p-5">
      <div className="flex items-center mb-3">
        <div className="p-2 bg-yellow-100 rounded-md text-yellow-600 mr-3">
          {service.icon}
        </div>
        <h3 className="font-bold text-lg">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
      <div className="flex items-center text-yellow-600 font-medium hover:text-yellow-700">
        Learn More
        <ChevronRight size={16} className="ml-1" />
      </div>
    </div>
  </div>
);

// Testimonial component
const Testimonial = ({ quote, author, position, company }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="mb-4 text-yellow-500">
      <Star size={20} />
      <Star size={20} />
      <Star size={20} />
      <Star size={20} />
      <Star size={20} />
    </div>
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <div>
      <p className="font-medium">{author}</p>
      <p className="text-sm text-gray-500">{position}, {company}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTechnology, setActiveTechnology] = useState(null);
  const [showTechDetails, setShowTechDetails] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'armed', name: 'Armed Reaction' },
    { id: 'guarding', name: 'Guarding' },
    { id: 'specialty', name: 'Specialty Services' },
    { id: 'technology', name: 'Technology' }
  ];

  const services = [
    {
      id: 1,
      category: 'armed',
      icon: <Shield size={24} />,
      title: 'Armed Reaction',
      description: 'Extensive fleet of reaction vehicles covering residential and commercial areas with state-of-the-art technology.',
      features: [
        'PTT radios & satellite tracking',
        'Onboard CCTV cameras',
        'Bulletproof equipment',
        '24/7 monitoring'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Rapid response time',
        'Highly trained officers',
        'Advanced equipment',
        'Full area coverage'
      ]
    },
    {
      id: 2,
      category: 'armed',
      icon: <AlertCircle size={24} />,
      title: 'Special Operations Teams',
      description: 'Highly trained teams that support Armed Reaction and Guarding divisions, playing a key role in our public space crime-fighting.',
      features: [
        'Armed escorts',
        'Business lockups',
        'Shows of force',
        'VIP protection'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Tactical expertise',
        'Specialized training',
        'Critical situation handling',
        'Deterrent presence'
      ]
    },
    {
      id: 3,
      category: 'armed',
      icon: <UserCheck size={24} />,
      title: 'Protection Unit',
      description: 'Our unit forms part of our Special Operations Teams and provides back-up to our Guarding and Armed Response divisions.',
      features: [
        'Narcotics detection',
        'Tracking suspects',
        'Crowd control',
        'Night & perimeter patrols'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Enhanced surveillance',
        'Superior detection capabilities',
        'Effective deterrent',
        'Comprehensive security'
      ]
    },
    {
      id: 4,
      category: 'guarding',
      icon: <Users size={24} />,
      title: 'Physical Guarding',
      description: 'Both armed and unarmed security officers for commercial, residential, retail and educational sectors.',
      features: [
        'Minimum Grade C officers',
        'Thorough vetting',
        'Regular evaluations',
        'Armed backup support'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Visible security presence',
        'Immediate on-site response',
        'Tailored to site requirements',
        'High service standards'
      ]
    },
    {
      id: 5,
      category: 'guarding',
      icon: <Home size={24} />,
      title: 'Estate Security',
      description: 'Market-leading residential estate security with a dedicated Estate Division providing tailor-made solutions.',
      features: [
        'Specially selected officers',
        'Dedicated management team',
        'Site-specific training',
        'Proven aptitude assessments'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Peace of mind for residents',
        'Controlled access',
        'Community-focused security',
        'Proactive approach'
      ]
    },
    {
      id: 6,
      category: 'guarding',
      icon: <BookOpen size={24} />,
      title: 'Schools Security',
      description: 'Dedicated Schools Division providing tailor-made security solutions for schools and campuses.',
      features: [
        'Specially trained officers',
        'Security Operating Procedures',
        'Stringent vetting',
        'Dedicated supervision'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Safe learning environment',
        'Customized security protocols',
        'Expert management',
        'Emergency preparedness'
      ]
    },
    {
      id: 7,
      category: 'guarding',
      icon: <Users size={24} />,
      title: 'Event Security',
      description: 'Special Events Division specializes in deployment and operational planning for various events.',
      features: [
        'Pre-screened staff',
        'Event-specific planning',
        'Mobile Control Centers',
        'Surveillance equipment'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Comprehensive event protection',
        'Crowd management',
        'Incident prevention',
        'Professional appearance'
      ]
    },
    {
      id: 8,
      category: 'specialty',
      icon: <FileText size={24} />,
      title: 'Technical Services',
      description: 'Full range of customized technical installations with 24-hour backup service and maintenance contracts.',
      features: [
        'Customized installations',
        'Site-specific solutions',
        '24-hour backup service',
        'Maintenance contracts'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Expert technical support',
        'Latest security technology',
        'Reduced vulnerability',
        'Continuous protection'
      ]
    },
    {
      id: 9,
      category: 'specialty',
      icon: <Search size={24} />,
      title: 'Risk Assessments',
      description: 'On-site risk assessments evaluating current security measures and identifying risk factors.',
      features: [
        'Trained assessors',
        'Comprehensive evaluation',
        'Actionable recommendations',
        'Security gap analysis'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Identify vulnerabilities',
        'Prioritize security needs',
        'Cost-effective planning',
        'Optimized protection'
      ]
    },
    {
      id: 10,
      category: 'specialty',
      icon: <UserPlus size={24} />,
      title: 'Close Protection',
      description: 'Highly trained specialists for personal protection of executives, dignitaries, celebrities, or private persons.',
      features: [
        'Executive protection',
        'Secure drive service',
        'Family protection',
        'Travel security'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Personal safety assurance',
        'Discreet protection',
        'Professional security detail',
        'Peace of mind'
      ]
    },
    {
      id: 11,
      category: 'specialty',
      icon: <Globe size={24} />,
      title: 'Online Intelligence',
      description: 'Online intelligence through Trackforce - a comprehensive geographic information system.',
      features: [
        'Urban infrastructure tracking',
        'Statistical information',
        'Trend analysis',
        'Resource allocation'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Data-driven security',
        'Predictive analysis',
        'Resource optimization',
        'Strategic planning'
      ]
    },
    {
      id: 12,
      category: 'specialty',
      icon: <TrendingUp size={24} />,
      title: 'Proactive Initiatives',
      description: 'Various proactive initiatives providing support to clients and communities.',
      features: [
        'Suburb closures & patrols',
        'Public space monitoring',
        'Crime intelligence',
        'Joint operations'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Community safety',
        'Crime prevention',
        'Enhanced awareness',
        'Collaborative security'
      ]
    },
    {
      id: 13,
      category: 'technology',
      icon: <Bell size={24} />,
      title: 'Omega ePOD',
      description: 'Emergency Personal Ops Device – an affordable tailor-made panic system for immediate help.',
      features: [
        'Immediate assistance',
        'Portable security',
        'GPS tracking',
        'Simple operation'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Instant emergency response',
        'Peace of mind',
        'Personal protection',
        'Location tracking'
      ]
    },
    {
      id: 14,
      category: 'technology',
      icon: <Smartphone size={24} />,
      title: 'Omega App',
      description: 'Mobile App with integrated PANIC BUTTON providing instant access to help.',
      features: [
        'Panic button',
        'GPS location sharing',
        'Emergency contacts',
        'Quick activation'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Always accessible',
        'Immediate response',
        'User-friendly interface',
        'Mobile protection'
      ]
    },
    {
      id: 15,
      category: 'technology',
      icon: <Monitor size={24} />,
      title: 'Smart Surveillance',
      description: 'Advanced AI technology providing off-site CCTV monitoring for remote protection of premises and assets.',
      features: [
        'AI-powered detection',
        'Remote monitoring',
        'Asset protection',
        'Advanced analytics'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Reduced false alarms',
        '24/7 automated vigilance',
        'Cost-effective monitoring',
        'Immediate alerts'
      ]
    },
    {
      id: 16,
      category: 'technology',
      icon: <Eye size={24} />,
      title: 'Omega Prime',
      description: 'State-of-the-art visual alarm verification system surpassing all other readily available systems.',
      features: [
        'Visual verification',
        'Instant alerting',
        'Remote monitoring',
        'Superior detection'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Reduced false alarms',
        'Real-time verification',
        'Evidence recording',
        'Quick response'
      ]
    },
    {
      id: 17,
      category: 'technology',
      icon: <Thermometer size={24} />,
      title: 'Thermal Screening',
      description: 'Customized thermal screening solutions for retail, commercial and education sectors.',
      features: [
        'Temperature detection',
        'Customized solutions',
        'Non-contact screening',
        'Multi-sector applications'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Health safety',
        'Quick screening',
        'Non-invasive technology',
        'Access control'
      ]
    },
    {
      id: 18,
      category: 'technology',
      icon: <FileBadge size={24} />,
      title: 'AccessTrack',
      description: 'Integri-Register hand-held license scanning solution that collects visitor information.',
      features: [
        'License scanning',
        'Visitor management',
        'Data collection',
        'Access control'
      ],
      image: '/api/placeholder/600/400',
      benefits: [
        'Enhanced security',
        'Visitor tracking',
        'Easy implementation',
        'Cost-effective'
      ]
    },
  ];

  const technologySolutions = [
    {
      id: 'epod',
      title: 'Omega ePOD',
      icon: <Bell size={32} />,
      description: 'Emergency Personal Ops Device providing immediate help access.',
      fullDescription: 'The Omega ePOD is an Emergency Personal Ops Device – an affordable tailor-made panic system that provides you access to help when you need it most. Featuring GPS tracking, extended battery life, and direct connection to our command center.',
      features: [
        'Immediate emergency response',
        'GPS location tracking',
        'Extended battery life',
        'Waterproof design',
        'One-touch activation'
      ],
      image: '/api/placeholder/500/300'
    },
    {
      id: 'app',
      title: 'Omega App',
      icon: <Smartphone size={32} />,
      description: 'Mobile app with integrated panic button for instant help.',
      fullDescription: 'The Omega Security Mobile App includes a PANIC BUTTON on your phone, providing instant access to emergency services. The app utilizes GPS to pinpoint your location and sends immediate alerts to our command center and your emergency contacts.',
      features: [
        'One-touch panic button',
        'GPS location sharing',
        'Family member tracking',
        'Emergency contacts',
        'Activity log'
      ],
      image: '/api/placeholder/500/300'
    },
    {
      id: 'surveillance',
      title: 'Smart Surveillance',
      icon: <Camera size={32} />,
      description: 'AI-powered CCTV monitoring for property and asset protection.',
      fullDescription: 'Through advanced AI technology, Omega Smart Surveillance provides off-site CCTV monitoring specifically engineered for the remote protection of premises and assets. Our system detects suspicious activity and immediately alerts security personnel.',
      features: [
        'AI motion detection',
        'Off-site monitoring',
        'Real-time alerts',
        'Video recording',
        'Remote access'
      ],
      image: '/api/placeholder/500/300'
    },
    {
      id: 'prime',
      title: 'Omega Prime',
      icon: <ShieldIcon size={32} />,
      description: 'State-of-the-art visual alarm verification system.',
      fullDescription: 'Omega Primed is a state-of-the-art visual alarm verification system that surpasses all other readily available systems in its category. This system provides immediate visual verification of alarms, reducing false alarms and enabling quicker response times.',
      features: [
        'Visual verification',
        'Remote monitoring',
        'Quick deployment',
        'Integration capabilities',
        'Advanced detection'
      ],
      image: '/api/placeholder/500/300'
    },
    {
      id: 'thermal',
      title: 'Thermal Screening',
      icon: <Thermometer size={32} />,
      description: 'Customized thermal screening solutions for multiple sectors.',
      fullDescription: 'Omega Security Services provides customised thermal screening solutions for the retail, commercial and education sectors. These systems provide non-contact temperature measurement for health safety protocols.',
      features: [
        'Non-contact temperature measurement',
        'Quick screening',
        'Multiple person detection',
        'Alert system',
        'Data reporting'
      ],
      image: '/api/placeholder/500/300'
    },
    {
      id: 'accesstrack',
      title: 'AccessTrack',
      icon: <Key size={32} />,
      description: 'License scanning solution for visitor management.',
      fullDescription: 'AccessTrack Integri-Register is an easy-to-use and cost-effective hand-held license scanning solution that collects visitor information. This system enhances security by screening and logging all visitors entering your premises.',
      features: [
        'ID document scanning',
        'Visitor logging',
        'Watch list matching',
        'Data storage',
        'Reporting tools'
      ],
      image: '/api/placeholder/500/300'
    }
  ];

  const testimonials = [
    {
      quote: "Omega Protection Services has transformed our estate security. Their professional officers and advanced technology have given our residents true peace of mind.",
      author: "Sarah Moyo",
      position: "Estate Manager",
      company: "Highlands Executive Estate"
    },
    {
      quote: "The response time of their armed reaction teams is impressive. When we needed them most, they were there within minutes.",
      author: "James Mutambara",
      position: "Operations Director",
      company: "Premier Shopping Mall"
    },
    {
      quote: "Implementing Omega's Smart Surveillance system has reduced our security costs while improving our overall protection.",
      author: "Michael Chikwanha",
      position: "Security Manager",
      company: "Crown Manufacturing"
    }
  ];

  const faqs = [
    {
      question: "What areas do your armed response teams cover?",
      answer: "Our extensive fleet of armed response vehicles covers all major residential and commercial areas in Harare. We're continuously expanding our coverage to additional areas. Please contact us to check if your specific location is covered."
    },
    {
      question: "How are your security officers trained?",
      answer: "All our security officers undergo comprehensive training at our Omega Security Services Training Academy, which is fully accredited. Training includes induction training, specialized crime prevention programs specific to different environments, tactical training, and customer interaction skills."
    },
    {
      question: "Can I get a customized security solution for my business?",
      answer: "Absolutely. We specialize in providing tailor-made security solutions for businesses of all sizes. Our team will conduct a thorough risk assessment of your premises and design a security package that addresses your specific needs and concerns."
    },
    {
      question: "How does the Omega ePOD work?",
      answer: "The Omega ePOD is an Emergency Personal Ops Device that provides immediate access to help. With one-touch activation, it sends your GPS location to our command center, triggering an immediate response from our armed reaction teams."
    },
    {
      question: "What makes your estate security different from other providers?",
      answer: "Our dedicated Estate Division specializes exclusively in residential estate security. We select and train officers specifically for estate environments, implement estate-specific security protocols, and provide dedicated management teams focused solely on residential security needs."
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    
    // Scroll to details section
    const detailsSection = document.getElementById('service-details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTechnologySelect = (tech) => {
    if (activeTechnology === tech.id) {
      setActiveTechnology(null);
    } else {
      setActiveTechnology(tech.id);
      setShowTechDetails(true);
    }
  };

  const CategoryButton = ({ category }) => (
    <button
      onClick={() => setActiveCategory(category.id)}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
        activeCategory === category.id
        ? 'bg-yellow-600 text-white shadow-md'
        : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
      }`}
    >
      {category.name}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive security solutions combining manpower with cutting-edge technology for your protection and peace of mind." 
        image="/api/placeholder/1600/600"
      />
      
      {/* Floating Quick Nav - Visible on Scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-white shadow-md py-2 z-40 transition-transform duration-300 ${
          isScrolled ? 'translate-y-16' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-900 hidden md:block">Our Services</h3>
            <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 pb-1">
                {categories.map(category => (
                  <CategoryButton key={category.id} category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="mb-8 bg-white rounded-lg shadow-sm p-4 sticky top-16 z-30">
            <p className="text-sm text-gray-500 mb-2 font-medium">Filter By Category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <CategoryButton key={category.id} category={category} />
              ))}
            </div>
          </div>
          
          {/* Services Highlight */}
          <div className="mb-12">
            <SectionHeader 
              title="What We Offer" 
              subtitle="Comprehensive security solutions tailored to your specific needs" 
              centered={true}
            />
            
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <FeatureBox 
                icon={<Shield size={32} />}
                title="Armed Reaction"
                description="Rapid response teams available 24/7 for emergency situations."
              />
              <FeatureBox 
                icon={<Users size={32} />}
                title="Guarding Services"
                description="Professional security personnel for all types of premises."
              />
              <FeatureBox 
                icon={<Bell size={32} />}
                title="Specialty Services"
                description="Tailored solutions for unique security challenges."
              />
              <FeatureBox 
                icon={<Lock size={32} />}
                title="Advanced Technology"
                description="Cutting-edge security systems and monitoring solutions."
              />
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <div 
                  key={service.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="aspect-video relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <span className="text-xs font-medium px-2 py-1 bg-yellow-600 rounded-full uppercase">
                          {categories.find(c => c.id === service.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-yellow-100 rounded-md text-yellow-600 mr-3">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-lg">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    <button className="flex items-center text-yellow-600 font-medium hover:text-yellow-700">
                      Learn More
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Selected Service Details */}
          {selectedService && (
            <div id="service-details" className="mb-16 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative h-48 md:h-64 lg:h-80">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <span className="inline-flex items-center px-2.5 py-0.5 bg-yellow-600 rounded-full text-sm font-medium mb-2">
                      {categories.find(c => c.id === selectedService.category)?.name}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">{selectedService.title}</h2>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="md:flex gap-10">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-4">Service Overview</h3>
                    <p className="text-gray-700 mb-6">{selectedService.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center">
                          <Shield size={18} className="text-yellow-600 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center">
                          <Award size={18} className="text-yellow-600 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {selectedService.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="mt-2">
                      Request a Quote
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                  
                  <div className="md:w-1/3 mt-8 md:mt-0">
                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <h4 className="font-semibold mb-4">Contact Information</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Phone size={18} className="text-yellow-600 mr-3 mt-1" />
                          <div>
                            <p className="font-medium">Call Us</p>
                            <p className="text-gray-600">+263 772 754 460</p>
                            <p className="text-gray-600">+263 784 173 770</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Mail size={18} className="text-yellow-600 mr-3 mt-1" />
                          <div>
                            <p className="font-medium">Email Us</p>
                            <p className="text-gray-600">oprosec@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin size={18} className="text-yellow-600 mr-3 mt-1" />
                          <div>
                            <p className="font-medium">Visit Us</p>
                            <p className="text-gray-600">1123 Pearl Street</p>
                            <p className="text-gray-600">Mt Pleasant, Harare</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Technology Solutions Section */}
          <div className="mb-16">
            <SectionHeader 
              title="Advanced Security Technology" 
              subtitle="Explore our range of cutting-edge security technology solutions" 
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {technologySolutions.map(tech => (
                <div key={tech.id}>
                  <div 
                    className={`bg-white rounded-lg p-6 border shadow-sm cursor-pointer transition-all 
                    ${activeTechnology === tech.id ? 'border-yellow-600 shadow-md' : 'border-gray-100 hover:shadow-md'}`}
                    onClick={() => handleTechnologySelect(tech)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 rounded-md text-yellow-600 mr-3">
                          {tech.icon}
                        </div>
                        <h3 className="font-bold text-lg">{tech.title}</h3>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-500 transition-transform ${activeTechnology === tech.id ? 'transform rotate-180' : ''}`} 
                      />
                    </div>
                    <p className="text-gray-600 mb-2">{tech.description}</p>
                  </div>
                  
                  {/* Expanded details */}
                  {activeTechnology === tech.id && (
                    <div className="mt-2 bg-gray-50 rounded-lg p-6 border border-gray-200 animate-fadeIn">
                      <div className="md:flex gap-6">
                        <div className="md:w-1/3 mb-4 md:mb-0">
                          <img 
                            src={tech.image} 
                            alt={tech.title}
                            className="w-full h-auto rounded-lg object-cover"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <p className="text-gray-700 mb-4">{tech.fullDescription}</p>
                          <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
                          <ul className="space-y-2">
                            {tech.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="mt-4">
                            Request Information
                            <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="mb-16">
            <SectionHeader 
              title="What Our Clients Say" 
              subtitle="Hear from businesses and individuals who trust Omega Protection Services"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Testimonial 
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                />
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <SectionHeader 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about our security services"
              centered={true}
            />
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer">
                      <h3 className="font-medium text-lg">{faq.question}</h3>
                      <ChevronDown size={20} className="text-gray-500 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gray-900 rounded-lg p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Enhance Your Security?</h2>
              <p className="text-gray-300 mb-6">Contact us today to discuss how our comprehensive security solutions can protect what matters most to you.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">
                  Request a Quote
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800">
                  Contact Us
                  <Phone size={16} className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
              <Shield size={300} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info Footer */}
      <section className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-y-4">
            <div className="w-full md:w-1/3 px-4">
              <h4 className="font-bold text-lg mb-3">Head Office</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <MapPin size={18} className="text-yellow-600 mr-2 mt-1" />
                  <div>
                    <p>1123 Pearl Street</p>
                    <p>Mt Pleasant, Harare</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={18} className="text-yellow-600 mr-2 mt-1" />
                  <div>
                    <p>+263 772 754 460</p>
                    <p>+263 784 173 770</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={18} className="text-yellow-600 mr-2 mt-1" />
                  <p>oprosec@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <h4 className="font-bold text-lg mb-3">Our Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight size={16} className="text-yellow-600 mr-1" />
                  <span>Armed Reaction</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="text-yellow-600 mr-1" />
                  <span>Guarding Services</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="text-yellow-600 mr-1" />
                  <span>Specialty Services</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="text-yellow-600 mr-1" />
                  <span>Security Technology</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <h4 className="font-bold text-lg mb-3">Operating Hours</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Clock size={18} className="text-yellow-600 mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Armed Reaction & Command Centre</p>
                    <p>24 hours, 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={18} className="text-yellow-600 mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Administration Office</p>
                    <p>Monday - Friday: 8:00 - 17:00</p>
                    <p>Saturday: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Omega Protection Services. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;