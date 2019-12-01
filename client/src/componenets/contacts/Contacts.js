import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contacts/contactContext';
import ContactItem from './ContactItem';
const Contacts = props => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map(contact => (
        <h3 key={contact.id}>
          <ContactItem contact={contact} />
        </h3>
      ))}
    </Fragment>
  );
};

export default Contacts;
