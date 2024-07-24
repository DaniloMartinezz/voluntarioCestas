// src/Pages/CestaBasica3.tsx
import React from 'react';
import CestaBasica from '../components/CestaBasica-Component';
import CestaGrande from '../assets/cestaGrande.png'

const CestaBasica3: React.FC = () => (
  <CestaBasica name="Cesta Básica 3" description="Descrição da Cesta Básica 3" value="R$ 100,00" image={CestaGrande} link="/cestabasica3" />
);

export default CestaBasica3;