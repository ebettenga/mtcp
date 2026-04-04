import doublesDerbyFlyer from '../assets/images/promotionals/doubles-derby-flyer.png';

export default function DoublesDerbyPromo() {
  return (
    <section className="bg-white px-8 pb-10 md:px-8 md:pt-12 md:pb-8">
      <div className="mx-auto max-w-page">
        <div className="bg-white px-8 pt-2 pb-0 md:px-16 md:pt-4 md:pb-0">
          <h2 className="mb-5 font-albert text-2xl font-semibold text-black md:mb-6 md:text-4xl">
            First Annual MTPC Doubles Derby
          </h2>
          <p className="mb-14 font-open text-base leading-7 text-black md:mb-16">
            Minnesota Tennis Players Council, in partnership with the National Men&apos;s Tennis Association, invites you
            to the first annual Doubles Derby Team Tournament benefiting Minneapolis Community Clay Courts. Top Twin Cities
            players, fast doubles format, food and drinks—Saturday, April 25, 4–8 p.m. at Life Time White Bear Lake ($50 per
            player). For more on the clay courts or to donate, visit{' '}
            <a
              href="https://letsplayclay.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#123a6e] underline hover:opacity-80"
            >
              LetsPlayClay.org
            </a>
            .
          </p>
          <div className="flex flex-col items-center pt-12">
            <a
              href="https://letsplayclay.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-[420px]"
            >
              <img
                src={doublesDerbyFlyer}
                alt="Flyer: First Annual MTPC Doubles Derby Team Tournament, April 25 at Life Time White Bear Lake, benefiting Minneapolis Community Clay Courts. Partnership with National Men's Tennis Association."
                className="w-full rounded-xl border border-gray-200 shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
