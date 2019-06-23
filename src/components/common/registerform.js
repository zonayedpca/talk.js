import React, { useState } from 'react';
import axios from 'axios';

import { Input } from './input';
import { Button } from './button';

import './registerform.css';

// const TR_USER_LIMIT = 100;

const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const validatePhone = (phone) => {
  var re = /^(?:\+88|01)?\d{11}$/;
  return re.test(phone);
}

export const RegisterForm = () => {
  const INTIAL_STATE = {
    name: '',
    phone: '',
    email: '',
    fb: '',
    trid: '',
    error: '',
    success: '',
    loading: false
  }
  const [data, setData] = useState(INTIAL_STATE);
  const { name, phone, email, fb, trid, error, success, loading } = data;
  const hasAllData = name.length > 2 && validatePhone(phone) && validateEmail(email) && trid.length > 3;

  const handleChange = (input, name) => {
    setData({ ...data, error: '', success: '', loading: false, [name]: input });
  }

  const storeData = async() => {
    try {
      handleChange(true, 'loading')
      const { data: gotData } = await axios.post('https://meetupjsdev.now.sh/users', {
        name,
        phone,
        email,
        fb,
        trid
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
      <div className="form-group">
        <Input name="trid" placeholder="Transaction ID" value={trid} onChange={handleChange} />
      </div>
      {loading && <p className="alert loading">We are storing your data...</p>}
      {(error || success ) && <p className={`alert ${error ? 'error' : 'success'}`}>{error || success}</p>}
      <Button style={{ marginTop: 25, backgroundColor: '#2e2e2e', color: '#fff', cursor: hasAllData ? 'pointer' : 'not-allowed', opacity: hasAllData ? 1 : 0.5 }} type="submit" title="Register" />
    </form>
  )
}
