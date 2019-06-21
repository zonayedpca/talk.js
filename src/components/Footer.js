import React from 'react';

import { Container, Logo } from './common';

import './footer.css';

export default () => {
  const onTopScroll = e => {
    e.preventDefault();
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <footer className="footer-area">
      <Container>
        <div className="footer">
          <div className="event">
            <Logo />
            <h3>Talk.js</h3>
          </div>
          <ul>
            <li><a target="__blank" rel="noopener noreferrer" href="https://devsonket.com">Link1</a></li>
            <li><a target="__blank" rel="noopener noreferrer" href="https://devsonket.com">Link2</a></li>
            <li><a target="__blank" rel="noopener noreferrer" href="https://devsonket.com">Link3</a></li>
            <li><a target="__blank" rel="noopener noreferrer" href="https://devsonket.com">Link4</a></li>
            <li><a target="__blank" rel="noopener noreferrer" href="https://devsonket.com">Link5</a></li>
            <li><a target="__blank" rel="noopener noreferrer" href="https://devsonket.com">Link6</a></li>
            <li className="top"><a onClick={onTopScroll} target="__blank" rel="noopener noreferrer" href="https://devsonket.com">Top</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
