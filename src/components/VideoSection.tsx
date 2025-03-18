
import React from 'react';
import { Button } from '@/components/ui/button';

interface VideoSectionProps {
  videoRef: React.RefObject<HTMLDivElement>;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoRef }) => {
  return (
    <section ref={videoRef} className="bg-[#001a20] section-padding" id="video-section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#4BF52A]">
            SOLUCIÓN PARA CENTROS FORMATIVOS
          </h2>
          <p className="text-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
            Nuestra plataforma basada en blockchain garantiza la integridad y autenticidad de cada certificado académico. 
            Simplifica los procesos administrativos y eleva la credibilidad de tu institución educativa.
          </p>
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-2xl">
            {/* Replace this with your actual video embed code */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#001214] flex items-center justify-center text-white">
              <p className="text-xl">Tu VSL irá aquí - Reemplaza este contenedor con tu video</p>
            </div>
          </div>
          <div className="mt-8 text-center text-[#4BF52A]/80">
            <p className="text-lg font-medium">Este video exclusivo estará disponible por tiempo limitado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
