
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const messageSets = [
    {
      title: "Más oportunidades laborales para tus estudiantes",
      messages: [
        "Que tus alumnos encuentren trabajo más rápido.",
        "Facilita que las empresas quieran contratar a tus estudiantes.",
        "Consigue que tus estudiantes destaquen en cualquier proceso de selección.",
        "Haz que tus estudiantes tengan más ofertas de empleo.",
        "Ayuda a tus alumnos a demostrar rápidamente lo que valen ante las empresas."
      ]
    },
    {
      title: "Más fácil conseguir trabajo",
      messages: [
        "Con TheTruth.es, encontrar trabajo es más fácil.",
        "Tus alumnos serán los primeros en destacar frente a las empresas.",
        "Simplifica a tus alumnos demostrar sus habilidades profesionales.",
        "Menos dudas, más contrataciones. Así de simple."
      ]
    },
    {
      title: "Perfiles que destacan",
      messages: [
        "Haz que las empresas tengan claro por qué elegir a tus alumnos.",
        "Tu centro forma alumnos que llaman la atención de los reclutadores.",
        "Convierte la formación que das en una ventaja directa para encontrar trabajo."
      ]
    },
    {
      title: "Diferénciate del resto",
      messages: [
        "Da razones reales a las empresas para preferir a tus estudiantes.",
        "Formar estudiantes buenos ya no es suficiente. Haz que se note.",
        "Demostrar quién eres nunca fue tan fácil para tus alumnos."
      ]
    }
  ];

  // Auto cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % messageSets.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [messageSets.length]);

  return (
    <section className="bg-[#002129] text-white min-h-[90vh] flex items-center">
      <div className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#4BF52A] text-center">
            MEJORA TU EMPLEABILIDAD
          </h1>
          
          <div className="mt-12 relative">
            <Carousel 
              className="w-full" 
              opts={{
                loop: true,
                align: "center",
                startIndex: activeIndex
              }}
              setApi={(api) => {
                api?.on("select", () => {
                  setActiveIndex(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {messageSets.map((set, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 w-full">
                    <div className="bg-[#00151b] p-6 rounded-lg border border-[#4BF52A]/30 min-h-[240px] w-full flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#4BF52A] mb-4 text-center">
                        {set.title}
                      </h2>
                      <div className="mt-4 space-y-3">
                        {set.messages.map((message, msgIndex) => (
                          <p key={msgIndex} className="text-lg md:text-xl text-white/90 text-center">
                            «{message}»
                          </p>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#002129]/80 hover:bg-[#00151b] border border-[#4BF52A]/40 text-[#4BF52A]" 
              />
              <CarouselNext 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#002129]/80 hover:bg-[#00151b] border border-[#4BF52A]/40 text-[#4BF52A]" 
              />
            </Carousel>
            
            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {messageSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-[#4BF52A]' : 'bg-[#4BF52A]/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <p className="text-3xl md:text-4xl font-bold text-[#4BF52A] text-center mt-8">
            The Truth!
          </p>
          
          <div className="pt-4 flex justify-center">
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
