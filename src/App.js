import React from 'react';
import { initializeApp } from 'firebase';

import Intro from './components/Intro';
import Action from './components/Action';
import Speaker from './components/Speaker';
import Schedule from './components/Schedule';
import Sponsor from './components/Sponsor';
import Location from './components/Location';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDxm5_Jrui_XeII6wzBOFm3tLRlRz0ZyHs",
    authDomain: "meetupjs-dev.firebaseapp.com",
    databaseURL: "https://meetupjs-dev.firebaseio.com",
    projectId: "meetupjs-dev",
    storageBucket: "meetupjs-dev.appspot.com",
    messagingSenderId: "902400933214",
    appId: "1:902400933214:web:0f2472d57d08b8c1"
  };
  initializeApp(firebaseConfig);
  return (
    <div className="App">
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
