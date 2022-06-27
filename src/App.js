import './App.scss';
import React from 'react';

import {About, Footer,Header,Skills,Certifications,Works} from './container';
import { Navbar } from './components';

const App = () => {
  return (
   <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Certifications />
      <Works />
      <Footer />
   </div>
  )
}

export default App;