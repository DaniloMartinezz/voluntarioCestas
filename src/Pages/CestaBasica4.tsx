import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline';
import HeaderComponent from '../components/Home/Header-Component';
import CestaGrande from '../assets/cestaGrande.png';
import QrCode from '../assets/qrCodePersonalizado.jpeg';

const CestaBasica4: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const paymentCode = '00020126680014br.gov.bcb.pix0136297b95f1-9c1b-40d9-abf3-b7d9d2e90ae00206Doacao5204000053039865802BR5925CENTRO DE ESTUDOS ESPIRIT6008Campinas62290525CENTRODE00000351032044ASA63042DED';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Erro ao copiar código: ', err);
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <HeaderComponent />

      <div className="container mx-auto p-4 md:p-10 mt-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Cesta Personalizada</h1>
            <Link to="/" className="text-gray-900 hover:text-gray-700">
              <XCircleIcon className="h-8 w-8" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/3">
              <img src={CestaGrande} alt="Cesta Personalizada" className="w-full rounded-lg shadow-md" />
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sobre a Cesta</h2>
              <p className="text-base text-gray-700 mb-6">
                Esta cesta é ideal para quem deseja contribuir com qualquer valor desejado. Você pode escolher o valor que deseja pagar diretamente no seu aplicativo de pagamento.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Contribuir</h2>
              <p className="text-base text-gray-700 mb-4">
                Para contribuir com esta cesta, basta escanear o QR Code abaixo com o seu aplicativo de pagamento favorito. 
                Após escanear, você poderá definir o valor da contribuição diretamente no aplicativo.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Contribuir</h2>
            <p className="text-base text-gray-700 mb-4">
              Utilize o QR Code abaixo para realizar sua contribuição. O valor será ajustado conforme sua escolha no aplicativo de pagamento.
            </p>
            <div className="flex justify-center mb-4">
              <img src={QrCode} alt="QR Code para pagamento" className="w-40 h-40" />
            </div>
            <p className="text-center text-xl font-bold text-gray-900">Escaneie e Contribua</p>
            
            <div className="flex flex-col items-center">
              {copied && (
                <p className="text-green-500 mb-2 animate-bounce">
                  Código copiado com sucesso!
                </p>
              )}
              <button
                onClick={copyToClipboard}
                className="bg-blue-600 text-white font-semibold py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
              >
                Copiar código PIX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CestaBasica4;
