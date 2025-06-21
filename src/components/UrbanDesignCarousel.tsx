import React from "react";

// This carousel will only use images labeled 'urban design' in the Assets folder
// Replace the image imports below with actual urban design images as needed
import UrbanDesign1 from "@/Assets/Urban design.jpg";
import UrbanDesign2 from "@/Assets/Urban design (1).jpg";
import UrbanDesign3 from "@/Assets/Urban design (2).jpg";
import UrbanDesign4 from "@/Assets/urban design (3).jpg";

const images = [UrbanDesign1, UrbanDesign2, UrbanDesign3, UrbanDesign4];

const UrbanDesignCarousel = ({ heightClass = "h-[38rem]" }) => {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`relative w-full ${heightClass} flex items-center justify-center pt-20 md:pt-0`}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Urban Design ${idx + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          style={{ borderRadius: "0 0 2.5rem 2.5rem" }}
        />
      ))}
      {/* Responsive text overlay */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center w-full px-2 sm:px-4 pointer-events-none">
        <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2 animate-fade-in-up">
          Urban Design
        </h2>
        <p className="font-inter text-base sm:text-lg md:text-xl text-white drop-shadow-md max-w-2xl mx-auto animate-fade-in-up delay-150">
          Crafting Human-Centered Urban Spaces That Inspire, Connect, and Thrive.
        </p>
      </div>
      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/40"} transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default UrbanDesignCarousel;
