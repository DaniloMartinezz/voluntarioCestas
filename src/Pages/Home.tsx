import React from 'react';
import HeaderComponent from '../components/Home/Header-Component';
import { Link } from 'react-router-dom';
import CestaBasica from '../components/CestaBasica-Component';
import Exemplo from '../assets/exemplo.png'
const Home: React.FC = () => (
  <div>
    <HeaderComponent/>
    <h1>Home</h1>
    <div className="md:flex md:justify-around md:items-center md:mt-32">
    <CestaBasica name="Cesta Pequena" description="Descrição da Cesta Básica 1" value="R$ 50,00" image={Exemplo} link="/cestabasica1" />
    <CestaBasica name="Cesta Média" description="Descrição da Cesta Básica 2" value="R$ 100,00" image={Exemplo} link="/cestabasica2" />
    <CestaBasica name="Cesta Grande" description="Descrição da Cesta Básica 3" value="R$ 150,00" image={Exemplo} link="/cestabasica3" />
    </div>

  </div>
);

export default Home;

