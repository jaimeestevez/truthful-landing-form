
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
        "Con The Truth, encontrar trabajo es más fácil.",
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
      <div className="container py-20 md:py-32 w-full">
        <div className="max-w-3xl mx-auto space-y-8 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#4BF52A] text-center">
            MEJORA TU EMPLEABILIDAD
          </h1>
          
          <div className="mt-12 relative w-full overflow-hidden">
            <div className="carousel-container w-full overflow-hidden">
              <div 
                className="carousel-track flex transition-transform duration-700 ease-in-out w-full"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {messageSets.map((set, index) => {
                  // Calculate relative position from active slide
                  const position = index - activeIndex;
                  // Determine visibility classes based on position
                  const opacityClass = position === 0 ? 'opacity-100' : 
                                      Math.abs(position) === 1 ? 'opacity-40' : 'opacity-20';
                  const blurClass = position === 0 ? '' : 
                                   Math.abs(position) === 1 ? 'blur-[1px]' : 'blur-[2px]';
                  const scaleClass = position === 0 ? 'scale-100' : 
                                    Math.abs(position) === 1 ? 'scale-95' : 'scale-90';
                  
                  return (
                    <div 
                      key={index} 
                      className={`carousel-slide w-full flex-shrink-0 transition-all duration-500 px-4 ${opacityClass} ${blurClass} ${scaleClass}`}
                      style={{ 
                        transform: `perspective(1000px) rotateY(${position * 5}deg)`,
                        zIndex: position === 0 ? 10 : 5 - Math.abs(position)
                      }}
                    >
                      <div className="bg-[#00151b] p-6 rounded-lg border border-[#4BF52A]/30 min-h-[240px] w-full flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#4BF52A] mb-4 text-center">
                          {set.title}
                        </h2>
                        <div className="mt-4 space-y-3">
                          {set.messages.map((message, msgIndex) => (
                            <p key={msgIndex} className="text-lg md:text-xl text-white/90 text-center">
                              {message}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center gap-4 mt-8">
              {messageSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-[#4BF52A] w-8' 
                      : 'bg-[#4BF52A]/40 w-4'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <p className="text-3xl md:text-4xl font-bold text-white text-center mt-8">
            The Truth!
          </p>
          
          <div className="pt-4 flex justify-center">
            <Button 
              onClick={scrollToVideo}
              className="bg-[#4BF52A] hover:bg-[#3dd21e] text-white text-lg md:text-xl border-0 rounded-full py-8 px-10 font-bold flex items-center gap-3 hover:gap-4 transition-all shadow-lg"
            >
              Descubre cómo funciona <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
