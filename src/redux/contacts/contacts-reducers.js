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

// const contactsReducer = createReducer([], builder => {
//   builder
//     .addCase(contactsActions.addContact, (state, { payload }) => {
//       return [payload, ...state];
//     })
//     .addCase(contactsActions.deleteContact, (state, { payload }) => {
//       return state.filter(contact => contact.id !== payload);
//     })
//     .addCase(contactsActions.toggleFavoritContact, (state, { payload }) => {
//       return state.map(contact =>
//         contact.id === payload
//           ? { ...contact, favorites: !contact.favorites }
//           : contact
//       );
//     });
// });

// const filterReducer = createReducer('', builder => {
//   builder.addCase(contactsActions.filteredContacts, (_state, { payload }) => {
//     return payload;
//   });
// });

// export default combineReducers({
//   items: contactsReducer,
//   filter: filterReducer,
// });
