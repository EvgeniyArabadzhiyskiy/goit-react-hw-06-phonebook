const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = state => {
  const items = getItems(state);
  const filterContacts = getFilter(state);

  const normalizedFilter = filterContacts.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const contactsSelectors = {
  getItems,
  getFilter,
  getVisibleContacts,
};
