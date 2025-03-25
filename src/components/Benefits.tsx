
import React from 'react';
import { Clock, Coins, Database, Shield, Target, ListFilter } from 'lucide-react';

const benefits = [
  {
    title: "Ahorro de Tiempo",
    description: "Automatiza verificaciones y agiliza la selección para cerrar vacantes rápidamente.",
    icon: <Clock className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Ahorro de Costes",
    description: "Minimiza entrevistas inútiles y reduce el riesgo de contrataciones fallidas.",
    icon: <Coins className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Renovación de la Base de Datos",
    description: "Mantén tus registros siempre actualizados, eliminando perfiles obsoletos o dudosos.",
    icon: <Database className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Menor Incertidumbre y Riesgo",
    description: "Valida credenciales con mayor precisión y protege tu reputación ante clientes.",
    icon: <Shield className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Reclutamiento Proactivo y Reactivo",
    description: "Anticipa picos de demanda y cubre posiciones urgentes con talento verificado.",
    icon: <Target className="h-8 w-8 text-[#4BF52A]" />
  },
  {
    title: "Cualificación de la BBDD",
    description: "Ordena y filtra perfiles según habilidades y fiabilidad, presentando opciones certeras.",
    icon: <ListFilter className="h-8 w-8 text-[#4BF52A]" />
  }
];

const Benefits = () => {
  return (
    <section className="bg-[#ffffff] py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002129]">
          Beneficios para tu ETT
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#f9f9f9] p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-5px] hover:bg-[#f5fff0] transition-all"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-[#002129] p-4 rounded-full shadow-md">
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
