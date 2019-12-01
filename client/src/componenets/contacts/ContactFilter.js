import React, { useRef, useContext, useEffect } from 'react';
import ContactContext from './../../context/contacts/contactContext';

const ContactFilter = props => {
  const text = useRef('');
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  // will clear text if no result found
  useEffect(() => {
    // if (filtered !== null) {
    //   if (filtered !== undefined) {
    //     if (filtered.length <= 0) {
    //       clearFilter();
    //       text.current.value = '';
    //     }
    //   }
    // }
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered, text]);

  const onChange = e => {
    console.log(text.current.value);
    if (text.current.value !== '') {
      filterContacts(text.current.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type='text'
        ref={text}
        name='filter'
        id=''
        placeholder='Search ...'
        onChange={onChange}
      />
    </form>
  );
};
export default ContactFilter;
