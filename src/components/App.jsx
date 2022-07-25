import { useState } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import userContacts from './userContacts';
import useLocalStorage from '../helpers/useLocalStorage';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';


const STORAGE_KEY = 'contact';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, []);
  const [filter, setFilter] = useState('');

  const addNewContact = ({ name, number }) => {
    const foundName = contacts.find(contact => contact.name === name);
    if (foundName) {
      toast.error(`${name} is alredy in contacts`, {
        position: 'top-right',
        transition: Zoom,
      });
      return;
    }

    const newContact = {
      id: shortid(),
      name,
      number,
    };

    setContacts(prevState => {
      return [newContact, ...prevState];
    });
  };

  const deleteContact = contactID => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactID);
    });
  };

  const changeInput = evt => {
    setFilter(evt.target.value);
  };

  const visibleContacts = () => {
    const normalizeContact = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeContact);
    });
  };

  const filtredContacts = visibleContacts();
  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <PhoneForm addNewContact={addNewContact} />
        </Section>

        <Section title="Find contacts by name">
          <FilterContacts value={filter} onChangeInput={changeInput} />
        </Section>

        <Section title="Contacts">
          <ContactList
            contacts={filtredContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
      </Container>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </div>
  );
};

export default App;
