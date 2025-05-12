import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
    Camera,
    X,
    UserPlus,
  Check, 
  TrendingUp,
  ChevronRight,
  Map,
  Calendar,
  Target,
  ArrowRight,
  Star,
  PenTool,
  Heart,
  Bookmark,
  Briefcase
} from 'lucide-react';

// Header component with animation
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative h-72 md:h-96 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-yellow-600 opacity-20"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"
          style={{
            background: "linear-gradient(130deg, rgba(18,24,38,0.95) 40%, rgba(18,24,38,0.7) 70%, rgba(18,24,38,0.4) 100%)"
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('/about.png')] bg-cover bg-center opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-yellow-500">Omega</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Excellence in security solutions, combining professional manpower with cutting-edge technology to protect what matters most.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-gray-50">
          <path d="M0,64L80,69.3C160,75,320,85,480,85.3C640,85,800,75,960,69.3C1120,64,1280,64,1360,64L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

// Company story component
const CompanyStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('company-story');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <section id="company-story" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/team.jpeg" 
                  alt="Omega Security Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-4 rounded-lg shadow-lg hidden md:flex items-center gap-3">
                <Shield size={24} className="text-white" />
                <p className="text-white font-bold">Est. 2024</p>
              </div>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h6 className="text-yellow-600 font-semibold mb-2">OUR STORY</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Precision and Vigilance, Your Shield</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Omega Protection Services is a Zimbabwean African company dedicated to the provision of excellent security services. We are capable of dealing with all your security needs and offer a complete range of planning, system analysis, design, and executive services.
              </p>
              <p>
                The company was established in 2024 by a Zimbabwean Former Senior CID Officer with extensive operational experience and specialized expertise in counter-terrorism, anti-guerrilla warfare, special operations, and VIP protection.
              </p>
              <p>
                All of our senior management has either military or police experience, and this knowledge is passed onto our personnel who continuously acquire the professional skills required to perform their tasks while striving to perfect their personal and collective achievements.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                Our Services <ChevronRight size={18} />
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 flex items-center gap-2 transition-colors">
                Contact Us <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Core values component
const CoreValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('core-values');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);
  
  const values = [
    {
      icon: <Award size={32} />,
      title: "Quality",
      description: "We believe in excellence and high-performing services. We are always on an advanced outlook in embracing desirable values and constructive change which leads to satisfied customers. Our relationship with quality is non-negotiable."
    },
    {
      icon: <Heart size={32} />,
      title: "Dignity and Integrity",
      description: "We value everyone and treat people with dignity and professionalism. We are guided by truth, honesty and honor in everything we do. We build trust through responsible actions and honest relationships."
    },
    {
      icon: <Target size={32} />,
      title: "Dedication and Agility",
      description: "We take pride in our attentive, proactive and diligent guards. We secure contract compliance at all times and are highly committed towards achieving our goals. We are always prepared to deal with anticipated and unforeseen challenges."
    },
    {
      icon: <Bookmark size={32} />,
      title: "Training and Development",
      description: "We believe in constantly training our guards and employees to always stay updated and produce best outcomes. Our insatiable desire to learn, develop and continually grow is unbeatable."
    }
  ];
  
  return (
    <section id="core-values" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-yellow-600 font-semibold mb-2">OUR CORE VALUES</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">The Principles That Guide Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Omega Protection Services, our values form the foundation of everything we do. They shape our culture, guide our decisions, and ensure we deliver the highest level of service to our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="p-3 bg-yellow-100 rounded-md text-yellow-600 w-fit mb-4">
                {value.icon}
              </div>
              <h3 className="font-bold text-xl mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline component
const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState({});
  
  useEffect(() => {
    const observers = {};
    
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach((milestone, index) => {
      observers[index] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => ({ ...prev, [index]: true }));
            observers[index].disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observers[index].observe(milestone);
    });
    
    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);
  
  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description: "Omega Protection Services established by a former senior CID official with extensive security experience."
    },
    {
      year: "2024",
      title: "Training Academy",
      description: "Launched our accredited Training Academy to ensure the highest standards for our security personnel."
    },
    {
      year: "2024",
      title: "Technology Integration",
      description: "Introduced innovative security technology solutions including the Omega ePOD and mobile app."
    },
    {
      year: "2025",
      title: "Market Expansion",
      description: "Projected expansion into additional service areas throughout Zimbabwe."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1600/900')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h6 className="text-yellow-500 font-semibold mb-2">OUR JOURNEY</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Omega Story</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From our founding to the present day, we've been committed to excellence in security services.
          </p>
        </div>
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-yellow-600 opacity-70"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`milestone relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} transition-all duration-1000 ${visibleItems[index] ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-yellow-600 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <span className="inline-block text-yellow-500 font-bold text-xl mb-2">{milestone.year}</span>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Empty space for offset */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Team section
const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('team-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);
  
  const teamMembers = [
    {
      name: "Michael Chikwanha",
      position: "Chief Executive Officer",
      bio: "Former senior CID official with extensive experience in counterterrorism and special operations. Leads Omega with strategic vision and deep security expertise.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Sarah Moyo",
      position: "Operations Director",
      bio: "Military background with over 15 years of experience in security operations and management. Oversees all operational aspects of Omega's services.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "James Mutambara",
      position: "Training Academy Director",
      bio: "Former police tactical instructor specializing in security training and development. Leads our accredited Training Academy ensuring highest standards.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Grace Nyathi",
      position: "Technology Solutions Head",
      bio: "IT security specialist with expertise in implementing advanced security systems and technology integration for comprehensive protection.",
      image: "/api/placeholder/400/400"
    }
  ];
  
  return (
    <section id="team-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-yellow-600 font-semibold mb-2">OUR LEADERSHIP</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience in security, law enforcement, and military operations to provide unmatched expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`group cursor-pointer transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg mx-auto mb-4 flex items-center gap-2">
                    View Profile <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-yellow-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Member Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMember(null)}>
            <div className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="relative h-64">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-gray-900/50 hover:bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center"
                  onClick={() => setSelectedMember(null)}
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{selectedMember.name}</h3>
                <p className="text-yellow-600 mb-4">{selectedMember.position}</p>
                <p className="text-gray-600 mb-6">{selectedMember.bio}</p>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                    <span className="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Training center section
const TrainingCenter = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('training-center');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);
  
  const trainingPrograms = [
    {
      icon: <Users size={20} />,
      title: "Induction Training"
    },
    {
      icon: <Award size={20} />,
      title: "Omega Accredited Skills"
    },
    {
      icon: <Shield size={20} />,
      title: "Specialized Crime Prevention"
    },
    {
      icon: <PenTool size={20} />,
      title: "Computer Literacy"
    },
    {
      icon: <Camera size={20} />,
      title: "CCTV Operator Skills"
    },
    {
      icon: <Target size={20} />,
      title: "Tactical Unit Training"
    }
  ];
  
  return (
    <section id="training-center" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h6 className="text-yellow-600 font-semibold mb-2">EXCELLENCE THROUGH TRAINING</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Training Academy</h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                The Omega Security Services Training Academy is Accredited and managed by fully accredited instructors who train and certify new security guards. A structured continuous learning programme is in place for our existing guarding complement.
              </p>
              <p>
                At Omega Security Services, we pride ourselves in creating a culture of learning within our organisation. Year on year, we aid the community by enrolling young adults into our learnership program to equip and empower them.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="p-2 bg-yellow-100 rounded-md text-yellow-600">
                    {program.icon}
                  </div>
                  <span className="font-medium text-gray-800">{program.title}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/fam1.jpeg" 
                  alt="Training in progress" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="/fam2.jpeg" 
                  alt="Training facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/fam3.jpeg" 
                  alt="Tactical training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
                <img 
                  src="/fam4.jpeg" 
                  alt="Academy graduates" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Call-to-action component
const CallToAction = () => (
  <section className="py-16 bg-yellow-600">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-white lg:max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Security?</h2>
          <p className="text-yellow-100 text-lg">
            Contact Omega Protection Services today for a comprehensive security assessment and tailored solutions to protect what matters most to you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white hover:bg-gray-100 text-yellow-600 font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
            Contact Us <ArrowRight size={18} />
          </button>
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
            Our Services <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Main About component
const About = () => {
  return (
    <div>
      <Header />
      <CompanyStory />
      <CoreValues />
      <Timeline />
      <TeamSection />
      <TrainingCenter />
      <CallToAction />
    </div>
  );
};

export default About;