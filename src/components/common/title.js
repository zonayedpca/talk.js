import React from 'react';

import './title.css';

export const Title = ({ title, content }) => (
  <div className="title">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
)
