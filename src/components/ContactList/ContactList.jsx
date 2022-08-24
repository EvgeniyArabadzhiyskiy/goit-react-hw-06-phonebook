import ContactItem from './ContactItem/ContactItem';
import { Box } from '../Box/Box';

import { useDispatch, useSelector } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import { contactsSelectors } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filtredContacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = id => {
    dispatch(contactsActions.deleteContact(id));
  };

  const toggleFavoritContact = id => {
    dispatch(contactsActions.toggleFavoritContact(id));
  };

  return (
    <Box border="normal" p={4} as="ul">
      {filtredContacts.map(({ id, name, number, favorites }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            favorites={favorites}
            onDeleteContact={() => onDeleteContact(id)}
            toggleFavoritContact={() => toggleFavoritContact(id)}
          />
        );
      })}
    </Box>
  );
};

export default ContactList;
