import React, { Fragment, useState, useContext, useEffect } from 'react';
import ContactContext from './../../context/contacts/contactContext';

const ContactForm = props => {
  const contactContext = useContext(ContactContext);
  const { current, clearCurrent, addContact, updateContact } = contactContext;

  const initialState = { name: '', email: '', phone: '', type: 'personal' };
  const [contact, setContact] = useState(initialState);

  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact(initialState);
    }
  }, [contactContext, current]);

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    //  console.log(e.target.name);
    //  console.log(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      //clearCurrent();
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        type='text'
        name='name'
        placeholder='Enter your name'
        value={name}
        onChange={onChange}
        required
      />
      <input
        type='email'
        name='email'
        placeholder='Enter your email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='Enter Phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        onChange={onChange}
        id='professional'
        value='professional'
        checked={type === 'professional'}
      />
      <label htmlFor='professional'>Professional</label>{' '}
      <input
        type='radio'
        name='type'
        id='personal'
        value='personal'
        onChange={onChange}
        checked={type === 'personal'}
      />
      <label htmlFor='personal'>Personal</label>
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
