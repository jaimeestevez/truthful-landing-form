
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Carlos Martínez",
    position: "Director de Universidad Técnica",
    testimonial: "The Truth nos permitió digitalizar todos nuestros certificados académicos, lo que ha mejorado considerablemente la credibilidad de nuestra institución.",
    initials: "CM"
  },
  {
    name: "Laura González",
    position: "Coordinadora Académica, Instituto Superior",
    testimonial: "Pudimos reducir nuestros costes administrativos en un 40% y agilizar todos los procesos de verificación de credenciales para nuestros alumnos.",
    initials: "LG"
  },
  {
    name: "Javier Rodríguez",
    position: "Director de Escuela de Negocios",
    testimonial: "La integración de blockchain para nuestros certificados ha elevado el prestigio de nuestra institución y ampliado nuestro alcance internacional.",
    initials: "JR"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002129]">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-[#002129] text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
