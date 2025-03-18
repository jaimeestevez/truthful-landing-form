
import React, { useRef } from 'react';

interface VideoSectionProps {
  videoRef: React.RefObject<HTMLDivElement>;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoRef }) => {
  return (
    <section ref={videoRef} className="bg-gray-50 section-padding" id="video-section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
            Mira Este Video Revelador
          </h2>
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
            {/* Replace this with your actual video embed code */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center text-white">
              <p className="text-xl">Tu VSL irá aquí - Reemplaza este contenedor con tu video</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-700">
            <p className="text-lg font-medium">Este video exclusivo estará disponible por tiempo limitado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
