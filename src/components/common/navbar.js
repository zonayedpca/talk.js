import React from 'react';

import { Brand } from './brand';

import './navbar.css';

export const Navbar = () => (
  <div className="navbar">
    <Brand />
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#speaker">Speaker</a></li>
      <li><a href="#sponsor">Sponsor</a></li>
      <li><a href="#location">Place</a></li>
      <li><a className="btn" href="#ticket">Buy Ticket</a></li>
    </ul>
  </div>
)
