import Section from '../components/Section';
import ImageCarousel from '../components/ImageCarousel';
import SponsorsBanner from '../components/SponsorsBanner';
import SocialMediaLinks from '../components/SocialMediaLinks';
import TestimonialsSection from '../components/TestimonialsSection';
import mtpc1 from '../assets/images/MTPC 1.jpg';
import mtpc2 from '../assets/images/MTPC 2.jpg';

export default function Home() {
  const carouselImages = [mtpc1, mtpc2];

  const testimonials = [
    {
      text: 'MTPC has given me regular competitive tennis and amazing friendships. The mentorship opportunities have been incredible.',
      name: 'MTPC Member',
    },
    {
      text: 'Playing with Kenny Tenny keeps me active and connected. The community support is unmatched.',
      name: 'MTPC Member',
    },
    {
      text: 'The mentorship I\'ve received through MTPC has helped me both on and off the court.',
      name: 'MTPC Member',
    },
    {
      text: 'I love that we give back to the community while playing the sport we love.',
      name: 'MTPC Member',
    },
  ];

  return (
    <div className="min-h-screen">
        {/* Hero Carousel */}
        <ImageCarousel images={carouselImages} />

        {/* Mission Section */}
        <Section
          title="Tennis is What We Are, Fun is How We Do It"
          text="Minnesota Tennis Players Council (MTPC), affectionately known as 'Kenny Tenny,' is a community-driven adult tennis collective serving the Twin Cities. We're a vibrant community of approximately 100 participants, ages 25–65, who come together year-round to play competitive tennis, build relationships, and uplift the broader tennis community."
        />

        {/* Programs Section */}
        <Section
          title="Year-Round Competitive Tennis"
          text="Play tennis 4–6 days per week across all seasons. From summer doubles sessions and USTA leagues to winter indoor play and performance sessions with juniors, MTPC offers diverse opportunities for competitive tennis year-round. Summer programming includes Tuesday/Thursday doubles sessions at 4.5–5.0 level, weekly grill outs, and USTA team leagues. Winter brings indoor tennis and league play at local clubs."
          variant="secondary"
        />

        {/* Community Section */}
        <Section
          title="More Than Tennis — A Community"
          text="MTPC is more than just tennis—it's a community that supports each other and gives back. Through mentorship, charitable activities, and financial support for players in need, we're building a stronger tennis ecosystem in Minnesota. We actively support Inner City Tennis, Saint Paul Urban Tennis, and provide league fee subsidies, equipment, and racquet stringing services to ensure cost is never a barrier to participation."
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
  );
}
