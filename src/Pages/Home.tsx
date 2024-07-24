import React from 'react';
import HeaderComponent from '../components/Home/Header-Component';
import CestaBasica from '../components/CestaBasica-Component';
import CestaPequena from '../assets/cestaPequena.png';
import CestaMedia from '../assets/cestaMedia.png';
import CestaGrande from '../assets/cestaGrande.png';

const Home: React.FC = () => (
  <div className="relative">
    <HeaderComponent />
    <div className="md:flex md:justify-around md:items-center md:mt-32 mt-16 px-4">
      <CestaBasica
        name="Cesta Pequena"
        description="Contém itens básicos essenciais"
        value="R$ 50,00"
        image={CestaPequena}
        link="/cestabasica1"
      />
      <CestaBasica
        name="Cesta Média"
        description="Variedade maior de alimentos essenciais"
        value="R$ 100,00"
        image={CestaMedia}
        link="/cestabasica2"
      />
      <CestaBasica
        name="Cesta Grande"
        description="Itens variados para atender a família"
        value="R$ 150,00"
        image={CestaGrande}
        link="/cestabasica3"
      />
    </div>
  </div>
);

export default Home;
