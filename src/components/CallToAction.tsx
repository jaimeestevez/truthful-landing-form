
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface CallToActionProps {
  typeformUrl: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ typeformUrl }) => {
  const openTypeform = () => {
    window.open(typeformUrl, '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            No Dejes Pasar Esta Oportunidad
          </h2>
          <p className="text-xl text-blue-100">
            Las plazas son limitadas y esta oferta especial estará disponible solo por tiempo limitado
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button 
              onClick={openTypeform}
              className="btn-cta text-lg group flex items-center gap-2"
            >
              Quiero Acceder Ahora
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-blue-200">* Sin compromiso, cancela cuando quieras</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
