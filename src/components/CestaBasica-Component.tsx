import React from 'react';

interface CestaBasicaProps {
  name: string;
  description: string;
  value: string;
  link: string;
  image: string;
}

const CestaBasica: React.FC<CestaBasicaProps> = ({ name, description, value, link, image }) => (
  <div className="flex justify-center items-center md:flex-row ">
    <div className="border-2 p-10 my-3 flex flex-col items-center justify-center ">
      <img src={image} alt={name} className="w-32 h-32 object-cover mb-4" />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{value}</p>
      <button onClick={() => window.location.href = link} className="py-2 w-full border bg-red-600 rounded-lg text-white mt-4">Ir para {name}</button>
    </div>
  </div>
);

export default CestaBasica;