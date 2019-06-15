import React, { useState, useEffect, useRef } from 'react';

import { Container, Title, Button, RegisterForm } from './common';

import './action.css';
import cat from '../assets/animations/cat.gif';

export default () => {
  const [showForm, setShowForm] = useState(false);
  const [positionX, setPostionX] = useState(0);
  const catRef = useRef();

  useEffect(() => {
    if(!showForm) {
      const startMoving = catRef.current.offsetTop - 200;
      window.addEventListener('scroll', () => {
        if(window.pageYOffset > startMoving) {
          setPostionX((window.pageYOffset - startMoving) * 2);
        }
      })
    }
  })

  return (
    <div className="action-area">
      <Container>
        <Title title="Get Registered" content="Hey there you want to join this event? Please Register Yourself beforehand" />
        <div className="action">
          <ul>
            <li><Button style={{ borderColor: '#045fa4', color: '#045fa4' }} onClick={() => setShowForm(!showForm)} title={showForm ? 'Hide' : 'Register Now'} /></li>
          </ul>
        </div>
        { showForm ? <RegisterForm /> :
          <div className="wait">
            <div style={{ transform: `translate3d(${positionX}px, 0, 0)` }} ref={catRef}>
              <img alt="cat" src={cat} />
            </div>
            <p>If You want to know more about this event, scroll below...</p>
          </div>}
      </Container>
    </div>
  )
}
