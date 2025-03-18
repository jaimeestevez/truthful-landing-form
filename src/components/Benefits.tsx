
import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  {
    title: "Centros formativos",
    description: "Empodera a tus alumnos en su camino hacia el éxito con certificaciones verificables y transparentes."
  },
  {
    title: "Empresas",
    description: "Optimiza tus procesos de selección utilizando información verificada y precisa de los candidatos."
  },
  {
    title: "Estudiantes",
    description: "Gestiona tus credenciales verificadas y optimiza tus procesos de selección laboral."
  },
  {
    title: "Blockchain",
    description: "Tecnología que garantiza la inmutabilidad y transparencia de todos los certificados emitidos."
  }
];

const Benefits = () => {
  return (
    <section className="bg-[#ffffff] section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002129]">
          Beneficios de The Truth
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#f9f9e6] p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-[#002129] p-3 rounded-full">
                  <Check className="h-6 w-6 text-[#4BF52A]" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#002129]">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
              <div className="mt-auto pt-4 flex justify-center">
                <button className="bg-[#002129] text-white px-4 py-2 rounded-md text-sm">
                  Más detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
