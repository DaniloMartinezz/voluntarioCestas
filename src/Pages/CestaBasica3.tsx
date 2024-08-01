import React from 'react';
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline';
import HeaderComponent from '../components/Home/Header-Component';
import CestaGrande from '../assets/cestaGrande.png';
import QrCode from '../assets/qrbasica.jpeg';

const CestaBasica3: React.FC = () => (
  <div className="relative min-h-screen bg-gray-50">
    <HeaderComponent />
    
    <div className="container mx-auto p-4 md:p-10 mt-16">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Cesta Completa</h1>
          <Link to="/" className="text-gray-900 hover:text-gray-700">
            <XCircleIcon className="h-8 w-8" />
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/3">
            <img src={CestaGrande} alt="Cesta Completa" className="w-full rounded-lg shadow-md" />
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resumo da Cesta</h2>
            <p className="text-base text-gray-700 mb-6">
              A Cesta Completa é ideal para pequenos lares, contendo itens básicos essenciais como achocolatado, açúcar, arroz, café, creme dental, feijão, flocão de milho, macarrão, molho de tomate, óleo, sabonete e sardinha.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conteúdo da Cesta</h2>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-2 mb-6">
              <li>1 pacote de achocolatado</li>
              <li>1kg de açúcar</li>
              <li>1kg de arroz</li>
              <li>1 pacote de café</li>
              <li>1 tubo de creme dental</li>
              <li>1kg de feijão</li>
              <li>1 pacote de flocão de milho</li>
              <li>500g de macarrão</li>
              <li>1 lata de molho de tomate</li>
              <li>1L de óleo</li>
              <li>1 sabonete</li>
              <li>1 lata de sardinha</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Comprar</h2>
          <p className="text-base text-gray-700 mb-4">
            Para comprar esta cesta, basta escanear o QR Code abaixo com o seu aplicativo de pagamento favorito e seguir as instruções na tela.
          </p>
          <div className="flex justify-center mb-4">
            <img src={QrCode} alt="QR Code para pagamento" className="w-40 h-40" />
          </div>
          <p className="text-center text-xl font-bold text-gray-900">Escaneie e Compre</p>
          <p className="text-center text-base text-gray-700">Utilize o QR Code acima para realizar a compra da Cesta Completa por <span className="font-bold">R$ 150,00</span>.</p>
        </div>
      </div>
    </div>
  </div>
);

export default CestaBasica3;
