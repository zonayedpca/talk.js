import React from 'react';

import { Container, Title, RegisterForm } from './common';

import './action.css';

export default () => {
  return (
    <div id="ticket" className="action-area">
      <Container>
        <div className="ticket-area">
          <div className="ticket-form">
            <Title title="Get Ticket" content="Hey there you want to join this event? Please Register Yourself beforehand" />
            <RegisterForm />
          </div>
          <div className="with-ticket">
            <h3>Each Ticket for BDT250</h3>
            <p>You will get</p>
            <ul>
              <li>T-Shirt</li>
              <li>Snacks</li>
              <li>Coffee</li>
              <li>Water</li>
              <li>And Valuable Seepch</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
