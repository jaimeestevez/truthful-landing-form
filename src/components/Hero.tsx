
import React from 'react';

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  return (
    <section className="bg-[#002B30] text-white min-h-[70vh] flex items-center">
      <div className="container py-16 md:py-20 w-full">
        <div className="max-w-5xl mx-auto space-y-10 fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-[#5EEC3E] leading-tight max-w-4xl mx-auto">
              Tres de cada cuatro CV están maquillados... y ya los has colocado en algunas empresas.
            </h1>
          </div>
          
          <div className="space-y-8">
            <div className="bg-[#00C4AB]/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="leading-relaxed text-lg md:text-xl">
                <span className="font-medium text-xl md:text-2xl text-[#EDFFEE]">¿Tu ETT recibe montones de CV a diario?</span> Nuestra herramienta detecta al instante <span className="text-[#5EEC3E] font-medium">quién miente y quién no.</span>
              </p>
            </div>
            
            <div className="bg-[#00C4AB]/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="leading-relaxed text-lg md:text-xl">
                <span className="font-medium text-xl md:text-2xl text-[#EDFFEE]">Cuando un candidato inventa experiencia, el cliente lo sufre...</span> <span className="text-[#5EEC3E] font-medium">y tu ETT paga las consecuencias.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
