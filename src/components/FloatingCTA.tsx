import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
interface FloatingCTAProps {
  typeformUrl: string;
}
const FloatingCTA: React.FC<FloatingCTAProps> = ({
  typeformUrl
}) => {
  const openTypeform = () => {
    window.open(typeformUrl, '_blank');
  };
  return <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <Button onClick={openTypeform} className="bg-[#5EEC3E] hover:bg-[#4dd02f] text-[#002B30] text-sm md:text-base font-bold rounded-full py-2 px-4 shadow-lg flex items-center gap-2 md:px-[20px] md:py-[8px]">
        Reserva una Demo <ExternalLink className="w-4 h-4" />
      </Button>
    </div>;
};
export default FloatingCTA;