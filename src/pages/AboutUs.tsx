import Section from '../components/Section';
import kennyTennis4 from '../assets/images/tennis-images/Kenny Tennis 4.JPG';
import kennyTennis6 from '../assets/images/tennis-images/Kenny Tennis 6.JPG';
import kennyTennis10 from '../assets/images/tennis-images/Kenny Tennis 10.JPG';
import tennisDersBackhand from '../assets/images/tennis-images/Tennis Ders Backhand.JPG';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
        {/* Hero */}
        <Section
          title="About Kenny Tenny"
          id="who-we-are"
          image={kennyTennis4}
          imagePosition="left"
        >
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            Minnesota Tennis Players Council (MTPC)—affectionately known as "Kenny Tenny"—is a community-driven adult tennis collective serving the Twin Cities. What began as a small group of passionate players has grown into a vibrant community of approximately 100 participants, ages 25–65, who come together year-round to play competitive tennis, build relationships, and uplift the broader tennis community.
          </p>
        </Section>

        {/* Mission */}
        <Section
          title="Our Mission"
          variant="secondary"
          image={tennisDersBackhand}
          imagePosition="right"
        >
          <p className="font-open text-base leading-7 text-black" style={{ marginBottom: '24px' }}>
            "Tennis is what we are, and fun is how we do it."
          </p>
          <p className="font-open text-base leading-7 text-black">
            We foster a healthy, supportive, and welcoming environment where players of advanced skill levels can play frequently, socialize, mentor others, and contribute to the growth of tennis in Minnesota.
          </p>
        </Section>

        {/*  Nonprofit */}
        <Section title="A 501(c)(3) Nonprofit">
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            MTPC is a 501(c)(3) nonprofit organization. This allows us to better serve our community, accept tax-deductible donations, and expand our charitable initiatives supporting youth tennis programs throughout Minnesota.
          </p>
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p><strong>Membership Dues:</strong> $25/year suggested contribution</p>
            <p><strong>Nonprofit Events:</strong> $50 contribution for special fundraising events</p>
          </div>
        </Section>

        {/* Community Impact */}
        <Section
          title="Community Impact"
          variant="secondary"
          id="community-impact"
          image={kennyTennis6}
          imagePosition="left"
        >
          <div className="font-open text-base leading-7 text-black" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '8px' }}>Access to Advanced Tennis</h3>
              <p>Players have competitive opportunities most days of the week, promoting healthy lifestyles and lifelong physical activity.</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '8px' }}>Mentorship and Networking</h3>
              <p>MTPC organically fosters mentorship relationships between established business professionals and younger adults, as well as between advanced adult players and high-performing junior athletes.</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '8px' }}>Financial Support for Players</h3>
              <p>We ensure that cost is not a barrier to participation by providing league fee subsidies, indoor court time support, tennis balls and equipment, and racquet stringing services.</p>
            </div>
            <div>
              <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '8px' }}>Community Engagement & Charity</h3>
              <p>Our members contribute time, resources, and gear to junior and adult players throughout the year, including support for Inner City Tennis and Saint Paul Urban Tennis.</p>
            </div>
          </div>
        </Section>

        {/* Partners */}
        <Section
          title="Our Partners"
          id="partners"
          image={kennyTennis10}
          imagePosition="right"
        >
          <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p><strong>Northern Minnesota Tennis Association (NMTA):</strong> MTPC is proud to partner with NMTA as a volunteer organization. NMTA provides matching sponsorship support for our charitable events benefiting Minneapolis Clay courts and youth tennis programs.</p>
            <p><strong>InnerCity Tennis Foundation of Minneapolis:</strong> Serving 6,000 kids annually since 1973 across 22 public parks.</p>
            <p><strong>Saint Paul Urban Tennis (SPUT):</strong> Transforming lives of youth in underserved communities since 1991.</p>
            <p><strong>Thunder Bay Ontario Tennis:</strong> Reciprocal inclusion in events including the Mid Canada Tennis Classic.</p>
          </div>
        </Section>

        {/* Board */}
        <Section title="Leadership" variant="secondary" id="leadership">
          <p className="font-open text-base leading-7 text-black" style={{ marginBottom: '24px' }}>
            MTPC is led by a dedicated board of 8 members who organize activities, manage partnerships, and drive our community initiatives. Regular board meetings ensure we continue to serve our members and the broader tennis community effectively.
          </p>
        </Section>
    </div>
  );
}
