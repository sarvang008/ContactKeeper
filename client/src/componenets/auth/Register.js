import React, { useState } from 'react';

const Register = props => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  const [user, setUser] = useState(initialState);
  const { name, email, password, password2 } = user;
  const onSubmit = e => {
    e.preventDefault();
    console.log('Register ');
  };
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            id='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type='button'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
