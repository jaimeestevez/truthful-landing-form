
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  return (
    <section className="bg-[#002129] text-white min-h-[70vh] flex items-center">
      <div className="container py-16 md:py-20 w-full">
        <div className="max-w-5xl mx-auto space-y-10 fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[#4BF52A] leading-tight max-w-4xl mx-auto">
              Tres de cada cuatro CV están maquillados... y ya los has colocado en algunas empresas.
            </h1>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col space-y-2">
              <p className="leading-relaxed text-lg md:text-xl">
                <span className="font-medium text-xl md:text-2xl text-white">¿Tu ETT recibe montones de CV a diario?</span> Nuestra herramienta detecta al instante <span className="text-[#4BF52A] font-medium">quién miente y quién no.</span>
              </p>
            </div>
            
            <div className="flex flex-col space-y-2">
              <p className="leading-relaxed text-lg md:text-xl">
                <span className="font-medium text-xl md:text-2xl text-white">Cuando un candidato inventa experiencia, el cliente lo sufre...</span> <span className="text-[#4BF52A] font-medium">y tu ETT paga las consecuencias.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
