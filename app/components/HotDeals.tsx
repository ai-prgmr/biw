// components/ProductCarousel.js
"use client"; // This directive is necessary for client-side interactivity

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/lib/productData"; // Adjust the import path as necessary
// ProductCarousel component displays a rotating carousel of product cards.
// It takes an array of 'products' as a prop.
const ProductCarousel = ({ products }: { products: ProductType[] }) => {
  // State to keep track of the current active slide index.
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to determine how many cards are visible at once, based on screen size.
  const [cardsPerPage, setCardsPerPage] = useState(3); // Default for larger screens

  // Effect to update cardsPerPage based on window width for responsiveness.
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        // Mobile screens (sm breakpoint)
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        // Tablet screens (lg breakpoint)
        setCardsPerPage(2);
      } else {
        // Desktop screens
        setCardsPerPage(3);
      }
    };

    // Set initial value
    updateCardsPerPage();
    // Add event listener for window resize
    window.addEventListener("resize", updateCardsPerPage);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Effect for automatic carousel progression.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + cardsPerPage) % products.length
      );
    }, 5000); // Change slides every 5 seconds

    // Clear the interval when the component unmounts or dependencies change.
    return () => clearInterval(interval);
  }, [products.length, cardsPerPage]); // Re-run effect if products or cardsPerPage change

  // Function to move to the previous set of cards.
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - cardsPerPage;
      // Loop back to the end if we go below 0
      return newIndex < 0
        ? products.length - (products.length % cardsPerPage || cardsPerPage)
        : newIndex;
    });
  };

  // Function to move to the next set of cards.
  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + cardsPerPage) % products.length
    );
  };

  // Calculate the subset of products to display based on currentIndex and cardsPerPage.
  const displayedProducts = products.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );
  // If we reach the end and don't have enough products for the last slide,
  // wrap around and take products from the beginning.
  if (displayedProducts.length < cardsPerPage && products.length > 0) {
    displayedProducts.push(
      ...products.slice(0, cardsPerPage - displayedProducts.length)
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* Carousel container */}
      <div className="flex overflow-hidden relative rounded-xl shadow-xl border border-gray-200">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white p-3 rounded-full z-10 hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-2"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white p-3 rounded-full z-10 hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-2"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        {/* Product Cards Container */}
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex % products.length) * (100 / cardsPerPage)
            }%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 p-4"
              style={{ width: `${100 / cardsPerPage}%` }}
            >
              <Link
                href={`/${product.slug}/${product.slug}`}
                className="block h-full"
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col border border-gray-100 hover:border-indigo-300">
                  <div className="relative w-full h-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-indigo-500 text-white font-bold py-2 px-4 rounded-full text-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
