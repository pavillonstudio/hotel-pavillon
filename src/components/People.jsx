import React from 'react';

const People = () => {
  const teamImages = [
    '/assets/HotelPavillon_MarionKamper.jpg',
    '/assets/HotelPavillon_MathiasAssefi.jpg',
    '/assets/HotelPavillon_SimonAssefi.jpg',
    '/assets/HotelPavillon_BrittaFuchs-1.jpg',
    '/assets/HotelPavillon_EliasFreiberger.jpg',
    '/assets/HotelPavillon_UlrichFuchs-1.jpg',
    '/assets/HotelPavillon_ThomasStrobl-1.png',
    '/assets/HotelPavillon_CeciliaCapri-1.png',
    '/assets/HotelPavillon_LucasMartin.png'
  ];

  return (
    <section id="people" className="py-40 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-hpDark mb-8">
              People
            </h2>
            <div className="w-16 h-1 bg-hpBlue mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
              17 Wiener Designer, Illustratoren, Programmierer, Filmschaffende sowie Social Media-, Kommunikations-, PR- und Event-Beauftragte haben sich im Hotel Pavillon zusammengetan.
            </p>
          </div>
          <div className="mt-12 md:mt-0 pb-4">
            <a 
              href="mailto:join@hotelpavillon.at" 
              className="btn-primary"
            >
              Jetzt Bewerben
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {teamImages.map((src, idx) => (
            <div key={idx} className={`group flex justify-center items-center ${idx % 3 === 1 ? 'md:translate-y-16' : ''}`}>
              <img 
                src={src} 
                alt="Team member" 
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
