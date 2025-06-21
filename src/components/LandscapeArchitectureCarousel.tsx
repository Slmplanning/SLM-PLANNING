import React, { useState, useEffect } from "react";
import ParkOpenSpaceImg from "@/Assets/Landscape Architecture.jpg";
import EcologicalRestorationImg from "@/Assets/Landscape Architecture (1).jpg";
import GreenInfrastructureImg from "@/Assets/Landscape Architecture (2).jpg";

const images = [
  ParkOpenSpaceImg,
  EcologicalRestorationImg,
  GreenInfrastructureImg,
];

const LandscapeArchitectureCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full select-none pt-20 md:pt-0">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
        >
          <img
            src={img}
            alt="Landscape Architecture"
            className="w-full h-full object-cover object-center transition-transform duration-1000 scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center w-full px-2 sm:px-4 pointer-events-none">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-[#fff] mb-2 animate-fade-in-up">
              Landscape Architecture
            </h2>
            <p className="font-inter text-base sm:text-lg md:text-xl text-[#fff] max-w-2xl mx-auto animate-fade-in-up delay-150">
              Designing Ecological Landscapes That Heal, Connect, and Inspire
            </p>
          </div>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-10" />
        </div>
      ))}
      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-white/90 scale-110' : 'bg-white/40'}`}
          />
        ))}
      </div>
      {/* CRO Description: Why Visualization Matters */}
      <div className="w-full flex justify-center items-center mt-8 px-4 md:px-0">
        <div className="bg-white/90 rounded-xl shadow-lg p-4 md:p-6 max-w-2xl w-full text-center">
          <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">Why Visualization Matters</h3>
          <p className="font-inter text-sm sm:text-base md:text-lg text-gray-700">
            Visualization bridges the gap between concept and reality, helping clients and stakeholders clearly understand design intent. High-quality visuals inspire confidence, accelerate decision-making, and drive engagement—ensuring your vision is communicated with maximum impact across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandscapeArchitectureCarousel;
