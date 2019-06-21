import React from 'react';

import SEO from './components/Seo';
import Intro from './components/Intro';
import About from './components/About';
import Action from './components/Action';
import Speaker from './components/Speaker';
import Sponsor from './components/Sponsor';
import Location from './components/Location';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <SEO />
      <Intro />
      <About />
      <Speaker />
      <Sponsor />
      <Location />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
