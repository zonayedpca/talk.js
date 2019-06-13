import React from 'react';

import './container.css';

const Container =({ children, topPad }) => (
  <div style={{ paddingTop: topPad && topPad  }} className="container">
    {children}
  </div>
)

export { Container };
