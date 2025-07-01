import React, { useEffect, useState } from "react";

interface UrbanPlanningCarouselProps {
  heightClass?: string;
}

const images = [
  {
    src: "/Assets/urban planning.webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/Assets/urban planning (2).webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/Assets/urban planning (3).webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/Assets/urban planning (4).webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  },
  {
    src: "/Assets/urban planning (5).webp",
    title: "Urban Planning",
    desc: "Strategic planning solutions that shape sustainable, livable communities for current and future generations."
  }
];

const UrbanPlanningCarousel: React.FC<UrbanPlanningCarouselProps> = ({ heightClass = "h-[38rem]" }) => {
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((img) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.onload = () => resolve(img.src);
          image.onerror = () => resolve(img.src);
          image.src = img.src;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500); // Faster transitions
    return () => clearInterval(interval);
  }, [imagesLoaded, images.length]);

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-transparent">
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-slm-green-300 border-t-slm-green-600 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${heightClass} flex items-center justify-center`}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.title}
          className={`absolute w-full h-full object-cover transition-all duration-300 ease-in-out ${
            idx === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
          style={{ willChange: "opacity, transform" }}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/60 z-20" />
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4">
        <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">{images[current].title}</h2>
        <p className="text-white text-lg md:text-2xl font-medium drop-shadow-lg max-w-2xl mx-auto">{images[current].desc}</p>
      </div>
      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current 
                ? "bg-white shadow-lg scale-110" 
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UrbanPlanningCarousel;
