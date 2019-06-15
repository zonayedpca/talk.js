import React, { useState } from 'react';

import { Input } from './input';
import { Button } from './button';

import firebase from '../../firebase';
import './registerform.css';

export const RegisterForm = () => {
  const INTIAL_STATE = {
    name: '',
    phone: '',
    email: '',
    fb: '',
    error: '',
    success: ''
  }
  const [data, setData] = useState(INTIAL_STATE);
  const users = firebase.database().ref('users');
  const { name, phone, email, fb, error, success } = data;
  const hasAllData = name.length && phone.length && email.length && fb.length;

  const handleChange = (input, name) => {
    setData({ ...data, [name]: input });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(hasAllData) {
      users.push({
        name,
        phone,
        email,
        fb
      }, (error) => {
        if(error) {
          handleChange('Something went wrong! Try Again', 'error');
        } else {
          setData({ ...INTIAL_STATE, success: 'You record has been stored sucesfully!' });
        }
      });
    } else {
      handleChange('All the information are required!', 'error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Input name="name" placeholder="Name" value={name} onChange={handleChange} />
        <Input name="phone"placeholder="Phone" value={phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <Input name="email" placeholder="Email" value={email} onChange={handleChange} />
        <Input name="fb" placeholder="Facebook Username" value={fb} onChange={handleChange} />
      </div>
      {(error || success ) && <p className={`alert ${error ? 'error' : 'success'}`}>{error || success}</p>}
      <Button style={{ marginTop: 25, backgroundColor: hasAllData ? '#2e2e2e' : '#fff', color: hasAllData ? '#fff' : '#2e2e2e', cursor: hasAllData ? 'pointer' : 'not-allowed', opacity: hasAllData ? 1 : 0.5 }} type="submit" title="Register" />
    </form>
  )
}
