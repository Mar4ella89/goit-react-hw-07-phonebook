import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contact-slice';
import Notification from 'components/Notification/Notification';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(store => store.contacts);
  const getFilter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = getFilter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  const visibleContacts = getVisibleContacts();

  if (!Object.keys(visibleContacts).length)
    return <Notification message={`There is no contact here...`} />;
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <span className={css.contactName}>{name}</span>{' '}
          <span className={css.contactNumber}>{number}</span>
          <button
            className={css.contactBtnClose}
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
