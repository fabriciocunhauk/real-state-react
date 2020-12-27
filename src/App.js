import React from 'react';

import Dropdown from './components/dropdown.component/Dropdown';
import Hero from './components/hero.component/Hero';
import NavBar from './components/navbar.component/NavBar';

import { SliderData } from './data/SliderData';

import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Dropdown />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
