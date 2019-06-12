import React from 'react';

const Button = ({ type='button', title, onClick  }) => (
  <button onClick={onClick} type={type}>{title}</button>
)

export { Button };
