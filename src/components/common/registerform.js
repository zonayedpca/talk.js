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
  const hasAllData = name.length && phone.length && email.length && fb.length;

  const handleChange = (input, name) => {
    setData({ ...data, [name]: input });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(hasAllData) {
      console.log('Submit Now to Firebase');
    } else {
      handleChange('All the information are required!', 'error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Input name="name" placeholder="Your Name" value={name} onChange={handleChange} />
        <Input name="phone"placeholder="Your Phone" value={phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <Input name="email" placeholder="Your Email" value={email} onChange={handleChange} />
        <Input name="fb" placeholder="Your Facebook Username" value={fb} onChange={handleChange} />
      </div>
      <Button style={{ marginTop: 25, backgroundColor: hasAllData ? '#2e2e2e' : '#bebebe', color: hasAllData ? '#fff' : '#2e2e2e', cursor: hasAllData ? 'pointer' : 'not-allowed' }} type="submit" title="Register" />
    </form>
  )
}
