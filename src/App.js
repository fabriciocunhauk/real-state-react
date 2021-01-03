import React, { useState } from 'react';
import Dropdown from './components/dropdown.component/Dropdown';
import Hero from './components/hero.component/Hero';
import InfoSection from './components/infoSection.component/InfoSection';
import NavBar from './components/navbar.component/NavBar';
import { InfoData } from './data/infoData';


import { SliderData } from './data/SliderData';

import { GlobalStyles } from './styles/global';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyles />
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
