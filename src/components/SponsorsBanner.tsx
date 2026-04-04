import { Link } from 'react-router-dom';
import nmtaLogo from '../assets/sponsors/NMTA.jpg';

interface Sponsor {
  name: string;
  image: string;
  url?: string;
  /** Short line under the sponsor block (e.g. join CTA) */
  footerText?: string;
  /** Visible link under footerText; use internal paths like /joining or set external for http(s) URLs */
  footerLink?: { label: string; href: string; external?: boolean };
}

interface SponsorsBannerProps {
  sponsors?: Sponsor[];
  className?: string;
}

const defaultSponsors: Sponsor[] = [
  {
    name: 'NMTA',
    image: nmtaLogo,
    url: 'https://www.nsmta.net/',
    footerText: 'New members are welcome! See how to join NMTA.',
    footerLink: {
      label: 'How to join',
      href: 'https://www.nsmta.net/become-a-member',
      external: true,
    },
  },
];

export default function SponsorsBanner({ sponsors = defaultSponsors, className = '' }: SponsorsBannerProps) {
  if (sponsors.length === 0) {
    return null;
  }

  return (
    <section
      className={`bg-white ${className}`}
      style={{ padding: '64px 32px', textAlign: 'center' }}
    >
      <h2
        className="font-albert text-2xl font-semibold text-black md:text-3xl"
        style={{ marginBottom: '32px' }}
      >
        Our Sponsors
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((sponsor, index) => {
          const image = (
            <img
              src={sponsor.image}
              alt={sponsor.name}
              style={{ height: '80px', maxWidth: '100%', objectFit: 'contain' }}
              className="grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          );
          const sponsorName = (
            <p className="font-open text-sm font-semibold text-black" style={{ marginTop: '12px' }}>
              {sponsor.name}
            </p>
          );

          const primaryBlock =
            sponsor.url != null ? (
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-inherit no-underline"
              >
                {image}
                {sponsorName}
              </a>
            ) : (
              <div className="group flex flex-col items-center">
                {image}
                {sponsorName}
              </div>
            );

          const footerLink = sponsor.footerLink;
          const footerLinkEl =
            footerLink != null ? (
              footerLink.external ? (
                <a
                  href={footerLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-albert text-sm font-semibold text-[#123a6e] underline underline-offset-2 hover:text-[#0d2d56]"
                >
                  {footerLink.label}
                </a>
              ) : (
                <Link
                  to={footerLink.href}
                  className="font-albert text-sm font-semibold text-[#123a6e] underline underline-offset-2 hover:text-[#0d2d56]"
                >
                  {footerLink.label}
                </Link>
              )
            ) : null;

          return (
            <div
              key={index}
              className="group flex max-w-xs flex-col items-center rounded-xl border border-black/10 bg-white px-8 py-6 text-center transition-colors duration-300 hover:bg-secondary-500/30"
            >
              {primaryBlock}
              {sponsor.footerText != null && (
                <p className="font-open mt-4 text-sm leading-6 text-black/80">{sponsor.footerText}</p>
              )}
              {footerLinkEl != null && <span className="mt-2">{footerLinkEl}</span>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
