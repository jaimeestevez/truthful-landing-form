
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  return (
    <section className="bg-[#002129] text-white min-h-[90vh] flex items-center">
      <div className="container py-20 md:py-28 w-full">
        <div className="max-w-4xl mx-auto space-y-12 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#4BF52A] text-center leading-tight">
            Tres de cada cuatro CV están maquillados... y ya los has colocado en algunas empresas.
          </h1>
          
          <div className="space-y-8 bg-[#00313d] p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4BF52A] text-center">
              ¿Por qué arriesgar tu reputación con candidatos no verificados?
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl">
              <p className="leading-relaxed">
                <span className="font-medium">¿Tu ETT recibe montones de CV a diario?</span> Nuestra herramienta detecta al instante <span className="text-[#4BF52A] font-medium">quién miente y quién no.</span>
              </p>
              
              <p className="leading-relaxed">
                <span className="font-medium">Cuando un candidato inventa experiencia, el cliente lo sufre...</span> <span className="text-[#4BF52A] font-medium">y tu ETT paga las consecuencias.</span>
              </p>
              
              <p className="leading-relaxed">
                <span className="font-medium">Cada candidato no apto que envías genera desconfianza.</span> <span className="text-[#4BF52A] font-medium">Con TheTruth, blindas tu reputación.</span>
              </p>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button 
                onClick={scrollToVideo}
                className="bg-[#4BF52A] hover:bg-[#3dd21e] text-[#002129] text-lg md:text-xl border-0 rounded-full py-6 px-10 font-bold flex items-center gap-3 hover:gap-4 transition-all shadow-lg"
              >
                Ver solución <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
