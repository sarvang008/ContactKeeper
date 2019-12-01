import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contacts/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const Contacts = props => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;
  return (
    <Fragment>
      <TransitionGroup>
        {(filtered || contacts).map(contact => (
          <CSSTransition key={contact.id} timeout={500} classNames='item'>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
