import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";

// Lazy load components for better performance
const Index = React.lazy(() => import('./pages/Index'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const UrbanPlanning = React.lazy(() => import('./pages/UrbanPlanning'));
const UrbanDesign = React.lazy(() => import('./pages/UrbanDesign'));
const LandscapeArchitecture = React.lazy(() => import('./pages/LandscapeArchitecture'));
const ThreeDRendering = React.lazy(() => import('./pages/ThreeDRendering'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogArticle = React.lazy(() => import('./pages/BlogArticle'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Quote = React.lazy(() => import('./pages/Quote'));
const Process = React.lazy(() => import('./pages/Process'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-transparent">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-slm-green-300 border-t-slm-green-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slm-green-700 font-inter text-lg opacity-70">Loading...</p>
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical images
    const preloadCriticalImages = async () => {
      const criticalImages = [
        '/Assets/slm-logo.png',
        '/Assets/Landscape Architecture.webp',
        '/Assets/Urban design.webp',
        '/Assets/urban planning.webp',
        '/Assets/3D render.webp'
      ];

      const imagePromises = criticalImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => resolve(src);
          img.src = src;
        });
      });

      await Promise.all(imagePromises);
      setIsLoading(false);
    };

    preloadCriticalImages();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/urban-planning" element={<UrbanPlanning />} />
              <Route path="/services/urban-design" element={<UrbanDesign />} />
              <Route path="/services/landscape-architecture" element={<LandscapeArchitecture />} />
              <Route path="/services/3d-rendering" element={<ThreeDRendering />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/process" element={<Process />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
