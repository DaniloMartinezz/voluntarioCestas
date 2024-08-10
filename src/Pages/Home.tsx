import React from 'react';
import HeaderComponent from '../components/Home/Header-Component';
import CestaBasica from '../components/CestaBasica-Component';
import CestaPequena from '../assets/cestaPequena.png';
import CestaMedia from '../assets/cestaMedia.png';
import CestaGrande from '../assets/cestaGrande.png';

const Home: React.FC = () => (
  <div className="relative min-h-screen bg-gray-50">
    <HeaderComponent />
    <div className="container mx-auto p-4 md:p-10 mt-16">
      <div className="flex flex-col md:flex-row md:justify-around md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <CestaBasica
          name="Cesta Pequena"
          description="Contém itens básicos essenciais"
          value="R$ 50,00"
          image={CestaPequena}
          link="/cestabasica1"
        />
        <CestaBasica
          name="Cesta Fraterna"
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
        <CestaBasica
          name="Cesta Personalizada"
          description="Você decide o valor da doação"
          value=""
          image={CestaGrande}
          link="/cestabasica4"
        />
      </div>
    </div>
  </div>
);

export default Home;
