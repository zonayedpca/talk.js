import React from 'react';

import { Container, Title } from './common';

import './sponsor.css';

const sponsors = [
  { title: 'ThemeForest', image: require('../assets/sponsors/tf.png') },
  { title: 'ThemeForest', image: require('../assets/sponsors/tf.png') },
  { title: 'ThemeForest', image: require('../assets/sponsors/tf.png') },
  { title: 'ThemeForest', image: require('../assets/sponsors/tf.png') },
  { title: 'ThemeForest', image: require('../assets/sponsors/tf.png') },
  { title: 'ThemeForest', image: require('../assets/sponsors/tf.png') }
];

export default () => (
  <div id="sponsor" className="sponsor-area">
    <Container>
      <Title title="Sponsor" content="People who made this possible" />
      <div className="sponsor">
        { sponsors.map(({ title, image }, index) => (
          <div key={index} className="single">
            <img alt={title} src={image} />
          </div>
        )) }
      </div>
    </Container>
  </div>
)
