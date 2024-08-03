import React, { useState } from 'react';
import { ShoppingCartIcon, PhoneIcon, UserCircleIcon, Bars3Icon, XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import WhiteLogo from '../../assets/whiteLogo.png';

const HeaderComponent: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-red-600 z-50 shadow-lg">
      <div className="flex items-center">
        <img src={WhiteLogo} alt="IsabelAragao" className="w-16" />
      </div>
      <nav className="hidden md:flex items-center space-x-4 text-gray-50 text-sm">
        <a href="/" className="flex items-center space-x-1">
          <ShoppingCartIcon className="h-4 w-4" />
          <span>Produtos</span>
        </a>
        <span className="text-gray-300">|</span>
        <a href="https://www.instagram.com/programa_isabeldearagao/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
          <InformationCircleIcon className="h-4 w-4" />
          <span>Fale Conosco</span>
        </a>
        <span className="text-gray-300">|</span>
        <a href="https://nossolarcampinas.org.br/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
          <UserCircleIcon className="h-4 w-4" />
          <span>Nosso Lar</span>
        </a>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-50 focus:outline-none">
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-red-600 text-gray-50 text-sm flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="/" className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded-md w-full text-center">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Produtos</span>
          </a>
          <a href="https://www.instagram.com/programa_isabeldearagao/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded-md w-full text-center">
            <PhoneIcon className="h-5 w-5" />
            <span>Fale Conosco</span>
          </a>
          <a href="https://nossolarcampinas.org.br/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded-md w-full text-center">
            <UserCircleIcon className="h-5 w-5" />
            <span>Nosso Lar</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
