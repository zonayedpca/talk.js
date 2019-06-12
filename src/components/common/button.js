import React from 'react';

import './button.css';

const Button = ({ type='button', style, title, onClick  }) => (
  <button style={style} onClick={onClick} type={type}>{title}</button>
)

export { Button };
