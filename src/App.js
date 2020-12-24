import React from 'react';
import Hero from './components/hero.component/Hero';
import NavBar from './components/navbar.component/NavBar';

import { SliderData } from './data/SliderData';


import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
