import React from 'react';

const Location = () => {
  return (
    <section id="location" className="py-40 px-6 md:px-12 bg-white flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
      <div className="w-full md:w-1/2 relative z-10 flex flex-col items-start justify-center text-left">
        <h2 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-hpDark mb-8">
          Location
        </h2>
        <div className="w-16 h-1 bg-hpBlue mb-10"></div>
        <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-10">
          Dass wir für Frinks, vietnamesische Rollen oder Vollkorn-Pizza, für einen Besuch bei den Fischen und eine Nacht im Beisl nicht mehr als umfallen müssen, ist nice. Noch besser ist es, dass wir über den Schirmen der Zollergasse schweben und sogar in langen Nachtschichten uns so fühlen, als wären wir part of the afterwork-deal.
        </p>
        <a 
          href="mailto:join@hotelpavillon.at?subject=The%20Door%20is%20open,%20you%20just%20have%20to%20enter!" 
          className="btn-primary"
        >
          Du kannst mich mieten
        </a>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center z-10">
        <img 
          src="/assets/HotelPavillon_MapHiRes.png" 
          alt="Map Location" 
          className="max-w-full h-auto drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Location;
