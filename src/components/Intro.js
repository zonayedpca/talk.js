import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Navbar, CountDown } from './common';

import './intro.css';

export default () => {
  const [count, setCount] = useState('...');

  useEffect(() => {
    getCount();
  })

  const getCount = async() => {
    try {
      const { data } = await axios('https://meetupjs-gdydetsyal.now.sh/users/count');
      setCount(data.total)
    } catch {
      setCount('...')
    }
  }

  return (
    <div id="intro" className="intro-area">
      <Container topPad="0">
        <Navbar />
        <div className="info">
          <div className="intro">
            <CountDown />
            <h1>Grand JavaScript Meetup</h1>
            <p>A Long-awaited Developers Event</p>
            <div className="details">
              <ul>
                <li>
                  <p>Location<small>Banani, Dhaka</small></p>
                </li>
                <li>
                  <p>Date<small>29 June, 2019</small></p>
                </li>
                <li>
                  <p>Registered<small>{count} People</small></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
