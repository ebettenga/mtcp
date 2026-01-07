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
    }, 300);
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
    <section
      className={className}
      style={{ padding: '64px 32px', textAlign: 'center', backgroundColor: '#fff5f2' }}
    >
      <h2
        className="font-albert text-2xl font-semibold md:text-3xl"
        style={{ marginBottom: '48px', color: '#1f2937' }}
      >
        What People Say
      </h2>
      <div
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ marginBottom: '32px' }}
      >
        <p
          className="font-open text-lg leading-7 text-gray-700 md:text-xl"
          style={{ marginBottom: '24px' }}
        >
          "{currentTestimonial.text}"
        </p>
        <footer className="font-albert text-base font-semibold text-primary-500">
          — {currentTestimonial.name}
        </footer>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
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
            style={{
              width: index === currentIndex ? '32px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              backgroundColor: index === currentIndex ? '#57944f' : '#d1d5db',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
