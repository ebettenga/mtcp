import autumnSinglesFlyer from '../assets/images/promotionals/mtpc_flyer_003.jpg';

export default function DoublesDerbyPromo() {
  return (
    <section className="bg-white px-8 pb-10 md:px-8 md:pt-12 md:pb-8">
      <div className="mx-auto max-w-page">
        <div className="bg-white px-8 pt-2 pb-0 md:px-16 md:pt-4 md:pb-0">
          <h2 className="mb-5 font-albert text-2xl font-semibold text-black md:mb-6 md:text-4xl">
            MTPC Autumn Singles Showdown
          </h2>
          <p className="mb-14 font-open text-base leading-7 text-black md:mb-16">
            Minnesota Tennis Players Council invites you to a 16-player singles tournament—Saturday, September 26,
            12:30–5 p.m. at Mahtomedi High School Tennis Courts. Three matches guaranteed in a compass draw, Fast 4's
            format, $40 per player ($35 for MTPC members), and a $50 prize for the champion.
          </p>
          <div className="flex flex-col items-center pt-12">
            <img
              src={autumnSinglesFlyer}
              alt="Flyer: MTPC Autumn Singles Showdown, Saturday September 26, 2026, 12:30 p.m. to 5 p.m. at Mahtomedi High School Tennis Courts. 16 players, $40 per player ($35 for MTPC members), compass draw with three matches guaranteed, Fast 4's format, and a $50 prize for the champion."
              className="w-full max-w-[420px] rounded-xl border border-gray-200 shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
