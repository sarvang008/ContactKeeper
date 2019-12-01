import React, { useState } from 'react';

const Login = props => {
  const initialState = {
    email: '',
    password: ''
  };

  const [user, setUser] = useState(initialState);
  const { email, password } = user;
  const onSubmit = e => {
    e.preventDefault();
    console.log('Login ');
  };
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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
        <input
          type='button'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
