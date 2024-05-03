import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>© 2024 Seu Site. Todos os direitos reservados.</p>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
          <li><a href="#" className="hover:text-gray-300">Serviços</a></li>
          <li><a href="#" className="hover:text-gray-300">Contato</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
