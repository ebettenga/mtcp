import Section from '../components/Section';

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
        <Section title="Events & Programming">
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            Join us for regular doubles sessions, league play, and community events. From summer grill outs to winter indoor play, there's always something happening at Kenny Tenny. Group trips to regional and national tournaments—join the adventure!
          </p>
        </Section>

        {/* Upcoming Fundraising Events */}
        <Section title="Upcoming Fundraising Events" variant="secondary">
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 className="font-albert text-xl font-semibold text-white" style={{ marginBottom: '8px' }}>Minneapolis Clay Benefit Event</h3>
              <p>Join us for a special fundraising event benefiting Minneapolis Clay tennis courts. Held at Lakeville or White Bear in April, this event features competitive play with a player fee and donation component. NMTA provides matching sponsorship support up to $1,500.</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-white" style={{ marginBottom: '8px' }}>Annual Holiday Mixer</h3>
              <p>Our signature annual event raising funds for Inner City Tennis. A great opportunity to celebrate the season while supporting youth tennis in Minneapolis.</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-white" style={{ marginBottom: '8px' }}>St. Paul Urban Tennis Golf Event</h3>
              <p>Annual support of tennis development through SPUT's fundraising golf event.</p>
            </div>
          </div>
        </Section>

        {/* Summer Programming */}
        <Section title="Summer Programming">
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 className="font-albert text-xl font-semibold text-white" style={{ marginBottom: '8px' }}>Tuesday/Thursday Doubles Sessions</h3>
              <p>4–5 courts of 4.5–5.0 level players at a local high school. Balls and drinks provided. Weekly Tuesday grill outs hosted by members.</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-white" style={{ marginBottom: '8px' }}>USTA Team Leagues</h3>
              <p>• Wednesday: 18+ 4.5 Team</p>
              <p>• Thursday: 18+ 5.0 Team</p>
              <p>• Thursday: 55+ 4.5 Team</p>
              <p style={{ marginTop: '8px' }}>Play hosted at premium clubs throughout the Twin Cities.</p>
            </div>
          </div>
        </Section>

        {/* Winter Programming */}
        <Section title="Winter Programming" variant="secondary">
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 className="font-albert text-xl font-semibold text-white" style={{ marginBottom: '8px' }}>Indoor Tennis</h3>
              <p>Tuesday/Thursday tennis at local indoor clubs.</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-white" style={{ marginBottom: '8px' }}>Winter League Play</h3>
              <p>• Wednesday: 18+ 4.5 league</p>
              <p>• Thursday: 18+ 5.0 league</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-white" style={{ marginBottom: '8px' }}>Friday Performance Sessions</h3>
              <p>Adult play incorporating performance juniors to foster mentorship, support, and competitive development.</p>
            </div>
          </div>
        </Section>

        {/* Community Activities */}
        <Section title="Community & Social Events">
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p>• Group trips to regional and national tournaments</p>
            <p>• Occasional community socials and tennis events</p>
            <p>• Reciprocal events with Thunder Bay Ontario players (including Mid Canada Tennis Classic)</p>
            <p>• Member-hosted gatherings and celebrations</p>
          </div>
        </Section>

        {/* Get Involved */}
        <Section title="Event T-Shirts & Gear" variant="secondary">
          <p className="font-open text-base leading-7 text-white">
            Show your Kenny Tenny pride! Event t-shirts are available for fundraising events and special occasions. Contact us to learn more about getting your MTPC gear.
          </p>
        </Section>
    </div>
  );
}
