import Section from '../components/Section';
import DoublesDerbyPromo from '../components/DoublesDerbyPromo';
import mtpc2 from '../assets/images/tennis-images/MTPC 2.jpg';
import kennyTennis5 from '../assets/images/tennis-images/Kenny Tennis 5.JPG';
import kennyTennis7 from '../assets/images/tennis-images/Kenny Tennis 7.JPG';

export default function Events() {
  const googleCalendarEmbedUrl =
    'https://calendar.google.com/calendar/embed?src=mtpctennis%40gmail.com&ctz=America%2FChicago&mode=MONTH&showTitle=0&showPrint=0&showTabs=0&showCalendars=0';

  return (
    <div className="min-h-screen">
      {/* Hero */}
        <Section
          title="Events & Programming"
          image={mtpc2}
          imagePosition="left"
        >
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            Join us for regular doubles sessions, league play, and community events. From summer grill outs to winter indoor play, there's always something happening at Kenny Tenny. Group trips to regional and national tournaments—join the adventure!
          </p>
        </Section>

        <DoublesDerbyPromo />

        {/* Google Calendar */}
        <Section title="Events Calendar" variant="secondary">
          <div className="relative left-1/2 w-[95vw] max-w-[95vw] -translate-x-1/2 md:left-0 md:w-full md:max-w-full md:translate-x-0">
            <p className="font-open text-base leading-7 text-black" style={{ marginBottom: '16px' }}>
              View all upcoming events below.
            </p>
            <div
              className="md:mx-auto md:max-w-page"
              style={{
                position: 'relative',
                width: '100%',
                height: '72vh',
                minHeight: '560px',
                maxHeight: '780px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <iframe
                title="MTPC Events Google Calendar"
                src={googleCalendarEmbedUrl}
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                loading="lazy"
              />
            </div>
          </div>
        </Section>

        {/* Summer Programming */}
        <Section
          title="Summer Programming"
          image={kennyTennis5}
          imagePosition="left"
        >
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
        <Section
          title="Winter Programming"
          variant="secondary"
          image={kennyTennis7}
          imagePosition="right"
        >
          <div className="font-open text-base leading-7 text-black" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '8px' }}>Indoor Tennis</h3>
              <p>Tuesday/Thursday tennis at local indoor clubs.</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '8px' }}>Winter League Play</h3>
              <p>• Wednesday: 18+ 4.5 league</p>
              <p>• Thursday: 18+ 5.0 league</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '8px' }}>Friday Performance Sessions</h3>
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
          <p className="font-open text-base leading-7 text-black">
            Show your Kenny Tenny pride! Event t-shirts are available for fundraising events and special occasions.{' '}
            <a href="mailto:mtpctennis@gmail.com" className="underline">
              Contact us
            </a>{' '}
            to learn more about getting your MTPC gear.
          </p>
        </Section>
    </div>
  );
}
