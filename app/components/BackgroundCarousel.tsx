// BackgroundCarousel.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BackgroundCarouselProps {
  children?: React.ReactNode; // Add this prop
}

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({
  children,
}) => {
  const images = ["/c-1.png", "/c-1.png", "/c-1.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="relative w-full h-[400px] overflow-visible z-10">
      {/* Background Image */}
      <Image
        src={images[currentIndex]}
        alt={`Background image ${currentIndex + 1}`}
        fill
        style={{ objectFit: "contain" }}
        className="transition-opacity duration-1000 ease-in-out"
        priority={true}
      />
      {/* Dark Overlay for Text Readability - MAKE IT STRONGER */}
      {/* <div className="absolute inset-0 bg-black/80 opacity-80"></div>{" "} */}
      {/* Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {" "}
        {/* Increased z-index */}
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-amber-400 w-6"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
      {/* Content for the hero section - Now rendered using children */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-6">
        {" "}
        {children}
      </div>
    </div>
  );
};

export default BackgroundCarousel;
