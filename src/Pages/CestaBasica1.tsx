import React from 'react';
import CestaBasica from '../components/CestaBasica-Component';
import Exemplo from '../assets/exemplo.png'

const CestaBasica1: React.FC = () => (
  <CestaBasica name="Cesta Básica 1" description="Descrição da Cesta Básica 1" value="R$ 50,00" image={Exemplo} link="/cestabasica1" />
);

export default CestaBasica1;