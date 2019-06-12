import React, { useState } from 'react';

import { Input } from './input';
import { Button } from './button';

export const RegisterForm = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    fb: '',
    error: '',
    success: ''
  });

  const { name, phone, email, fb } = data;

  const handleChange = (input, name) => {
    setData({ ...data, [name]: input });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length && phone.length && email.length && fb.length) {
      console.log('Submit Now to Firebase');
    } else {
      handleChange('All the information are required!', 'error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Input name="name" placeholder="Enter your name" value={name} onChange={handleChange} />
        <Input name="phone"placeholder="Enter your phone" value={phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <Input name="email" placeholder="Enter your Email" value={email} onChange={handleChange} />
        <Input name="fb" placeholder="Enter your Facebook ID" value={fb} onChange={handleChange} />
      </div>
      <Button type="submit" title="Register" />
    </form>
  )
}
