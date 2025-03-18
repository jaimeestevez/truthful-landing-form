
import React, { useRef } from 'react';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Replace this URL with your actual Typeform URL
  const typeformUrl = "https://thetruth.es/soluciones/centros-formativos/";
  
  const videoRef = useRef<HTMLDivElement>(null);
  
  const scrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero scrollToVideo={scrollToVideo} />
        <VideoSection videoRef={videoRef} />
        <Benefits />
        <Testimonials />
        <CallToAction typeformUrl={typeformUrl} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
