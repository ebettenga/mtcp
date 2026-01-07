import Section from '../components/Section';
import ImageCarousel from '../components/ImageCarousel';
import SponsorsBanner from '../components/SponsorsBanner';
import SocialMediaLinks from '../components/SocialMediaLinks';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  // Example images for carousel - replace with actual images
  const carouselImages = [
    'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=600&fit=crop',
  ];

  // Example testimonials - replace with actual testimonials
  const testimonials = [
    {
      text: 'Clay courts are perfect for learning tennis - the slower surface gives kids more time to react and build confidence.',
      name: 'Youth Program Director',
    },
    {
      text: 'Having public clay courts means my kids can experience the same quality tennis surface they\'d only find at expensive private clubs.',
      name: 'Community Member',
    },
    {
      text: 'The Waveland courts have been amazing. I\'m so excited to see these same courts come to south Minneapolis.',
      name: 'Tennis Player',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-[76px] md:pt-[100px]">
        {/* Hero Carousel */}
        <ImageCarousel images={carouselImages} />

        {/* Mission Section */}
        <Section
          title="Bringing Public Clay Tennis Courts to South Minneapolis"
          text="Two new clay tennis courts coming to Minnehaha Parkway Regional Trail in 2026. These courts will replace the previous unplayable asphalt courts and provide a unique public amenity for the south Minneapolis community."
          imagePosition="right"
        />

        {/* Why Clay Courts Section */}
        <Section
          title="Why Clay Courts?"
          text="Clay courts create a slower game with greater reaction times, making them ideal for youth learning tennis. Clay courts are usually only found at private clubs, making them inaccessible to most people. These courts will be free and open to the community."
          imagePosition="left"
        />

        {/* Community Impact Section */}
        <Section
          title="Community Impact"
          text="Over 20,500 young people under 18 in south Minneapolis neighborhoods will have access to these courts. Located near bus routes, bike lanes, and walking/biking trails with free street parking available. Free general use for anyone, with youth and senior programs planned."
        />

        {/* Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Sponsors */}
        <SponsorsBanner />

        {/* Social Media Links */}
        <SocialMediaLinks
          instagramUrl="https://instagram.com"
          facebookUrl="https://facebook.com"
          tiktokUrl="https://tiktok.com"
        />
      </div>
    </div>
  );
}
