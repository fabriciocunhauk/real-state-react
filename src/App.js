import React, { useState } from 'react';
import Dropdown from './components/dropdown.component/Dropdown';
import Hero from './components/hero.component/Hero';
import NavBar from './components/navbar.component/NavBar';


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
    </>
  );
}

export default App;
