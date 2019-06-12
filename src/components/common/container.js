import React from 'react';

import './container.css';

const Container =({ children, topPad=100 }) => (
  <div style={{ paddingTop: topPad }} className="container">
    {children}
  </div>
)

export { Container };
