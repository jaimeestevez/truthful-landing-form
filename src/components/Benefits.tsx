
import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  {
    title: "Conocimiento Exclusivo",
    description: "Accede a información que solo el 1% de las personas conocen y utilizan para su beneficio."
  },
  {
    title: "Resultados Comprobados",
    description: "Sistema verificado con miles de personas que han transformado sus vidas completamente."
  },
  {
    title: "Fácil de Implementar",
    description: "Metodología paso a paso que cualquiera puede seguir, sin importar su experiencia previa."
  },
  {
    title: "Soporte Dedicado",
    description: "No estarás solo en este camino, contarás con todo el apoyo que necesites en cada paso."
  }
];

const Benefits = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Beneficios Que Transformarán Tu Vida
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-blue-50 p-6 rounded-lg shadow-md flex hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mr-4 mt-1">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
