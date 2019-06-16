import React from 'react';

import SEO from './components/Seo';
import Intro from './components/Intro';
import Action from './components/Action';
import Speaker from './components/Speaker';
import Schedule from './components/Schedule';
import Sponsor from './components/Sponsor';
import Location from './components/Location';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <SEO />
      <Intro />
      <Action />
      <Speaker />
      <Schedule />
      <Sponsor />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
