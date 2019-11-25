import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';
import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './contactContext';

import ContactReducer from './contactReducer';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'test',
        email: 'test@gmail.com',
        phone: '111111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'test2',
        email: 'test2@gmail.com',
        phone: '222222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'test3',
        email: 'test3@gmail.com',
        phone: '33333',
        type: 'professional'
      },
      {
        id: 4,
        name: 'test4',
        email: 'test4@gmail.com',
        phone: '444444',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);
  //add contact

  //delete contact

  //set current contact

  //clear current contact

  //update contact

  // filter contacts
  //clear filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
