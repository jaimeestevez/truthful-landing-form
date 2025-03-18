
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Descubre La Verdad Que Cambiará Tu Vida
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Información exclusiva que la mayoría de las personas nunca conocerán
          </p>
          <div className="pt-4">
            <Button 
              onClick={scrollToVideo}
              className="btn-cta text-lg"
            >
              Ver el Video Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
