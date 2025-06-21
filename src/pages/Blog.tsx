import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UrbanPlanningCarousel from "@/components/UrbanPlanningCarousel"; // Placeholder carousel, replace with blog carousel later
import { Button } from "@/components/ui/button";
import UrbanPlanningImg from "@/Assets/urban planning.jpg";

const blogTopics = [
  "All",
  "Sustainability",
  "Planning",
  "Urban Design",
  "3D Render",
  "Landscape Architecture",
  "Technology",
  "Climate",
];

const featuredArticle = {
  title: "The Future of Sustainable Urban Development",
  tag: "Sustainability",
  desc:
    "Exploring innovative approaches to creating cities that thrive while protecting our environment for future generations.",
  author: "Sarah Martinez",
  date: "December 15, 2024",
  readTime: "8 min read",
};

const latestArticles = [
  {
    title: "Community Engagement in Urban Planning: Best Practices",
    tag: "Planning",
    readTime: "6 min read",
    desc:
      "How to effectively involve communities in the planning process to create truly inclusive urban spaces.",
    author: "Dr. James Liu",
    date: "December 10, 2024",
  },
  {
    title: "Green Infrastructure: Nature-Based Solutions for Cities",
    tag: "Green Infrastructure",
    readTime: "7 min read",
    desc:
      "Integrating natural systems into urban design for climate resilience and improved quality of life.",
    author: "Maria Rodriguez",
    date: "December 5, 2024",
  },
  {
    title: "The Power of 3D Visualization in Planning",
    tag: "Technology",
    readTime: "5 min read",
    desc:
      "How advanced visualization tools are transforming the way we communicate planning concepts.",
    author: "Alex Chen",
    date: "November 28, 2024",
  },
  {
    title: "Walkable Cities: Designing for Human Scale",
    tag: "Urban Design",
    readTime: "6 min read",
    desc:
      "Creating urban environments that prioritize pedestrians and foster community connections.",
    author: "Dr. James Liu",
    date: "November 20, 2024",
  },
  {
    title: "Climate Adaptation in Urban Planning",
    tag: "Climate",
    readTime: "9 min read",
    desc:
      "Strategies for building resilient cities that can adapt to changing climate conditions.",
    author: "Sarah Martinez",
    date: "November 15, 2024",
  },
];

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = React.useState<string>("All");

  const filteredArticles = selectedTopic === "All"
    ? latestArticles
    : latestArticles.filter(
        (article) =>
          article.tag.toLowerCase() === selectedTopic.toLowerCase() ||
          (selectedTopic === "3D Render" && article.tag.toLowerCase().includes("3d")) ||
          (selectedTopic === "Landscape Architecture" && article.tag.toLowerCase().includes("landscape"))
      );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      {/* Hero Section with Carousel */}
      <section className="relative h-[38rem] flex items-center justify-center overflow-hidden pt-20 md:pt-0 px-2 sm:px-4 bg-white">
        <div className="absolute inset-0 z-10 pointer-events-none" style={{background: "linear-gradient(180deg, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)"}} />
        <UrbanPlanningCarousel heightClass="h-[38rem]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg mb-4">
            Insights & Thought Leadership
          </h1>
          <p className="font-inter text-xl md:text-2xl text-white text-center drop-shadow-md max-w-2xl">
            Stay informed about the latest trends, innovations, and best practices in urban planning and sustainable design.
          </p>
        </div>
      </section>
      {/* Featured Article */}
      <section className="py-8 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8">
          <div className="w-full flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-2xl p-4 md:p-8 gap-0 md:gap-0">
            <div className="flex-1 flex justify-center items-center min-h-[220px] max-h-[420px] overflow-hidden">
              <img src={UrbanPlanningImg} alt="Urban Planning" className="w-full h-full object-cover md:rounded-l-2xl" style={{maxHeight: '420px'}} />
            </div>
            <div className="flex-1 flex flex-col justify-center px-4 py-8 md:py-12 md:px-10">
              <div className="flex flex-row flex-wrap items-center gap-2 mb-3">
                <span className="inline-block border border-slm-green-200 text-slm-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="inline-block border border-slm-green-200 text-slm-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {featuredArticle.tag}
                </span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
                {featuredArticle.title}
              </h2>
              <p className="font-inter text-lg text-gray-700 mb-6">
                {featuredArticle.desc}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span>{featuredArticle.author}</span>
                <span className="hidden sm:inline">|</span>
                <span>{featuredArticle.date}</span>
                <span className="hidden sm:inline">|</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <Button asChild className="bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold px-6 py-2 w-fit">
                <a href="#">Read Full Article</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Articles */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-2 text-center">
            Latest Articles
          </h3>
          <p className="font-inter text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
            Expert insights and industry perspectives from our team of planning professionals.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {blogTopics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? "default" : "outline"}
                className={`border-slm-green-200 text-slm-green-700 hover:bg-slm-green-50 px-4 py-1 text-sm font-semibold rounded-full whitespace-nowrap ${selectedTopic === topic ? 'bg-slm-green-600 text-white' : ''}`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow flex flex-col h-full overflow-hidden">
                <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-gray-100">
                  {/* Placeholder image, replace with article.image when available */}
                  <img src={UrbanPlanningImg} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between p-5">
                  <div className="flex flex-row flex-wrap items-center gap-2 mb-2">
                    <span className="inline-block border border-slm-green-200 text-slm-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                  <h4 className="font-playfair text-xl md:text-2xl font-bold text-black mb-2">
                    {article.title}
                  </h4>
                  <p className="font-inter text-base text-gray-700 mb-3 flex-1">
                    {article.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                    <span>{article.author}</span>
                    <span className="hidden sm:inline">|</span>
                    <span>{article.date}</span>
                    <span className="hidden sm:inline">|</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button asChild variant="ghost" className="text-slm-green-700 font-semibold px-0 py-1 w-fit">
                    <a href="#">Read More</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="py-16 bg-slm-green-600">
        <div className="max-w-xl mx-auto px-4 text-center flex flex-col items-center">
          <h4 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h4>
          <p className="font-inter text-lg md:text-xl text-slm-green-100 mb-6 max-w-lg">Subscribe to our newsletter to receive the latest insights, project updates, and industry trends directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-slm-green-200 rounded-lg px-4 py-3 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-slm-green-400 text-base md:text-lg"
            />
            <Button type="submit" className="bg-white text-slm-green-600 hover:bg-slm-cream font-semibold px-8 py-3 text-base md:text-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
