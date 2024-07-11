// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CestaBasica1 from './Pages/CestaBasica1';
import CestaBasica2 from './Pages/CestaBasica2';
import CestaBasica3 from './Pages/CestaBasica3';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cestabasica1" element={<CestaBasica1 />} />
    <Route path="/cestabasica2" element={<CestaBasica2 />} />
    <Route path="/cestabasica3" element={<CestaBasica3 />} />
  </Routes>
);

export default App;