
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
    <section ref={videoRef} className="bg-[#002B30] py-8 md:py-16 -mt-10" id="video-section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#00C4AB]">
            No te la juegues con tu reputación: mira nuestro vídeo y blinda tus procesos.
          </h2>
          
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl video-container border-2 border-[#00C4AB]/20">
            {/* Replace this with your actual video embed code */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#002B30] flex items-center justify-center text-white">
              <p className="text-xl">Tu VSL irá aquí - Reemplaza este contenedor con tu video</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              onClick={openTypeform}
              className="bg-[#00C4AB] hover:bg-[#00a38d] text-[#002B30] text-xl font-bold rounded-full py-6 px-10 flex items-center gap-3 mx-auto"
            >
              Reserva una Demo <ExternalLink className="w-6 h-6" />
            </Button>
            <p className="mt-4 text-lg font-medium text-[#EDFFEE]/80">
              Este video exclusivo estará disponible por tiempo limitado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
