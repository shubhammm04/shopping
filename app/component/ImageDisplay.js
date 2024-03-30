"use client"
import React, { useState } from 'react';

const ImageDisplay = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    
    <header className="flex justify-between items-center p-4">
      <h1 className="text-lg font-bold">Bestseller</h1>
      <div className="flex space-x-4">
        {/* Previous Arrow */}
        <button className="text-gray-500" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Next Arrow */}
        <button className="text-gray-500" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </header>
<div className="flex justify-center">

    <div className="flex items-center justify-center space-x-4">
      {/* Displaying the big image */}
      <div className="flex-1 bg-white p-4 shadow-md">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="max-w-full h-auto md:max-w-lg lg:max-w-xl sm:h-[50vh] md:h-[75vh] object-fill"
        />
      </div>
      {/* Displaying the two smaller images */}
      <div className="flex flex-col justify-between flex-1">
        
        <img
          src={images[(currentImageIndex + 1) % images.length]}
          alt={`Image ${(currentImageIndex + 1) % images.length + 1}`}
          className="max-w-full h-auto md:max-w-sm lg:max-w-md bg-white p-4 md:h-[40vh]"
        />
        <img
          src={images[(currentImageIndex + 2) % images.length]}
          alt={`Image ${(currentImageIndex + 2) % images.length + 1}`}
          className="max-w-full h-auto md:max-w-sm lg:max-w-md bg-white p-4 md:h-[40vh]"
        />
      </div>

    </div>
    </div>

    </>

  );
};

export default ImageDisplay;
