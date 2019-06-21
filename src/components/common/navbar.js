import React, { useState, useEffect } from 'react';

import { Brand } from './brand';

import './navbar.css';

export const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 600) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    })
  })

  const onSelfScroll = (e, id) => {
    const el = document.getElementById(id);
    const top = el.offsetTop - 80;
    e.preventDefault();
    setMobileNav(!mobileNav);
    window.scroll({top, left: 0, behavior: 'smooth' });
  }

  return (
    <div className={`navbar ${fixed && `fixed`}`}>
      <Brand />
      <ul className={`menu ${mobileNav ? 'mobile-nav' : ''}`}>
        <li><a onClick={(e) => onSelfScroll(e, 'intro')} href="#intro">Home</a></li>
        <li><a onClick={(e) => onSelfScroll(e, 'about')} href="#about">About</a></li>
        <li><a onClick={(e) => onSelfScroll(e, 'speaker')} href="#speaker">Speaker</a></li>
        <li><a onClick={(e) => onSelfScroll(e, 'sponsor')} href="#sponsor">Sponsor</a></li>
        <li><a onClick={(e) => onSelfScroll(e, 'location')} href="#location">Place</a></li>
        <li><a onClick={(e) => onSelfScroll(e, 'ticket')} className="btn" href="#ticket">Buy Ticket</a></li>
      </ul>
      <div onClick={() => setMobileNav(!mobileNav)} className="mobile-menu">
        Menu
      </div>
    </div>
  )
}
