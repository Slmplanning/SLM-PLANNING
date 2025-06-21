import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import urbanPlanningImg from "@/Assets/urban planning.jpg";
import UrbanDesignImg from "@/Assets/Urban design.jpg";
import LandscapeArchitectureImg from "@/Assets/Landscape Architecture.jpg";
import RenderingImg from "@/Assets/3D render.jpg";
import UrbanPlanningTeamImg from "@/Assets/urban planning (2).jpg";
import UrbanPlanningBenefitsImg from "@/Assets/urban planning (3).jpg";
import React, { useRef, useEffect, useState } from "react";

function useInView(ref, rootMargin = "-100px") {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return isIntersecting;
}

const processSteps = [
  {
    number: 1,
    title: "Discovery & Analysis",
    desc: "We begin by understanding your vision, analyzing the site, and engaging with stakeholders."
  },
  {
    number: 2,
    title: "Design & Planning",
    desc: "Our team creates innovative solutions that balance function, beauty, and sustainability."
  },
  {
    number: 3,
    title: "Implementation & Support",
    desc: "We guide you through implementation and provide ongoing support for project success."
  }
];

const Services = () => {
  const services = [
    {
      title: "Urban Design",
      icon: "🏙️",
      description: "Creating vibrant, functional, and sustainable urban environments that enhance quality of life for all residents.",
      features: [
        "Mixed-use development planning",
        "Public space design",
        "Transit-oriented development",
        "Historic district revitalization",
        "Zoning and land use optimization"
      ],
      deliverables: [
        "Comprehensive design guidelines",
        "3D visualizations and renderings",
        "Master plan documentation",
        "Community engagement reports"
      ]
    },
    {
      title: "Urban Planning",
      icon: "📊",
      description: "Strategic planning solutions that balance economic growth with environmental sustainability and community needs.",
      features: [
        "Comprehensive planning",
        "Strategic development frameworks",
        "Economic impact analysis",
        "Transportation planning",
        "Environmental impact assessments"
      ],
      deliverables: [
        "Master plans and strategic frameworks",
        "Policy recommendations",
        "Implementation timelines",
        "Stakeholder engagement summaries"
      ]
    },
    {
      title: "3D Rendering",
      icon: "🎨",
      description: "Cutting-edge visualization services that bring your vision to life with photorealistic accuracy and detail.",
      features: [
        "Architectural visualization",
        "Urban landscape rendering",
        "Virtual reality experiences",
        "Animation and walkthroughs",
        "Interactive 3D models"
      ],
      deliverables: [
        "High-resolution renderings",
        "360-degree panoramic views",
        "Interactive presentations",
        "Virtual tour experiences"
      ]
    },
    {
      title: "Landscape Architecture",
      icon: "🌿",
      description: "Harmonizing natural environments with built spaces to create sustainable, beautiful, and functional landscapes.",
      features: [
        "Ecological restoration",
        "Green infrastructure design",
        "Park and recreation planning",
        "Sustainable water management",
        "Native plant integration"
      ],
      deliverables: [
        "Landscape master plans",
        "Plant selection guides",
        "Maintenance protocols",
        "Environmental impact reports"
      ]
    }
  ];

  const serviceCards = [
    {
      title: "Urban Planning",
      description: "Comprehensive planning solutions for sustainable urban development and community growth.",
      features: [
        "Master Planning & Zoning",
        "Land Use Planning",
        "Transportation Planning",
        "Policy Development",
        "Community Engagement"
      ],
      image: urbanPlanningImg
    },
    {
      title: "Urban Design",
      description: "Creating functional, beautiful public spaces that strengthen community connections.",
      features: [
        "Public Space Design",
        "Streetscape Design",
        "Mixed-Use Development",
        "Accessibility Planning",
        "Wayfinding Systems"
      ],
      image: UrbanDesignImg
    },
    {
      title: "Landscape Architecture",
      description: "Integrating natural elements into urban environments for sustainable, resilient cities.",
      features: [
        "Green Infrastructure",
        "Park & Recreation Design",
        "Stormwater Management",
        "Native Plant Design",
        "Urban Forestry"
      ],
      image: LandscapeArchitectureImg
    },
    {
      title: "3D Rendering",
      description: "Bringing your vision to life with photorealistic visualizations and immersive experiences.",
      features: [
        "Architectural Visualization",
        "Virtual Reality Tours",
        "Interactive 3D Models",
        "Design Presentations",
        "Marketing Materials"
      ],
      image: RenderingImg
    }
  ];

  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const serviceOptions = [
    "Urban Planning",
    "Urban Design",
    "Landscape Architecture",
    "3D Rendering"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
        <HeroCarousel heightClass="h-[38rem]" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Our Services
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            Comprehensive planning and design solutions that transform communities and create sustainable urban environments for the future.
          </p>
        </div>
        {/* Animated Scroll Indicator */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
          style={{ bottom: '36px' }}
          aria-label="Scroll down"
        >
          <div
            className="scroll-mouse group w-8 h-14 md:w-9 md:h-16 border-2 border-white rounded-full flex items-start justify-center relative transition-transform duration-200 hover:scale-110"
            tabIndex={0}
            role="img"
            aria-label="Scroll down"
          >
            <span
              className="block bg-white rounded-full absolute left-1/2 -translate-x-1/2"
              style={{ width: '6px', height: '12px', top: '8px', animation: 'scroll-dot 1.4s cubic-bezier(0.45,0,0.55,1) infinite' }}
            />
          </div>
        </div>
        <style>{`
          @keyframes scroll-dot {
            0% { transform: translate(-50%, 0); opacity: 1; }
            40% { opacity: 1; }
            60% { transform: translate(-50%, 18px); opacity: 0.7; }
            100% { transform: translate(-50%, 0); opacity: 1; }
          }
          .scroll-mouse {
            background: rgba(255,255,255,0.04);
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
            outline: none;
          }
          .scroll-mouse:focus {
            box-shadow: 0 0 0 3px #fff6, 0 2px 8px 0 rgba(0,0,0,0.08);
          }
        `}</style>
      </section>

      {/* Responsive Service Cards Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {serviceCards.map((service, idx) => (
              <div key={idx} className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="p-6 flex flex-col h-full">
                  <h3 className="font-playfair text-2xl font-bold text-slm-green-700 mb-2">{service.title}</h3>
                  <p className="font-inter text-gray-700 mb-4">{service.description}</p>
                  <div className="mb-3">
                    <h4 className="font-playfair text-lg font-semibold text-slm-brown-600 mb-1">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 font-inter text-base space-y-1">
                      {service.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                  <Link
                    to={service.title === "Urban Planning" ? "/services/urban-planning" : `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-auto bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold rounded-lg px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slm-green-400 focus:ring-offset-2 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20" style={{ background: '#FCEFEF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-4">How We Work</h2>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto">
              Our collaborative approach ensures every project meets your unique needs while exceeding sustainability and design standards.
            </p>
          </div>
          <AnimatedProcessFlow />
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-8 py-3">
              <Link to="/process">View Our Complete Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slm-green-800 mb-4">Ready to Get Started?</h2>
          <p className="font-inter text-lg text-gray-700 mb-8">Let's discuss how our services can help bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-8 py-3 w-full sm:w-auto">
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slm-green-600 text-slm-green-700 font-semibold px-8 py-3 w-full sm:w-auto">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

function AnimatedProcessFlow() {
  const containerRef = useRef(null);
  // Always animate arrows when in view, even if user is already on the page
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (!triggered && containerRef.current) {
      setTriggered(true);
    }
  }, [triggered]);
  return (
    <div ref={containerRef} className="relative flex flex-col md:flex-row justify-center items-stretch gap-8 w-full">
      {processSteps.map((step, idx) => (
        <React.Fragment key={step.number}>
          <div
            className={`flex-1 bg-white rounded-2xl shadow p-8 flex flex-col items-center transition-all duration-500 ease-out
              animate-process-step animate-delay-${idx}
              hover:scale-105 hover:shadow-2xl`}
            style={{ zIndex: 2 }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slm-green-600 text-white text-2xl font-bold mb-4">{step.number}</div>
            <h3 className="font-playfair text-xl font-semibold text-slm-green-700 mb-2">{step.title}</h3>
            <p className="font-inter text-gray-600 text-center">{step.desc}</p>
          </div>
          {idx < processSteps.length - 1 && (
            <div className="hidden md:flex items-center justify-center" style={{ zIndex: 1 }}>
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`animate-draw-arrow animate-delay-arrow-${idx} w-16 h-6 ${triggered ? 'animate' : ''}`}>
                <path d="M4 12h48m0 0l-6-6m6 6l-6 6" stroke="#3B6B3B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
      <style>{`
        .animate-process-step {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .animate-delay-0 { transition-delay: 0.1s; }
        .animate-delay-1 { transition-delay: 0.3s; }
        .animate-delay-2 { transition-delay: 0.5s; }
        .animate-draw-arrow {
          stroke-dasharray: 80;
          stroke-dashoffset: 80;
          animation: draw-arrow 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .animate-delay-arrow-0 { animation-delay: 0.3s; }
        .animate-delay-arrow-1 { animation-delay: 0.5s; }
        @keyframes draw-arrow {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

export default Services;
