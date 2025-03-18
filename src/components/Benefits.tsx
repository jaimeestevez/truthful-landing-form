
import React from 'react';
import { Globe, Clock, Coins, Users, FileCheck, Award } from 'lucide-react';

const benefits = [
  {
    title: "Reconocimiento Global",
    description: "Potencia tus credenciales con tecnología blockchain. ¡Verificables en todo el mundo!",
    icon: <Globe className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Verificación Instantánea",
    description: "Simplifica el proceso de verificación para estudiantes egresados y exalumnos.",
    icon: <Clock className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Reducción de Costes",
    description: "Reduce costes administrativos con nuestra plataforma eficiente y operativa.",
    icon: <Coins className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Participación de Exalumnos",
    description: "Conecta y potencia tu red de exalumnos con tokenización de credenciales.",
    icon: <Users className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Credenciales de Última Generación",
    description: "Agiliza la digitalización de tus credenciales académicas para asegurar su conformidad.",
    icon: <FileCheck className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Credibilidad Mejorada",
    description: "Eleva tu reputación y prestigio a través de la digitalización de credenciales verificables.",
    icon: <Award className="h-8 w-8 text-[#4BF52A]" />
  }
];

const Benefits = () => {
  return (
    <section className="bg-[#ffffff] section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002129]">
          Beneficios para Centros Formativos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#f9f9f9] p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-[#002129] p-3 rounded-full">
                  {benefit.icon}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#002129]">{benefit.title}</h3>
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
