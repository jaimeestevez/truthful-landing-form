import React from 'react';
interface HeroProps {
  scrollToVideo: () => void;
}
const Hero: React.FC<HeroProps> = ({
  scrollToVideo
}) => {
  return <section className="bg-[#002B30] text-white flex items-center py-12 md:py-16">
      <div className="container w-full">
        <div className="max-w-5xl mx-auto space-y-8 fade-in">
          {/* Main headline - larger and prominent */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-[#5EEC3E] leading-tight max-w-4xl mx-auto my-px md:text-3xl">
              Tres de cada cuatro CV están maquillados... y ya los has colocado en algunas empresas.
            </h1>
          </div>
          
          {/* Subtitles - more compact and smaller */}
          <div className="max-w-3xl mx-auto space-y-6 pb-6 px-0">
            <p className="leading-snug text-center my-[11px] text-lg font-normal">
              <span className="font-semibold text-[#EDFFEE]">¿Tu ETT recibe montones de CV a diario?</span>{" "}
              Nuestra herramienta detecta al instante <span className="text-[#5EEC3E] font-medium">quién miente y quién no.</span>
            </p>
            
            <p className="text-lg leading-snug">
              <span className="font-semibold text-[#EDFFEE]">Cuando un candidato inventa experiencia, el cliente lo sufre...</span>{" "}
              <span className="text-[#5EEC3E] font-medium">y tu ETT paga las consecuencias.</span>
            </p>
          </div>
          
          {/* Add a scroll down button to encourage viewing the video */}
          <div className="text-center">
            <button onClick={scrollToVideo} className="inline-flex items-center gap-2 text-[#5EEC3E] hover:text-white transition-colors">
              <span>Ver cómo funciona</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;