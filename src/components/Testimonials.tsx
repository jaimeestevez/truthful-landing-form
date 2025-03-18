
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    position: "Empresario",
    testimonial: "Este descubrimiento cambió completamente mi perspectiva de negocio. Los resultados fueron inmediatos y significativos.",
    initials: "CR"
  },
  {
    name: "María González",
    position: "Profesional Independiente",
    testimonial: "Estaba escéptica al principio, pero después de aplicar esta información, mi carrera dio un giro de 180 grados.",
    initials: "MG"
  },
  {
    name: "Juan Martínez",
    position: "Inversor",
    testimonial: "La claridad y precisión de esta información me permitió tomar decisiones que triplicaron mis inversiones en solo 6 meses.",
    initials: "JM"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
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
                  <AvatarFallback className="bg-blue-700 text-white">
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
