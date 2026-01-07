import Section from '../components/Section';

export default function Joining() {
  return (
    <div className="min-h-screen">
      <div className="pt-[76px] md:pt-[100px]">
        {/* Hero */}
        <Section title="Join Kenny Tenny">
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            Join approximately 100 players, ages 25–65, who come together year-round to play competitive tennis, build relationships, and uplift the broader tennis community. Whether you're looking for regular competitive play, mentorship opportunities, or a welcoming tennis community, MTPC offers something for advanced players at the 4.5–5.0 level.
          </p>
        </Section>

        {/* Who Can Join */}
        <Section title="Who Can Join" variant="secondary">
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p>• Advanced players at the 4.5–5.0 level</p>
            <p>• Ages 25–65</p>
            <p>• Players looking for competitive, regular tennis opportunities</p>
            <p>• Those interested in mentorship and community building</p>
          </div>
        </Section>

        {/* What We Offer */}
        <Section title="What We Offer">
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p>• Regular competitive play 4–6 days per week</p>
            <p>• USTA league teams (18+ 4.5, 18+ 5.0, 55+ 4.5)</p>
            <p>• Summer doubles sessions with balls and drinks provided</p>
            <p>• Weekly Tuesday grill outs hosted by members</p>
            <p>• Winter indoor tennis at local clubs</p>
            <p>• Performance sessions with juniors</p>
            <p>• Community events and socials</p>
            <p>• Group trips to regional and national tournaments</p>
          </div>
        </Section>

        {/* Get Started */}
        <Section title="Ready to Join?" variant="secondary">
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            Experience tennis, mentorship, and friendship. Contact us to learn more about joining MTPC and becoming part of Minnesota's premier adult tennis community.
          </p>
        </Section>
      </div>
    </div>
  );
}
