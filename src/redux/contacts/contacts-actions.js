import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/ADD', ({ name, number }) => {
  return {
    payload: {
      id: shortid(),
      name,
      number,
      favorites: false,
    },
  };
});

const deleteContact = createAction('contacts/DELETE');

const filteredContacts = createAction('contacts/FILTER');

const toggleFavoritContact = createAction('contacts/TOGGLE')

const contactsActions = {
  addContact,
  deleteContact,
  filteredContacts,
  toggleFavoritContact,
};

export default contactsActions;
