import React from 'react';

import meeting from '../../assets/images/meeting.svg';
import './logo.css';

const Logo = () => (
  <div className="logo-area">
    <div className="logo">
      <img alt="Meetup.js" src={meeting} />
    </div>
    <p>Meetup.js</p>
  </div>
)

export { Logo };
