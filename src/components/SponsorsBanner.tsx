import wilsonLogo from '../assets/sponsors/Wilson-logo.svg';

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
    name: 'Wilson',
    image: wilsonLogo,
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
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
        {sponsors.map((sponsor, index) => {
          const image = (
            <img
              src={sponsor.image}
              alt={sponsor.name}
              style={{ height: '80px', maxWidth: '100%', objectFit: 'contain' }}
              className="grayscale transition-all hover:grayscale-0"
            />
          );

          if (sponsor.url) {
            return (
              <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                {image}
              </a>
            );
          }

          return <div key={index}>{image}</div>;
        })}
      </div>
    </section>
  );
}
