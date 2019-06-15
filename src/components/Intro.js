import React, { useState, useEffect } from 'react';

import { Container, Navbar } from './common';

import firebase from '../firebase';
import './intro.css';
import guy from '../assets/images/guy.png';

export default () => {
  const [positionY, setPostionY] = useState(0);
  const [totalPeople, setTotalPeople] = useState(0);
  const users = firebase.database().ref('users');

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setPostionY(window.pageYOffset * 2);
    })
    users.on('value', (snapshot) => {
      setTotalPeople(snapshot.numChildren());
    })
  })
  return (
    <div className="intro-area">
      <Container topPad="0">
        <Navbar />
        <div className="info">
          <div className="intro">
            <p>A Long-awaited Developers Event</p>
            <h1>Grand JavaScript Meetup</h1>
            <div className="details">
              <ul>
                <li>
                  <p>Location<small>Banani, Dhaka</small></p>
                </li>
                <li>
                  <p>Date<small>29 June, 2019</small></p>
                </li>
                <li>
                  <p>Registered<small>{totalPeople} People</small></p>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ transform: `translate3d(0, -${positionY}px, 0)` }} className="animation">
            <img alt="guy" src={guy} />
          </div>
        </div>
      </Container>
    </div>
  )
}
