
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
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
      handleNextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + messageSets.length) % messageSets.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % messageSets.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section className="bg-[#002129] text-white min-h-[90vh] flex items-center">
      <div className="container py-20 md:py-32 w-full">
        <div className="max-w-3xl mx-auto space-y-8 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#4BF52A] text-center">
            MEJORA TU EMPLEABILIDAD
          </h1>
          
          <div className="mt-12 relative w-full overflow-hidden">
            <div className="carousel-container w-full overflow-hidden rounded-xl relative">
              {/* Navigation buttons */}
              <button 
                onClick={handlePrevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white transition-all duration-300"
                disabled={isAnimating}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={handleNextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white transition-all duration-300"
                disabled={isAnimating}
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div 
                className="carousel-track flex transition-transform duration-700 ease-out w-full"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {messageSets.map((set, index) => {
                  // Calculate relative position from active slide
                  const position = (index - activeIndex + messageSets.length) % messageSets.length;
                  const normalizedPosition = position > messageSets.length / 2 ? position - messageSets.length : position;
                  
                  // Determine appearance based on position
                  const opacityValue = normalizedPosition === 0 ? 1 : 
                                      Math.abs(normalizedPosition) === 1 ? 0.5 : 0.2;
                  const blurValue = normalizedPosition === 0 ? 0 : 
                                   Math.abs(normalizedPosition) === 1 ? 1 : 2;
                  const scaleValue = normalizedPosition === 0 ? 1 : 
                                    Math.abs(normalizedPosition) === 1 ? 0.95 : 0.9;
                  const zIndexValue = normalizedPosition === 0 ? 10 : 5 - Math.abs(normalizedPosition);
                  const rotateYValue = normalizedPosition * 8;
                  
                  return (
                    <div 
                      key={index} 
                      className="carousel-slide w-full flex-shrink-0 transition-all duration-700 px-4"
                      style={{ 
                        opacity: opacityValue,
                        filter: `blur(${blurValue}px)`,
                        transform: `perspective(1000px) rotateY(${rotateYValue}deg) scale(${scaleValue})`,
                        zIndex: zIndexValue
                      }}
                    >
                      <div className="bg-gradient-to-br from-[#00191f] to-[#00151b] p-8 rounded-xl border border-[#4BF52A]/30 min-h-[280px] w-full flex flex-col justify-center shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#4BF52A] mb-6 text-center">
                          {set.title}
                        </h2>
                        <div className="mt-6 space-y-4">
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
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setActiveIndex(index);
                      setTimeout(() => setIsAnimating(false), 700);
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-[#4BF52A] w-10' 
                      : 'bg-[#4BF52A]/40 w-5 hover:bg-[#4BF52A]/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <p className="text-3xl md:text-4xl font-bold text-white text-center mt-12">
            The Truth!
          </p>
          
          <div className="pt-6 flex justify-center">
            <Button 
              onClick={scrollToVideo}
              className="bg-[#4BF52A] hover:bg-[#3dd21e] text-white text-xl md:text-2xl border-0 rounded-full py-8 px-12 font-bold flex items-center gap-4 hover:gap-5 transition-all shadow-xl"
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
