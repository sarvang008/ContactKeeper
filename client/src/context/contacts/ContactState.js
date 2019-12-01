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
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);
  //add contact
  const addContact = contact => {
    contact.id = uuid.v4();

    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //clear current contact
  const clearCurrent = contact => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // filter contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //clear filter

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
