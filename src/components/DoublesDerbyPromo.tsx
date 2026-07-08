import fundraiserFlyer from '../assets/images/promotionals/mtpc_flyer_002.png';

export default function DoublesDerbyPromo() {
  return (
    <section className="bg-white px-8 pb-10 md:px-8 md:pt-12 md:pb-8">
      <div className="mx-auto max-w-page">
        <div className="bg-white px-8 pt-2 pb-0 md:px-16 md:pt-4 md:pb-0">
          <h2 className="mb-5 font-albert text-2xl font-semibold text-black md:mb-6 md:text-4xl">
            MTPC Fundraiser Benefitting SPUT
          </h2>
          <p className="mb-14 font-open text-base leading-7 text-black md:mb-16">
            Minnesota Tennis Players Council invites you to a doubles team tournament benefiting Saint Paul Urban Tennis.
            Sixteen teams, three matches guaranteed, and a championship final—Saturday, August 29, 3–7 p.m. at White Bear
            Yacht Club ($100 per team, $50 per player). Learn more about SPUT at{' '}
            <a
              href="https://www.stpaulurbantennis.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#123a6e] underline hover:opacity-80"
            >
              stpaulurbantennis.org
            </a>
            .
          </p>
          <div className="flex flex-col items-center pt-12">
            <a
              href="https://www.stpaulurbantennis.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-[420px]"
            >
              <img
                src={fundraiserFlyer}
                alt="Flyer: MTPC Fundraiser Benefitting SPUT, August 29, 2026 at White Bear Yacht Club. 16 teams, $100 per team, waterfall group stage format with $50 prize for each champion."
                className="w-full rounded-xl border border-gray-200 shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
