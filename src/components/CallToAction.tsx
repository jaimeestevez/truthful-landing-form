
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
    <section className="bg-[#002B30] text-white section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#00C4AB]">
            Revoluciona Tu ETT
          </h2>
          <p className="text-xl text-[#EDFFEE]/90">
            Únete a las empresas de trabajo temporal que ya están transformando la forma de verificar y gestionar credenciales, optimizando sus procesos y reduciendo riesgos de contratación.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button 
              onClick={openTypeform}
              className="bg-[#5EEC3E] hover:bg-[#4dd02f] text-[#002B30] text-lg font-bold rounded-full py-6 px-10 group flex items-center gap-2"
            >
              Solicitar Demo
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-[#EDFFEE]/60">* Sin compromiso, plazas limitadas para la demo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
