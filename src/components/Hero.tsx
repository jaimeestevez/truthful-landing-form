
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  return (
    <section className="bg-[#002129] text-white min-h-[90vh] flex items-center">
      <div className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8 fade-in">
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/068a8bcc-9302-4985-91a2-05fe6d47541b.png" 
              alt="TheTruth Logo" 
              className="h-16 md:h-20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#4BF52A]">
            CERTAINTY <br/>MADE SIMPLE
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mt-6 max-w-2xl">
            Conectamos centros formativos, empresas y alumnos a través de una verificación transparente de credenciales académicas, skills y experiencia laboral.
          </p>
          <p className="text-xl md:text-2xl text-white/90">
            Si buscas validar la trayectoria educativa con total confianza y eficiencia:
          </p>
          <p className="text-3xl md:text-4xl font-bold text-[#4BF52A]">
            The Truth!
          </p>
          <div className="pt-4">
            <Button 
              onClick={scrollToVideo}
              className="bg-[#002129] hover:bg-[#003640] text-[#4BF52A] border-2 border-[#4BF52A] rounded-full py-6 px-8 font-medium flex items-center gap-2 hover:gap-3 transition-all"
            >
              Descubre cómo funciona <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
