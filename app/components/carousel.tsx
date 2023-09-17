import { useState } from "react";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mx-3 lg:mx-10 pb-6 rounded-box">
      <img
        key={currentIndex}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-[70vh] object-cover mb-3"
      />
      <button
        style={{ paddingBottom: '1px' }}
        onClick={handlePrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        &#10094;
      </button>
      <button
        style={{ paddingBottom: '1px' }}
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        &#10095;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 justify-center items-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-secondary" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
