import Section from '../components/Section';
import ImageCarousel from '../components/ImageCarousel';
import SponsorsBanner from '../components/SponsorsBanner';
import SocialMediaLinks from '../components/SocialMediaLinks';
import TestimonialsSection from '../components/TestimonialsSection';
import { useNavigate } from 'react-router-dom';
import mtpc2 from '../assets/images/tennis-images/MTPC 2.jpg';
import mtpc3 from '../assets/images/tennis-images/MTPC_home1.png';
import kennyTennis7 from '../assets/images/tennis-images/Kenny Tennis 7.JPG';
import kennyTennis8 from '../assets/images/tennis-images/Kenny Tennis 8.JPG';
import kenny from '../assets/images/tennis-images/kenny.jpg';


export default function Home() {
  const carouselImages = [mtpc2, mtpc3];
  const navigate = useNavigate();
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
        text="Minnesota Tennis Players Council (MTPC), affectionately known as 'Kenny Tenny,"
        image={kenny}
        imagePosition="left"
        buttons={[
          {
            label: 'Join Us!',
            href: '/joining',
            onClick: () => {
              navigate('/joining');
            },
          },
        ]}
      />

      {/* Programs Section */}
      <Section
        title="Year-Round Competitive Tennis"
        text="Play tennis 4–6 days per week across all seasons."
        variant="secondary"
        image={kennyTennis7}
        imagePosition="right"
        buttons={[
          {
            label: 'Events',
            href: '/events',
            onClick: () => {
              navigate('/events');
            },
          },
        ]}
      />

      {/* Community Section */}
      <Section
        title="More Than Tennis — A Community"
        text="MTPC is more than just tennis—it's a community that supports each other and gives back."
        image={kennyTennis8}
        imagePosition="left"
      />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Sponsors */}
      <SponsorsBanner />

      {/* Social Media Links */}
      <SocialMediaLinks
        instagramUrl="https://www.instagram.com/mtpc_nation/"
        xUrl="https://x.com/MTPC_Nation"
        tiktokUrl="https://www.tiktok.com/@mtpc_nation"
        facebookUrl="https://www.facebook.com/people/Minnesota-Tennis-Players-Council/100045854246387/"
      />
    </div>
  );
}
