import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(mapRef.current, 
        { scale: 1 },
        {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="location" className="py-40 px-6 md:px-12 bg-white flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
      <div className="w-full md:w-1/2 relative z-10 flex flex-col items-start justify-center text-left">
        <h2 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-hpDark mb-8">
          Location
        </h2>
        <div className="w-16 h-1 bg-hpBlue mb-10"></div>
        <p className="text-base text-gray-700 leading-relaxed max-w-lg mb-8 font-light">
          Mitten im angesagten 7ten Wiener Bezirk. Ums Eck findest du alles was du brauchst: den besten Kaffee der Stadt, fancy Frühstück, healthy Lunch, feine Drinks zum Feierabend. Direkt am Spittelberg. Die U3 fast unterm Schreibtisch (Volkstheater - Ausgang Burggasse). Alles vor der Tür. Alles da.
        </p>
        <a 
          href="https://goo.gl/maps/HotelPavillon" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          Google Maps
        </a>
      </div>
      <div className="w-full md:w-1/2 flex justify-center relative z-10 overflow-hidden">
        <img 
          ref={mapRef}
          src="/assets/HotelPavillon_MapHiRes.png" 
          alt="Map of Hotel Pavillon location" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </section>
  );
};

export default Location;
