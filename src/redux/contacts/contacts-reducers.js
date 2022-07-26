import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const contactsReducer = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [payload, ...state],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [contactsActions.toggleFavoritContact]: (state, { payload }) =>
    state.map(contact => {
      return contact.id === payload
        ? { ...contact, favorites: !contact.favorites }
        : contact;
    }),
});

const filterReducer = createReducer('', {
  [contactsActions.filteredContacts]: (_state, { payload }) => payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

// const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactsActions.addContact.type:
//       return [payload, ...state];
//     case contactsActions.deleteContact.type:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case contactsActions.filteredContacts.type:
//       return payload;

//     default:
//       return state;
//   }
// };
