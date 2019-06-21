import React from 'react';

import { Container, Title } from './common';

import './about.css';

const About = () => {
  const onSelfScroll = (e, id) => {
    const el = document.getElementById(id);
    const top = el.offsetTop - 80;
    e.preventDefault();
    window.scroll({top, left: 0, behavior: 'smooth' });
  }

  return (
      <div id="about" className="about-area">
        <Container>
          <div className="about">
            <div className="about-details">
              <Title title="About This Conference" />
              <p>As a viewer, you can pause and edit the code at any given time. So if you're struggling to understand something, just hit pause.</p>
              <p>No more setup, edit, encode, upload and re-encode. Just code while you talk and then publish it instantly.</p>
              <div className="about-action">
                <a onClick={(e) => onSelfScroll(e, 'ticket')} href="#ticket" className="btn btn-ticket">Buy Ticket</a>
                <a onClick={(e) => onSelfScroll(e, 'speaker')} href="#speaker" className="btn btn-more">Know More</a>
              </div>
            </div>
            <div className="about-video">
              Video Here
            </div>
          </div>
        </Container>
      </div>
  )
}

export default About;
