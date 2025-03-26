
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface VideoSectionProps {
  videoRef: React.RefObject<HTMLDivElement>;
  typeformUrl: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoRef, typeformUrl }) => {
  const openTypeform = () => {
    window.open(typeformUrl, '_blank');
  };

  return (
    <section ref={videoRef} className="bg-[#001a20] py-16 md:py-24" id="video-section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#4BF52A]">
            No te la juegues con tu reputación: mira nuestro vídeo y blinda tus procesos.
          </h2>
          
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-2xl video-container">
            {/* Replace this with your actual video embed code */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#001214] flex items-center justify-center text-white">
              <p className="text-xl">Tu VSL irá aquí - Reemplaza este contenedor con tu video</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              onClick={openTypeform}
              className="bg-[#4BF52A] hover:bg-[#3dd21e] text-[#002129] text-xl font-bold rounded-full py-6 px-10 flex items-center gap-3 mx-auto"
            >
              Reserva una Demo <ExternalLink className="w-6 h-6" />
            </Button>
            <p className="mt-4 text-lg font-medium text-[#4BF52A]/80">
              Este video exclusivo estará disponible por tiempo limitado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
