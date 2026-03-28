import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.1em] text-hpDark mb-8">
          Preise
        </h2>
        <div className="w-16 h-1 bg-hpBlue mx-auto mb-10"></div>
        <p className="text-base text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
          Egal ob Einzelkämpfer oder kleines Team – wir haben den passenden Raum für dich im Hotel Pavillon.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Desk Option */}
        <div className="bg-hpBlue text-white rounded-[2rem] p-10 md:p-14 flex flex-col justify-between shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold uppercase tracking-widest text-white mb-2">Rent a Desk</h3>
            <p className="text-indigo-100 text-sm mb-8 font-light">Dein fixer Arbeitsplatz im Kollektiv.</p>
            <div className="text-5xl font-light text-white tracking-tight mb-8">
              ab <span className="font-bold">€300</span>
              <span className="text-base text-indigo-200 font-light block mt-2">exkl. USt / Monat</span>
            </div>
            <ul className="space-y-4 mb-12 text-white text-sm font-light">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div> 24/7 Zugang
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div> High-Speed WLAN
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Drucker & Postempfang
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Mitbenutzung Küche & Lounge
              </li>
            </ul>
          </div>
          <a href="mailto:join@hotelpavillon.at" className="btn-primary text-center w-full relative z-10 !bg-white !text-hpBlue hover:!bg-gray-100">
            Anfragen
          </a>
        </div>

        {/* Room Option */}
        <div className="bg-hpBlush text-hpDark rounded-[2rem] p-10 md:p-14 flex flex-col justify-between shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold uppercase tracking-widest text-hpDark mb-2">Rent a Room</h3>
            <p className="text-gray-600 text-sm mb-8 font-light">Dein eigenes Büro für dich und dein Team.</p>
            <div className="text-5xl font-light text-hpDark tracking-tight mb-8">
              ab <span className="font-bold">€700</span>
              <span className="text-base text-gray-500 font-light block mt-2">exkl. USt / Monat</span>
            </div>
            <ul className="space-y-4 mb-12 text-hpDark text-sm font-light">
               <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-hpDark"></div> Eigenes, abschließbares Büro
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-hpDark"></div> Private Atmosphäre
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-hpDark"></div> Inkl. aller Kollektiv-Vorteile
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-hpDark"></div> Meetingraum-Nutzung
              </li>
            </ul>
          </div>
          <a href="mailto:join@hotelpavillon.at" className="btn-primary text-center w-full relative z-10 !bg-hpDark !text-white hover:!bg-gray-800">
            Anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
