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
    <section className={`bg-white py-12 md:py-16 ${className}`}>
      <div className="max-w-page mx-auto w-full px-6">
        <h2 className="mb-8 text-center font-albert text-2xl font-semibold text-black md:text-3xl">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap items-center justify-evenly gap-6">
          {sponsors.map((sponsor, index) => {
            const content = (
              <div className="flex h-24 items-center justify-center grayscale transition-all hover:grayscale-0">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
            );

            if (sponsor.url) {
              return (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
