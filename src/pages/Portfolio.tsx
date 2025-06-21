import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      title: "Riverside Green District",
      category: "Urban Design",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A 50-acre mixed-use development integrating sustainable housing, commercial spaces, and green infrastructure.",
      client: "Metropolitan Development Authority",
      year: "2023",
      tags: ["Mixed-Use", "Sustainable", "Waterfront"]
    },
    {
      title: "Heritage Square Revitalization",
      category: "Urban Planning",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive planning strategy to revitalize a historic downtown district while preserving cultural heritage.",
      client: "City Planning Commission",
      year: "2023",
      tags: ["Historic", "Downtown", "Cultural"]
    },
    {
      title: "EcoCity Visualization",
      category: "3D Rendering",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Photorealistic visualizations for a proposed sustainable city development in Southeast Asia.",
      client: "Green Development International",
      year: "2023",
      tags: ["Futuristic", "Sustainable", "International"]
    },
    {
      title: "Central Park Restoration",
      category: "Landscape Architecture",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ecological restoration and redesign of a 200-acre urban park with native plantings and wetland systems.",
      client: "Parks & Recreation Department",
      year: "2022",
      tags: ["Restoration", "Wetlands", "Recreation"]
    },
    {
      title: "Smart Transit Hub",
      category: "Urban Design",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Multi-modal transportation center design incorporating smart technology and sustainable features.",
      client: "Regional Transit Authority",
      year: "2022",
      tags: ["Transit", "Smart City", "Technology"]
    },
    {
      title: "Coastal Resilience Plan",
      category: "Urban Planning",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive climate adaptation strategy for coastal communities facing sea-level rise.",
      client: "Coastal Protection Alliance",
      year: "2022",
      tags: ["Climate", "Resilience", "Coastal"]
    }
  ];

  const categories = ["All", "Urban Design", "Urban Planning", "3D Rendering", "Landscape Architecture"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
        <HeroCarousel heightClass="h-[38rem]" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Transforming Visions into Reality
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            Explore our portfolio of innovative urban development projects
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

      {/* Filter Navigation */}
      <section className="py-12 bg-slm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-slm-green-600 text-white shadow-lg"
                    : "bg-white text-slm-green-600 hover:bg-slm-green-50 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div 
                    className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slm-green-600 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-slm-green-700">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-inter text-slm-brown-600 font-medium">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-slm-green-300 text-slm-green-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-slm-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slm-green-800 mb-12">
            Our Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-slm-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">200+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Projects Completed</h3>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-slm-brown-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">50M+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Sq Ft Planned</h3>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-slm-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">25+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Countries Served</h3>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-slm-brown-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">95%</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-slm-green-700">Client Satisfaction</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
