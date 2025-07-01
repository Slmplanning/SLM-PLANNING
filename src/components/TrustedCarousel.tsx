import React from "react";

const trustedImages = [
  "/Trusted org assets/amref.png",
  "/Trusted org assets/ukaid.png",
  "/Trusted org assets/Un habitat.png",
  "/Trusted org assets/Un nation.jpg",
  "/Trusted org assets/WFP.png",
];

const TrustedCarousel = () => {
  return (
    <div className="w-screen h-40 bg-white">
      <div className="overflow-hidden relative w-screen h-40">
        <div className="flex animate-scroll-x whitespace-nowrap items-center h-full w-full">
          {trustedImages.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center h-full w-40"
            >
              <img
                src={img}
                alt="Trusted Organization Logo"
                className="h-full w-auto object-contain transition duration-300 m-0 p-0 border-none rounded-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrustedCarousel;
