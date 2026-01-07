import Section from '../components/Section';

export default function Donations() {
  const buttonStyle = {
    padding: '14px 32px',
    backgroundColor: 'white',
    color: '#57944f',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '9999px',
    fontWeight: 600,
    fontSize: '16px',
    display: 'inline-block',
  };

  return (
    <div className="min-h-screen">
      <div className="pt-[76px] md:pt-[100px]">
        {/* Section 1: What Your Donation Supports */}
        <Section title="What Your Donation Supports">
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p>Your generous contributions help MTPC continue its mission of building community through competitive tennis. Donations directly support:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              <p>• <strong>Youth Tennis Programs</strong> — Supporting Inner City Tennis and Saint Paul Urban Tennis to bring tennis to underserved communities</p>
              <p>• <strong>League Fee Subsidies</strong> — Ensuring cost is never a barrier to participation for players in need</p>
              <p>• <strong>Equipment & Court Time</strong> — Providing tennis balls, racquet stringing services, and indoor court access</p>
              <p>• <strong>Community Events</strong> — Funding the Annual Holiday Mixer and other charitable activities</p>
            </div>
          </div>
        </Section>

        {/* Section 2: Sponsor & Equipment Partners */}
        <Section title="Sponsor & Equipment Partners" variant="secondary">
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            MTPC partners with leading tennis equipment manufacturers to provide quality gear for our members and community programs. Interested in becoming a sponsor? Contact us!
          </p>
          <a
            href="https://wilson.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-albert"
            style={buttonStyle}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
          >
            Visit Wilson
          </a>
        </Section>

        {/* Section 3: Donate Now */}
        <Section title="Donate Now">
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            Ready to support Minnesota tennis? Choose your preferred donation method below. Every contribution makes a difference!
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a
              href="https://paypal.me/MTPC"
              target="_blank"
              rel="noopener noreferrer"
              className="font-albert"
              style={buttonStyle}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              Donate with PayPal
            </a>
            <a
              href="https://venmo.com/MTPC"
              target="_blank"
              rel="noopener noreferrer"
              className="font-albert"
              style={buttonStyle}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              Donate with Venmo
            </a>
          </div>
          <p className="font-open text-sm leading-6 text-white" style={{ opacity: 0.9 }}>
            MTPC is a 501(c)(3) nonprofit organization. Your donation may be tax-deductible to the extent allowed by law.
          </p>
        </Section>
      </div>
    </div>
  );
}
