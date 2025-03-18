
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToVideo }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
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

  // Cycle through categories every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messageSets.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [messageSets.length]);
  
  const currentSet = messageSets[currentMessageIndex];

  return (
    <section className="bg-[#002129] text-white min-h-[90vh] flex items-center">
      <div className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#4BF52A] text-center">
            MEJORA TU EMPLEABILIDAD
          </h1>
          
          <div className="bg-[#00151b] p-6 rounded-lg border border-[#4BF52A]/30 min-h-[180px] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4BF52A] mb-4 text-center">
              {currentSet.title}
            </h2>
            <div className="mt-4 space-y-3">
              {currentSet.messages.map((message, index) => (
                <p key={index} className="text-lg md:text-xl text-white/90 text-center">
                  «{message}»
                </p>
              ))}
            </div>
          </div>
          
          <p className="text-3xl md:text-4xl font-bold text-[#4BF52A] text-center">
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
