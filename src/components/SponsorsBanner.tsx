import nmtaLogo from '../assets/sponsors/NMTA.jpg';

interface Sponsor {
  name: string;
  image: string;
  url?: string;
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

          if (sponsor.url) {
            return (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-black/10 bg-white px-8 py-6 transition-colors duration-300 hover:bg-secondary-500/30"
              >
                {image}
                {sponsorName}
              </a>
            );
          }

          return (
            <div
              key={index}
              className="group rounded-xl border border-black/10 bg-white px-8 py-6 transition-colors duration-300 hover:bg-secondary-500/30"
            >
              {image}
              {sponsorName}
            </div>
          );
        })}
      </div>
    </section>
  );
}
