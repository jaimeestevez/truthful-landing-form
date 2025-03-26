
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
        <div className="max-w-5xl mx-auto space-y-12 fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#4BF52A] leading-tight max-w-4xl mx-auto">
              Tres de cada cuatro CV están maquillados... 
              <span className="block mt-3">y ya los has colocado en algunas empresas.</span>
            </h1>
          </div>
          
          <div className="bg-[#00313d]/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-[#4BF52A]/20">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4BF52A] text-center mb-8">
              ¿Por qué arriesgar tu reputación con candidatos no verificados?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-[#002129]/70 p-6 rounded-xl border border-[#4BF52A]/10 hover:border-[#4BF52A]/30 transition-all shadow-md">
                <p className="leading-relaxed text-lg">
                  <span className="font-medium text-xl text-white block mb-2">¿Tu ETT recibe montones de CV a diario?</span> 
                  Nuestra herramienta detecta al instante <span className="text-[#4BF52A] font-medium">quién miente y quién no.</span>
                </p>
              </div>
              
              <div className="bg-[#002129]/70 p-6 rounded-xl border border-[#4BF52A]/10 hover:border-[#4BF52A]/30 transition-all shadow-md">
                <p className="leading-relaxed text-lg">
                  <span className="font-medium text-xl text-white block mb-2">Cuando un candidato inventa experiencia, el cliente lo sufre...</span> 
                  <span className="text-[#4BF52A] font-medium">y tu ETT paga las consecuencias.</span>
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
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
