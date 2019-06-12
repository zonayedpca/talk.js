import React from 'react';

import { Container, Navbar } from './common';

import './intro.css';

export default () => (
  <div className="intro-area">
    <Container topPad="0">
      <Navbar />
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
              <p>Registered<small>120 People</small></p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
)