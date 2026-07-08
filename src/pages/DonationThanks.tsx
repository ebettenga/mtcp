import { Link } from 'react-router-dom';
import Section from '../components/Section';
import kennyTennis6 from '../assets/images/tennis-images/Kenny Tennis 6.JPG';

export default function DonationThanks() {
  return (
    <div className="min-h-screen">
      <Section title="Thank You for Your Support" image={kennyTennis6} imagePosition="left">
        <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p>
            Your generosity helps MTPC support youth tennis programs, league fee subsidies, equipment, and community
            events across Minnesota.
          </p>
          <p>
            If you donated by card, Stripe will email your receipt automatically. For Venmo, Zelle, or check donations,
            we will send a tax receipt once your gift is processed.
          </p>
          <Link
            to="/"
            className="font-albert inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#123a6e] transition-colors hover:bg-gray-100"
            style={{ width: 'fit-content' }}
          >
            Back to Home
          </Link>
        </div>
      </Section>
    </div>
  );
}
