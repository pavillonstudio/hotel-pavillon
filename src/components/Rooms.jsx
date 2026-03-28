import React from 'react';

const Rooms = () => {
  const roomImages = [
    '/assets/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1000072.jpg',
    '/assets/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1000092.jpg',
    '/assets/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1020940.jpg',
    '/assets/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1210060.jpg',
    '/assets/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1020980.jpg',
    '/assets/HotelPavillonVienna_CeciliaCapri_2017_PavillonStudio-1210115.jpg'
  ];

  return (
    <section id="rooms" className="py-40 px-6 md:px-12 bg-white/20 flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-hpDark mb-8">
          Suites & Rooms
        </h2>
        <div className="w-16 h-1 bg-hpBlue mx-auto mb-10"></div>
        <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
          Hinter den Toren des Hotel Pavillon verbergen sich 210qm Fischgrätparkett mit jeder Menge Bananen-Palmen, Disco-Kugeln, Diwans, Spiegel, Zeichenstifte und Mac-Books. Wer mehr sehen will, schreibt an{' '}
          <a href="mailto:join@hotelpavillon.at" className="text-hpBlue font-medium hover:underline">join@hotelpavillon.at</a>
        </p>
      </div>
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mb-32 pb-16">
        {roomImages.map((src, idx) => (
          <div key={idx} className={`overflow-hidden shadow-2xl rounded-[2rem] bg-indigo-50/50 group ${idx % 3 === 1 ? 'md:translate-y-12' : idx % 3 === 2 ? 'md:translate-y-24' : ''}`}>
            <img 
              src={src} 
              alt="Room" 
              className="w-full h-full object-cover transform min-h-[400px] group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>

      <a 
        href="mailto:join@hotelpavillon.at?subject=The%20Door%20is%20open,%20you%20just%20have%20to%20enter!" 
        className="btn-primary"
      >
        Du kannst mich mieten
      </a>
    </section>
  );
};

export default Rooms;
