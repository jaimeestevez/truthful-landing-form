
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  return (
    <section className="bg-[#002129] text-white min-h-[80vh] flex items-center">
      <div className="container py-20 md:py-28 w-full">
        <div className="max-w-3xl mx-auto space-y-8 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#4BF52A] text-center">
            MEJORA TU EMPLEABILIDAD
          </h1>
          
          <div className="mt-12 bg-gradient-to-br from-[#00191f] to-[#00151b] p-8 rounded-xl border border-[#4BF52A]/30 shadow-lg">
            <p className="text-2xl md:text-3xl font-bold text-white text-center">
              "Tres de cada cuatro CV están "maquillados"... y ya los has colocado en algunas empresas."
            </p>
          </div>
          
          <div className="pt-8 flex justify-center">
            <Button 
              onClick={scrollToVideo}
              className="bg-[#4BF52A] hover:bg-[#3dd21e] text-[#002129] text-xl md:text-2xl border-0 rounded-full py-8 px-12 font-bold flex items-center gap-4 hover:gap-5 transition-all shadow-xl"
            >
              Descubre cómo funciona <ArrowRight className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
