
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#4BF52A] text-center leading-tight">
            "Tres de cada cuatro CV están "maquillados"... y ya los has colocado en algunas empresas."
          </h1>
          
          <div className="pt-10 flex justify-center">
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
