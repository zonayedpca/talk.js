import React, { useState } from 'react';
import axios from 'axios';

import { Input } from './input';
import { Button } from './button';

import './registerform.css';

export const RegisterForm = () => {
  const INTIAL_STATE = {
    name: '',
    phone: '',
    email: '',
    fb: '',
    error: '',
    success: '',
    loading: false
  }
  const [data, setData] = useState(INTIAL_STATE);
  const { name, phone, email, fb, error, success, loading } = data;
  const hasAllData = name.length && phone.length && email.length && fb.length;

  const handleChange = (input, name) => {
    setData({ ...data, error: '', success: '', loading: false, [name]: input });
  }

  const storeData = async() => {
    try {
      handleChange(true, 'loading')
      const { data: gotData } = await axios.post('https://meetupjs-gdydetsyal.now.sh/users', {
        name,
        phone,
        email,
        fb
      });
      if(gotData.success) {
        setData({ ...INTIAL_STATE, loading: false, success: gotData.message });
      } else {
        handleChange(`We couldn't store the data!`, 'error')
      }
    } catch(err) {
      handleChange(`Something went wrong with your request!`, 'error')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(hasAllData) {
      storeData();
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
      {loading && <p className="alert loading">We are storing your data...</p>}
      {(error || success ) && <p className={`alert ${error ? 'error' : 'success'}`}>{error || success}</p>}
      <Button style={{ marginTop: 25, backgroundColor: '#2e2e2e', color: '#fff', cursor: hasAllData ? 'pointer' : 'not-allowed', opacity: hasAllData ? 1 : 0.5 }} type="submit" title="Register" />
    </form>
  )
}
