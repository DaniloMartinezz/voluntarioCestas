// src/Pages/CestaBasica2.tsx
import React from 'react';
import CestaBasica from '../components/CestaBasica-Component';
import CestaMedia from '../assets/cestaMedia.png'

const CestaBasica2: React.FC = () => (
  <CestaBasica name="Cesta Básica 2" description="Descrição da Cesta Básica 2" value="R$ 75,00" image={CestaMedia} link="/cestabasica2" />
);

export default CestaBasica2;