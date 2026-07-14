import Section from '../components/Section';
import DonationMethodCard from '../components/DonationMethodCard';
import CopyButton from '../components/CopyButton';
import ChariotDafWidget from '../components/ChariotDafWidget';
import PaymentQrCode from '../components/PaymentQrCode';
import {
  donationsConfig,
  formatMailingAddress,
  hasVenmoQrCode,
  hasZelleQrCode,
  isChariotConfigured,
  isOrganizationConfigured,
  isStripeConfigured,
  isZelleConfigured,
} from '../config/donations';
import mtpcHome1 from '../assets/images/tennis-images/MTPC_home1.png';
import kennyTennis8 from '../assets/images/tennis-images/Kenny Tennis 8.JPG';
import kennyTennis9 from '../assets/images/tennis-images/Kenny Tennis 9.JPG';
import mtpc2 from '../assets/images/tennis-images/MTPC 2.jpg';

const buttonStyle = {
  padding: '14px 32px',
  backgroundColor: 'white',
  color: '#123a6e',
  textDecoration: 'none',
  cursor: 'pointer',
  borderRadius: '9999px',
  fontWeight: 600,
  fontSize: '16px',
  display: 'inline-block',
} as const;

function DonateButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-albert"
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f3f4f6';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'white';
      }}
    >
      {label}
    </a>
  );
}

export default function Donations() {
  const { organization, stripe, venmo, zelle } = donationsConfig;
  const mailingAddress = formatMailingAddress();
  const stripeConfigured = isStripeConfigured();
  const chariotConfigured = isChariotConfigured();
  const zelleConfigured = isZelleConfigured();
  const venmoQrCode = hasVenmoQrCode();
  const zelleQrCode = hasZelleQrCode();
  const orgConfigured = isOrganizationConfigured();
  const receiptMailto = `mailto:${organization.receiptEmail}`;

  return (
    <div className="min-h-screen">
      <Section title="What Your Donation Supports" image={mtpcHome1} imagePosition="left">
        <div
          className="font-open text-base leading-7 text-white"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <p>
            Your generous contributions help MTPC continue its mission of building community through competitive
            tennis. Donations directly support:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
            <p>
              • <strong>Youth Tennis Programs</strong> — Supporting Inner City Tennis and Saint Paul Urban Tennis to
              bring tennis to underserved communities
            </p>
            <p>
              • <strong>League Fee Subsidies</strong> — Ensuring cost is never a barrier to participation for players in
              need
            </p>
            <p>
              • <strong>Equipment & Court Time</strong> — Providing tennis balls, racquet stringing services, and indoor
              court access
            </p>
            <p>
              • <strong>Community Events</strong> — Funding the Annual Holiday Mixer, fundraisers, and other charitable
              activities
            </p>
          </div>
        </div>
      </Section>

      <Section title="Ways to Give" variant="secondary" image={kennyTennis8} imagePosition="right">
        <p className="font-open text-base leading-7 text-black" style={{ marginBottom: '24px' }}>
          Choose Venmo, Zelle, or mail a check. Include your name and contact information so we can send a tax receipt.
        </p>
        <div className="grid gap-6">
          <DonationMethodCard
            title="Venmo"
            description="Send your gift through Venmo and include your name plus “MTPC donation” in the payment note."
            action={
              <DonateButton href={venmo.url} label={`Donate with Venmo (@${venmo.handle})`} />
            }
          >
            {venmoQrCode && (
              <PaymentQrCode
                src={venmo.qrCode}
                alt={`Venmo QR code for @${venmo.handle}`}
                caption="Scan with the Venmo app to send your gift, or use the link below on desktop."
              />
            )}
            <p className="font-open text-sm text-gray-700">
              Note: Venmo does not issue tax receipts on its own. We will email a receipt after your gift is received.
            </p>
          </DonationMethodCard>

          <DonationMethodCard
            title="Zelle"
            description={
              zelleConfigured
                ? zelleQrCode
                  ? 'Scan the QR code below in your banking app’s Zelle scanner. Include your name and “MTPC donation” in the memo.'
                  : 'Send your gift via Zelle using the contact below. Include your name and “MTPC donation” in the memo.'
                : 'Contact us to give by Zelle.'
            }
            action={
              !zelleConfigured ? (
                <a href={receiptMailto} className="font-albert" style={buttonStyle}>
                  Email Us About Zelle
                </a>
              ) : undefined
            }
          >
            {zelleQrCode ? (
              <PaymentQrCode
                src={zelle.qrCode}
                alt="Zelle QR code for MTPC"
                caption="Open Zelle in your banking app, choose Send, then scan this code."
              />
            ) : (
              zelle.emailOrPhone && (
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-open text-base text-black">
                    <strong>Zelle:</strong> {zelle.emailOrPhone}
                  </p>
                  <CopyButton value={zelle.emailOrPhone} />
                </div>
              )
            )}
          </DonationMethodCard>

          <DonationMethodCard
            title="Mail a Check"
            description="Make checks payable to MTPC and include your name, email, and mailing address for your receipt."
            action={
              !orgConfigured ? (
                <a href={receiptMailto} className="font-albert" style={buttonStyle}>
                  Email Us for Mailing Instructions
                </a>
              ) : undefined
            }
          >
            <p className="font-open text-base text-black">
              <strong>Payable to:</strong> {organization.checkPayableTo}
            </p>
            {orgConfigured && (
              <>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-open text-base text-black">
                    <strong>Mail to:</strong> {mailingAddress}
                  </p>
                  <CopyButton value={mailingAddress} label="Copy address" />
                </div>
                <p className="font-open text-sm text-gray-700">
                  <strong>Memo:</strong> MTPC donation
                </p>
              </>
            )}
          </DonationMethodCard>
        </div>
      </Section>

      {stripeConfigured && (
        <Section title="Donate by Card" image={kennyTennis9} imagePosition="left">
          <p className="font-open text-base leading-7 text-white" style={{ marginBottom: '24px' }}>
            Give once or set up a monthly gift by card. Stripe will email your receipt automatically after each payment.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {stripe.oneTimePaymentLink && (
              <DonateButton href={stripe.oneTimePaymentLink} label="Give Once" />
            )}
            {stripe.monthlyPaymentLink && (
              <DonateButton href={stripe.monthlyPaymentLink} label="Give Monthly" />
            )}
          </div>
        </Section>
      )}

      {chariotConfigured && (
        <Section title="Donor-Advised Funds" variant="secondary" image={mtpc2} imagePosition="right">
          <div
            className="font-open text-base leading-7 text-black"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <p>
              Recommend a grant from your donor-advised fund to support MTPC. DAF gifts are a tax-smart way to give,
              especially for larger or planned contributions.
            </p>
            <p>Select your DAF provider below to sign in and recommend a grant:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Select your DAF provider and sign in</li>
              <li>Enter your desired grant amount</li>
              <li>Confirm your contact information for grant records</li>
              <li>Submit your grant recommendation</li>
            </ol>
            <ChariotDafWidget connectId={donationsConfig.chariot.connectId} />
            <p className="text-sm text-gray-700">
              Your DAF sponsor will email a grant confirmation after your recommendation is processed. For help, contact{' '}
              <a href={`mailto:${organization.receiptEmail}`} className="font-medium text-[#123a6e] underline">
                {organization.receiptEmail}
              </a>
              .
            </p>
          </div>
        </Section>
      )}

      <Section title="Tax-Deductible Giving">
        <div className="font-open text-base leading-7 text-white" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p>
            MTPC is a 501(c)(3) nonprofit organization. Your donation may be tax-deductible to the extent allowed by
            law.
          </p>
          {orgConfigured && (
            <p>
              <strong>{organization.legalName}</strong> — EIN {organization.ein}
            </p>
          )}
          <p>{organization.receiptNote}</p>
          <p>
            For Venmo, Zelle, and check gifts, email{' '}
            <a href={`mailto:${organization.receiptEmail}`} className="font-medium underline">
              {organization.receiptEmail}
            </a>{' '}
            with your name, address, gift amount, and date. Receipts are typically sent {organization.receiptTurnaround}.
          </p>
        </div>
      </Section>

      <Section title="Beyond Cash" variant="secondary" image={kennyTennis8} imagePosition="left">
        <div className="font-open text-base leading-7 text-black" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '16px' }}>
              In-Kind Donations
            </h3>
            <p>
              Tennis balls, stringing services, court time, and equipment are always welcome. Contact us to coordinate
              an in-kind gift.
            </p>
          </div>
          <div>
            <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '16px' }}>
              Employer Matching
            </h3>
            <p>
              Many employers match charitable gifts. Ask your HR team about matching gifts and provide our legal name
              {orgConfigured ? ` and EIN (${organization.ein})` : ''} when submitting your match request.
            </p>
          </div>
          <div>
            <h3 className="font-albert text-xl font-semibold text-black" style={{ marginBottom: '16px' }}>
              Event Fundraisers
            </h3>
            <p>
              Play for a cause at MTPC tournaments and fundraisers, including our annual events benefiting Saint Paul
              Urban Tennis. Visit our{' '}
              <a href="/events" className="font-medium text-[#123a6e] underline">
                Events page
              </a>{' '}
              for upcoming opportunities.
            </p>
          </div>
          <a
            href={`mailto:${organization.receiptEmail}`}
            className="font-albert"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            Contact Us About Giving
          </a>
        </div>
      </Section>
    </div>
  );
}
