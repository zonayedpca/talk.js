import React from 'react';

import { Container, Title } from './common';

import './about.css';

const About = () => (
    <div className="about-area">
      <Container>
        <div className="about">
          <div className="about-details">
            <Title title="About This Conference" />
            <p>As a viewer, you can pause and edit the code at any given time. So if you're struggling to understand something, just hit pause.</p>
            <p>No more setup, edit, encode, upload and re-encode. Just code while you talk and then publish it instantly.</p>
            <div className="about-action">
              <a href="#ticket" className="btn btn-ticket">Buy Ticket</a>
              <a href="#speaker" className="btn btn-more">Know More</a>
            </div>
          </div>
          <div className="about-video">
            Video Here
          </div>
        </div>
      </Container>
    </div>
)

export default About;
