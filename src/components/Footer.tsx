
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002129] text-gray-300 py-12">
      <div className="container">
        <div className="text-center md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-[#4BF52A] mb-2">TheTruth.es</h3>
            <p className="text-sm">Verificación transparente de credenciales académicas</p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 justify-center">
              <li>
                <a href="#" className="hover:text-[#4BF52A] transition-colors">¿A quién va dirigido?</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4BF52A] transition-colors">¿Cómo funciona?</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4BF52A] transition-colors">Quiénes somos</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4BF52A] transition-colors">Contacto</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4BF52A] transition-colors">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">© {currentYear} TheTruth.es. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
