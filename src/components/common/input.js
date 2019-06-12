import React from 'react';

import './input.css';

export const Input = ({ name = 'Provide name props', placeholder = 'Provide placeholder props', value, onChange }) => (
  <input name={name} placeholder={placeholder} value={value} onChange={({ target: { value } }) => onChange(value, name)} />
)
