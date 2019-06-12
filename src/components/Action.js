import React, { useState } from 'react';

import { Container, Title, Button, RegisterForm } from './common';

import './action.css';

export default () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="action-area">
      <Container>
        <Title title="Get Enrolled" content="Hey there you want to join this event? Please Register Yourself beforehand" />
        <div className="action">
          <ul>
            <li><Button style={{ backgroundColor: '#2e2e2e', color: '#fff' }} onClick={() => setShowForm(!showForm)} title={showForm ? 'Hide' : 'Register Now'} /></li>
          </ul>
        </div>
        { showForm && <RegisterForm />}
      </Container>
    </div>
  )
}
