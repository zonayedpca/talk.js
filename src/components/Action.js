import React, { useState } from 'react';

import { Container, Title, Button, RegisterForm } from './common';

import './action.css';
import cat from '../assets/animations/cat.gif';

export default () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="action-area">
      <Container>
        <Title title="Get Registered" content="Hey there you want to join this event? Please Register Yourself beforehand" />
        <div className="action">
          <ul>
            <li><Button style={{ background: '#045fa4' }} onClick={() => setShowForm(!showForm)} title={showForm ? 'Hide' : 'Register Now'} /></li>
          </ul>
        </div>
        { showForm ? <RegisterForm /> :
          <div className="wait">
            <div>
              <img alt="cat" src={cat} />
            </div>
            <p>If You want to know more about this event, scroll below...</p>
          </div>}
      </Container>
    </div>
  )
}
