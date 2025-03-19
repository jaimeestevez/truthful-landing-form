
import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-[#002129] text-white py-16 md:py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#4BF52A]">
          NUESTROS CLIENTES
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Trabajamos con instituciones educativas a nivel global para digitalizar el proceso de emisión de certificados y desbloquear un nuevo potencial con tecnología que anteriormente era difícil de acceder.
          </p>
        </div>
        
        {/* Client logos section */}
        <div className="bg-[#f4f4f4] py-12 rounded-lg">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* This is a placeholder for client logos */}
            <div className="flex justify-center">
              <div className="w-48 h-24 bg-white/90 rounded flex items-center justify-center text-[#002129] font-bold">
                Cliente 1
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-24 bg-white/90 rounded flex items-center justify-center text-[#002129] font-bold">
                Cliente 2
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-24 bg-white/90 rounded flex items-center justify-center text-[#002129] font-bold">
                Cliente 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
