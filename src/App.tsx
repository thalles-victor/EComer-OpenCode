import React from 'react'
import { Baner } from './Components/Baner';
import { Cards } from './Components/Cards';
import { ContactIcon } from './Components/ContactIcon';
import { FooterInfo } from './Components/FooterInfo';

import { Header } from './Components/Header';

function App() {

  return (
    <>
      <Header />
      <ContactIcon />
      <Baner />
      <Cards />
      <Baner />
      <FooterInfo />
    </>
  )
}

export default App
