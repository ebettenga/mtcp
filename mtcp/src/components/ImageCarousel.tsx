import { useState, useEffect, useCallback } from 'react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function ImageCarousel({ images, interval = 5000, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused || images.length === 0) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPaused, interval, nextSlide, images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className={`flex relative w-full flex-col overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex relative w-full h-[400px] md:h-[600px] flex-col">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex absolute bottom-4 left-1/2 -translate-x-1/2 items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex h-2 w-2 rounded-full transition-all items-center justify-center ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
