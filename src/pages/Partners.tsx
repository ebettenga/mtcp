import Section from '../components/Section';
import nmtaLogo from '../assets/sponsors/NMTA.jpg';

export default function Partners() {
  return (
    <div className="min-h-screen">
      <Section title="Our Partners">
        <p className="font-open text-base leading-7 text-white">
          Our partners play an important role in advancing the mission of MTPC through shared commitment to
          competitive tennis, community development, and long-term growth of the game. These relationships help
          expand opportunities for players, strengthen programming, and support meaningful impact both on and off
          the court.
        </p>
      </Section>

      <Section variant="secondary">
        <article
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            backgroundColor: '#fff',
            overflow: 'hidden',
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '24px',
          }}
        >
          <a
            href="https://www.nsmta.net/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            style={{ alignSelf: 'flex-start' }}
          >
            <img
              src={nmtaLogo}
              alt="NMTA"
              style={{ width: '220px', maxWidth: '100%', objectFit: 'contain' }}
            />
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 className="font-albert text-2xl font-semibold text-black">National Men&apos;s Tennis Association (NMTA)</h3>
            <p className="font-open text-base leading-7 text-black">
              The National Men&apos;s Tennis Association supports competitive senior men&apos;s tennis across the country,
              promotes the health benefits of participation, helps improve the quality of events, and contributes to
              charitable efforts for underprivileged children and seniors in the tennis community.
            </p>
            <a
              href="https://www.nsmta.net/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-albert text-base font-semibold"
              style={{ color: '#123a6e', textDecoration: 'underline', width: 'fit-content' }}
            >
              Visit NMTA
            </a>
          </div>
        </article>
      </Section>
    </div>
  );
}
