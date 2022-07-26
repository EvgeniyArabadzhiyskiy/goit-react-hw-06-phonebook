import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import userContacts from './userContacts';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';

const App = () => {
  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <PhoneForm />
        </Section>

        <Section title="Find contacts by name">
          <FilterContacts />
        </Section>

        <Section title="Contacts">
          <ContactList />
        </Section>
      </Container>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </div>
  );
};

export default App;
