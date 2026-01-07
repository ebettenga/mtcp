import { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  text: string;
  name: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  interval?: number;
  className?: string;
}

export default function TestimonialsSection({
  testimonials,
  interval = 5000,
  className = '',
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const nextTestimonial = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsVisible(true);
    }, 300); // Half of transition duration for smooth fade
  }, [testimonials.length]);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(nextTestimonial, interval);
    return () => clearInterval(timer);
  }, [interval, nextTestimonial, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`bg-white py-12 md:py-16 ${className}`}>
      <div className="max-w-page mx-auto w-full px-6">
        <h2 className="mb-12 text-center font-albert text-2xl font-semibold text-black md:text-3xl">
          What People Say
        </h2>
        <div className="mx-auto max-w-3xl flex flex-col items-center">
          <div
            className={`transition-opacity duration-600 w-full ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <blockquote className="text-center">
              <p className="mb-6 font-open text-lg leading-7 text-gray-700 md:text-xl">
                "{currentTestimonial.text}"
              </p>
              <footer className="font-albert text-base font-semibold text-primary-500 text-center">
                — {currentTestimonial.name}
              </footer>
            </blockquote>
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsVisible(true);
                  }, 300);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
