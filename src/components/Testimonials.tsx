
import React from 'react';

const Testimonials = () => {
  const clients = [
    {
      name: "DEC",
      logo: "/lovable-uploads/cf633c3d-65b9-4178-8ecc-17952a9c0b31.png"
    },
    {
      name: "ESIC University",
      logo: "/lovable-uploads/c4221570-4ea7-4544-9020-5fb37be86b81.png"
    },
    {
      name: "The New Retail BUSINESS SCHOOL",
      logo: "/lovable-uploads/f2bd3528-3840-4be0-ac9a-6dbf8483a45f.png"
    },
    {
      name: "PROYECTO REANIMACION",
      logo: "/lovable-uploads/7316a229-7a80-409b-998f-5fa5cfc20258.png"
    }
  ];

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
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center">
                <div className="h-24 flex items-center justify-center px-4">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain" 
                    title={client.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
