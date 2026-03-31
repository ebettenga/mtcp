import Section from '../components/Section';
import brauerPhoto from '../assets/members/Brauer.jpg';
import heunischPhoto from '../assets/members/Heunisch.jpg';
import samCychoszPhoto from '../assets/members/S Cychosz.jpg';
import valleyPhoto from '../assets/members/Valley.jpg';
import warchPhoto from '../assets/members/Warch.jpg';

interface BoardMember {
  name: string;
  title: string;
  address: string;
  mtpcMeans: string;
  goatPick: string;
  photo?: string;
}

const boardMembers: BoardMember[] = [
  {
    name: 'Ken Cychosz',
    title: 'Founder, President & Chairman',
    address: '12700 Emmer Place\nApple Valley, MN 55124',
    mtpcMeans:
      'MTPC has evolved into an organization of players looking for a fun competitive identity. For me, it is about giving individuals of any age an opportunity, but focuses on young individuals figuring out what is next for them. This involves tennis and other life experiences. At this point, it has become a big family. My enjoyment is watching it happen and have the family flourish while helping others in the twin cities',
    goatPick:
      'The goat is roger Federer. He has many grand slams and just gets what this all about. The goat is not the most titles but also what they contribute to the sport and society. Roger has done it all and continues to excel at it.',
  },
  {
    name: 'Brian Valley',
    title: 'Chief Business Officer',
    address: '11928 92nd Ave N,\nMaple Grove MN 55369',
    mtpcMeans:
      'MTPC means doing what I love with the people I love. As someone who has worked in tennis for 2 decades, I have seen how easy it is to treat tennis strictly by the numbers which cannot possibly grow the game. MTPC is only about promoting and providing opportunities in the sport we all love broadly to those who love to play.',
    goatPick:
      "On the men's side, Roger Federer. There has been no other player that made tennis look so effortless and beautiful. And on the Women's side, Serena William's her dominance of the sport for over a decade and the long list of achievements she has, may never be beaten.",
    photo: valleyPhoto,
  },
  {
    name: 'Ethan Bettenga',
    title: 'Chief Technological Officer',
    address: '13385 Yosemite Ave S\nSavage, MN 55378',
    mtpcMeans: '',
    goatPick: '',
  },
  {
    name: 'Neil Rademacher',
    title: 'Chief Financial Officer',
    address: '4406 Braddock Tr\nEagan, MN 55123',
    mtpcMeans: '',
    goatPick: '',
  },
  {
    name: 'Sam Cychosz',
    title: 'Chief Marketing Officer',
    address: '1140 Northwood Drive #204\nEagan, MN 55121',
    mtpcMeans:
      'MTPC is an opportunity to network with professionals from varied backgrounds as well as compete at a high-level week to week with players of my skill level. It provides a more welcoming and laid back community for players in Minnesota than your typical leagues.',
    goatPick:
      "Rod Laver. He is the only tennis player in history to win all grand slams in one year twice. If we're going with the modern game, I'll take Roger Federrer. His influence on the sport to my generation was above any of the other Big 3 and he was nearly unbeatable at his peak.",
    photo: samCychoszPhoto,
  },
  {
    name: 'Phil Brauer',
    title: 'Facilities Director',
    address: '17106 Forbes Ct\nFarmington, MN 55024',
    mtpcMeans:
      "MTPC is awesome because it ties tennis players of different age groups together, keeping the tennis community strong. When I first started tennis in middle school, I always played with young adults, and with people my parents' age and beyond, and those experiences are still some of my most fond memories of playing tennis. Now that I'm getting older, I'm enjoying being on the other side, getting to play with younger players and hopefully giving them the same experience I had. MTPC is also great because it provides opportunities for younger players that are higher level to play more frequently without breaking the bank.",
    goatPick:
      "Men- Novak Djokovic (Although I don't want to admit it)- The results he has produced has forced me to admit it (It's now a very long list of accolades). His mental game is insane. Women- Martina Navratilova- I put her as the GOAT just because she was able to find amazing success in singles, doubles and mixed doubles.",
    photo: brauerPhoto,
  },
  {
    name: 'Robert Cardenas',
    title: 'Chief Operating Officer',
    address: '4040 Scheuneman Rd\nGem Lake, MN 55110',
    mtpcMeans: '',
    goatPick: '',
  },
  {
    name: 'Steve Warch',
    title: 'Legal Counsel',
    address: '',
    mtpcMeans:
      'MTPC is an inclusive community that brings people together and fosters connections around our shared love for tennis. It is a great outlet for both exercise and friendships - key life ingredients.',
    goatPick: 'Federer because the GOAT must have a one-handed backhand',
    photo: warchPhoto,
  },
  {
    name: 'Will Prest',
    title: 'Director of Community Outreach',
    address: '4417 Abbott Ave S\nMinneapolis MN 55410',
    mtpcMeans: '',
    goatPick: '',
  },
  {
    name: 'Pete Heunisch',
    title: 'Director of Member Services and Equipment',
    address: '530 E 131st St.\nBurnsville, MN 55337',
    mtpcMeans:
      'MTPC has been an excellent, neutral forum for tennis folks that was born on a bar napkin, during a late night happy hour after a USTA match with both teams present. There were no winners or losers. Just a bunch of guys (and some gals) that have one underlying activity in common. Playing tennis for as long as we possibly can! MTPC has brought so many players together for not just tennis but friendships that will last a lifetime!',
    goatPick: 'Federer for sure. He has done so much for the game plus he uses Wilson rackets!',
    photo: heunischPhoto,
  },
];

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen">
      <Section title="Board of Directors">
        <p className="font-open text-base leading-7 text-white">
          Meet the leadership team that guides MTPC.
        </p>
      </Section>

      <Section variant="secondary">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {boardMembers.map((member) => (
            <article
              key={member.name}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                backgroundColor: '#fff',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'stretch',
              }}
            >
              {member.photo && (
                <img
                  src={member.photo}
                  alt={`${member.name}`}
                  style={{ width: '240px', minWidth: '240px', height: '240px', objectFit: 'cover' }}
                />
              )}
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <div>
                  <h3 className="font-albert text-xl font-semibold text-black">{member.name}</h3>
                  <p className="font-open text-sm leading-6 text-black">{member.title}</p>
                </div>
                <div>
                  <p className="font-albert text-sm font-semibold text-black">Address</p>
                  <p className="font-open text-sm leading-6 text-black" style={{ whiteSpace: 'pre-line' }}>
                    {member.address}
                  </p>
                </div>
                <div>
                  <p className="font-albert text-sm font-semibold text-black">What MTPC Means to Me</p>
                  <p className="font-open text-sm leading-6 text-black">{member.mtpcMeans}</p>
                </div>
                <div>
                  <p className="font-albert text-sm font-semibold text-black">Tennis GOAT Pick</p>
                  <p className="font-open text-sm leading-6 text-black">{member.goatPick}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
