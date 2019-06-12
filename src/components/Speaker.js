import React from 'react';

import { Container, Title } from './common';

import './speaker.css';

const speakers = [
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1 },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1 },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1 },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1 },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1 },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1 },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1 },
  { name: 'Shahed Karim', title: 'CEO of Petropole', profile: 1 }
]

export default () => (
  <div className="speaker-area">
    <Container>
      <Title title="Speaker" content="People You would love to listen" />
      <div className="speaker">
        { speakers.map(({ name, title, profile }) => (
          <div className="single">
            <img alt={name} src={require(`../assets/speakers/${profile}.jpg`)} />
            <div className="info">
              <h4>{name}</h4>
              <p>{title}</p>
            </div>
          </div>
        )) }
      </div>
    </Container>
  </div>
)
