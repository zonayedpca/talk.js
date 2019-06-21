import React from 'react';

import { Container, Title } from './common';

import './speaker.css';

const speakers = [
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1, topic: 'Electron', from: '03:00PM' },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1, topic: 'Electron', from: '03:00PM' },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1, topic: 'Electron', from: '03:00PM' },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1, topic: 'Electron', from: '03:00PM' },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1, topic: 'Electron', from: '03:00PM' },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1, topic: 'Electron', from: '03:00PM' },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1, topic: 'Electron', from: '03:00PM' },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1, topic: 'Electron', from: '03:00PM' }
]

export default () => (
  <div id="speaker" className="speaker-area">
    <Container>
      <Title title="Speaker" content="People You would love to listen" />
      <div className="speaker">
        <div className="mark start-time">
          <p>Start</p>
          <h4>08:00AM</h4>
        </div>
        { speakers.map(({ name, title, profile, topic, from }, index) => (
          <div key={index} className="single">
            <div className="speaker-details">
              <div className="image">
                <img alt={name} src={require(`../assets/speakers/${profile}.jpg`)} />
              </div>
              <div className="info">
                <h4>{name}</h4>
                <p>{title}</p>
              </div>
            </div>
            <div className="speaker-time">
              <h4>{from}</h4>
              <p>{topic}</p>
            </div>
          </div>
        )) }
        <div className="mark end-time">
          <h4>08:00AM</h4>
          <p>End</p>
        </div>
      </div>
    </Container>
  </div>
)
