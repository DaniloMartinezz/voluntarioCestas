import React from 'react';

interface CestaBasicaProps {
  name: string;
  description: string;
  value: string;
  link: string;
  image: string;
}

const CestaBasica: React.FC<CestaBasicaProps> = ({ name, description, value, link, image }) => (
  <div className="flex justify-center items-center md:flex-row">
    <div className="border-2 p-6 my-6 rounded-lg shadow-lg flex flex-col items-center justify-center bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
      <img src={image} alt={name} className="w-40 h-40 object-cover mb-4 rounded-full" />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{name}</h1>
      <p className="text-sm font-medium text-gray-700 text-center mb-4">{description}</p>
      <p className="text-lg font-semibold text-green-600 mb-4">{value}</p>
      <button
        onClick={() => window.location.href = link}
        className="py-2 px-6 bg-red-600 rounded-lg text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
      >
        Comprar {name}
      </button>
    </div>
  </div>
);

export default CestaBasica;
