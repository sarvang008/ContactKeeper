import React, {useContext, useState} from 'react';

import AlertContext from './../../context/alert/alertContext';

const Register = props => {
  const initialState = {name : '', email : '', password : '', password2 : ''};
  const alertContext = useContext(AlertContext);
  const {setAlert} = alertContext;
  const [user, setUser] = useState(initialState);
  const {name, email, password, password2} = user;
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please Enter all Fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords dont Match', 'danger');
      setUser({...user, password : '', password2 : ''});
    } else {
      console.log('Register ');
    }
  };
  const onChange =
      e => { setUser({...user, [e.target.name] : e.target.value}); };

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
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
  type = 'email'
  name = 'email'
  id = 'email'
  value = {email} onChange =
      {onChange} required / >
      </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label><
      input
  type = 'password'
  name = 'password'
  id = 'password'
  value = {password} onChange = {onChange} required
  minLength =
      '6' / >
      </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label><
      input
  type = 'password'
  name = 'password2'
  id = 'password2'
  value = {password2} onChange = {onChange} required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
