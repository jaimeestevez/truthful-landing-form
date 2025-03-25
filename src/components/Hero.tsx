
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
            Tres de cada cuatro CV están "maquillados"... y ya los has colocado en algunas empresas.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
