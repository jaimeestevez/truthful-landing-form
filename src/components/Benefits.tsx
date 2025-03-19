
import React from 'react';
import { Briefcase, Clock, Coins, Award, FileCheck, GraduationCap } from 'lucide-react';

const benefits = [
  {
    title: "Mejora de la Empleabilidad",
    description: "Potencia las oportunidades laborales de tus estudiantes con credenciales verificadas.",
    icon: <Briefcase className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Verificación Instantánea",
    description: "Simplifica la validación inmediata de certificados para alumnos y empresas.",
    icon: <Clock className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Reducción de Costes y Tiempos",
    description: "Optimiza procesos administrativos eliminando tareas manuales innecesarias.",
    icon: <Coins className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Prestigio y Credibilidad",
    description: "Refuerza la reputación de tu centro con credenciales digitales seguras y confiables.",
    icon: <Award className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Credenciales de Última Generación",
    description: "Agiliza la digitalización segura de tus certificados mediante blockchain.",
    icon: <FileCheck className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Participación y Seguimiento de Exalumnos",
    description: "Conecta y monitoriza tu red de egresados para mejorar continuamente tu oferta formativa.",
    icon: <GraduationCap className="h-8 w-8 text-[#4BF52A]" />
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
